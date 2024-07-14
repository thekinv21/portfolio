
# Deploy a NextJS To a VPS | Ubuntu 20.04 Server With NGINX

- [NEXTJS](https://www.github.com/octokatherine)

React projesi deploy etmek istiyorsanız:

  - [React Deploy dokümanı](https://github.com/thekinv21/deployment)

Eğer `Nginx` ve `VPS Ubuntu` ile herhangi bir bilgiye sahip değilseniz öncelik olarak ReactJS deployment dökümanını incelemeniz önerilir...

Burada ReactJS deployment kısmının devamıdır gibi düşünebilirsiniz ve  bunları yaparken tek VPS ve DNS adı kullanarak yapıldı



### 1) GoDaddy'den aldığımız DNS'e ekstra uygulama domain set etme

- [ Dns server al ](https://account.godaddy.com)


Buradan kendiniz istediğiniz dns alabilirsiniz ve ayarlarını yapabilirsiniz


![Ekran Resmi 2024-07-13 17 09 40](https://github.com/user-attachments/assets/367d4f30-571f-4500-ae19-00b23bb8992e)



### DNS adresi aldıktan sonra aşağıdaki ayarları yapmanız gerekmektedir..

![Ekran Resmi 2024-07-13 17 13 01](https://github.com/user-attachments/assets/a4cd8cc4-1a9f-4ea8-8ddc-7c277da31961)


### Burasi bizim React deployment için kullandığımız DNS ayarlarıdır, aşağıdaki resimde ise yeni eklenen ayarı görebilirisiniz

![Ekran Resmi 2024-07-14 14 57 52](https://github.com/user-attachments/assets/2d556341-6bd8-4303-8db5-92fbcaa520c6)



### 2) Nginx ayarlarına NextJS için server set etme 

- Eğer Nginx kurmadıysanız veya herhangi bişey yapmadıysanız React deployment repositorisine bakabilirsiniz..



React projesini deploy ettiğimizde kullandığımız nginx Konfigürasyonu ayarları aşağıdaki resimde gösterilmiştir 

![nginix](https://github.com/user-attachments/assets/6740993c-b250-444c-aa11-7085df3ae49b)


- /etc/nginx/sites-available klasörüne git ve içerisindeki default adlı dosyanın içerisini tamamen boşalt.

```
sudo nano /etc/nginx/sites-available/default
```


- NextJS için /etc/nginx/sites-available/default dosyasını aşağıdaki gibi doldur.


![dasdkasd](https://github.com/user-attachments/assets/3ba53632-7c4f-42d9-b594-df63fb1a4069)




## 3) Nginx restart etmek için:

```
sudo systemctl restart nginx
```


## 4) CERTBOT Kurulması ve Yapılandırılması

  - Öncelikle certbot ve nginx plugin'ini kurmalıyız.

```
sudo apt install certbot python3-certbot-nginx
```

![Ekran Resmi 2024-07-14 15 42 31](https://github.com/user-attachments/assets/1db7b366-68f4-44e6-a594-5493e457d6f1)

  - Kurulum sonrası sertifikaları almalıyız.
  - NOT: Günde 5 kereden fazla sertifika almaya çalışırsanız ban yersiniz 2 günlük

```
sudo certbot --nginx -d nextjs.vadimkiniabaev.site -d vadimkiniabaev.site
```


![Ekran Resmi 2024-07-14 18 26 07](https://github.com/user-attachments/assets/dcec36ea-1938-431c-98d7-86083418f107)


  - Burada bizim 2 tane server_name var
  
  1) `vadimkiniabaev.site` - React uygulaması için server name
  
  2) `nextjs.vadimkiniabaev.site` - NextJS uygulaması için server name


Burada 1 DNS server altına çalıştırabilmek için `YAYICI` olan `Nginx` kullandığımız için serverları hepsini tanımlamamız gerekiyor SSL sertifikaları alırken bütün server adlarını vermeliyiz hem `Nginx` konfigürasyon dosyasında hemde sertifikaları alırken

### NOT
Eğer bizim 3.tane server_name olsaydı şu şekil olacakti

```sudo certbot --nginx -d 1.server_name -d 2.server_name -d 3.server_name```

### 

  - Yukarıdaki komut çalıştıktan sonra /etc/nginx/sites-enabled/default dosyasında otomatik bazı değişiklikler olması gerekmektedir. Diyelim ki değişiklikler olmadı ya da yukarıdaki komut hata aldığında certbot ve plugin tekrar remove edilip kurulur. (Demek ki 2 önceki kurulumda daha önceden varolan kurulumdan dolayı kurulum gerçekleşmemiş. Dolayısıyla önce remove sonra install yapacağız.)



```
# Removing
sudo apt remove certbot python3-certbot-nginx
rm  -rf /etc/letsencrypt/
rm /usr/bin/certbot

# Installing
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d nextjs.vadimkiniabaev.site -d vadimkiniabaev.site
```



## 5) CERTBOT Test Edilmesi

```
 certbot renew --dry-run
```


## 6) Nextjs uygulamasının VPS Ubuntu sunucusuna eklenmesi
  
  - Eklemek istediğiniz git repoya gidip SSH linkini almalıyız

![Ekran Resmi 2024-07-14 18 40 34](https://github.com/user-attachments/assets/0bb4f042-69e9-4cec-a45e-828d4e373fb4)


##

- Daha sonra VPS Ubuntu sunucusunda bulunan `/home/alwyzon` klasörü altına o repoyu
  klonlamalıyız


![Ekran Resmi 2024-07-14 18 41 06](https://github.com/user-attachments/assets/46740e4f-9bc3-4259-89ba-4b8660632269)


##

- Klonladıktan sonra o dosyaya `chmod 777 dosya_adı` komutu ile public hale getirmeliyiz

- Bu komutu yazdıktan sonra dosya public hale gelmiş ise yeşil renkte olacaktir
![Ekran Resmi 2024-07-14 18 45 33](https://github.com/user-attachments/assets/95e64604-a97b-4549-bd17-82d4fe451ebe)


##

- Klonladığımız repo içerisine girip ilk yapmamız gereken doğru dosyayı eklediğimizden emin olmak için `ls` komutu ile kontrol etmeliyiz, eğer doğru ise `NODE` versiyonunu kontrol etmeliyiz

![Ekran Resmi 2024-07-14 18 49 32](https://github.com/user-attachments/assets/4c1da98e-8f79-41df-bd66-94a8f463c411)


##

- Daha sonra `npm install` komutu ile bütün proje gereksinimlerini indirmeliyiz

![Ekran Resmi 2024-07-14 18 52 31](https://github.com/user-attachments/assets/ac21b512-bc23-4de7-b9eb-5c14d511e650)



##

- Kurulum tamamlandıktan sonra `npm run build` komutu ile projeyi `build` etmeliyiz

![Ekran Resmi 2024-07-14 18 53 32](https://github.com/user-attachments/assets/357a5e0a-a2bc-4a32-b803-6701cfb1ffe5)




##


- Build alındıktan sonra

```
  cp -r /home/alwyzon/nextjs-deployment/. /var/www/nextjs-deployment/
```

![Ekran Resmi 2024-07-14 18 57 07](https://github.com/user-attachments/assets/229ee3b9-9768-4975-b0ea-b4575a56a92c)

## 

- Bu komut ile `/var/www/` klasörünün altına yeni bir `nextjs-deployment` klasörüne ekledik

- `/var/www` altındaki nextjs dosya adı `NGINX` konfigürasyonü dosyasındaki NEXTJS ayarlarındaki  `17.satırda olan alias /var/www/dosya_adı` ile aynı olmalıdır 


![Ekran Resmi 2024-07-14 19 02 10](https://github.com/user-attachments/assets/c32068cd-f81a-4780-b356-cacf9ae9c5cd)

## 7) PM2 kurulumu

- PM2, Linux sunucularda Node.js projelerini yönetmek için güçlü bir araçtır. Otomatik yeniden başlatma, günlükleme ve izleme gibi özellikleri sayesinde uygulamalarınızın sorunsuz çalışmasını sağlar


```
npm install pm2@latest -g
```

  - Kurulumu tamamlandıktan sonra NextJS uygulamamızı ayağa kaldırmaya hazırız demektir
##


- Uygulama nodejs ise

```
pm2 start dist/index.js --name "repository_adı" -i max 
```
##

- Uygulama nextjs ise
```
pm2 start npm --name "next_repository_adı" -- start
```

  - Burada repository_adı `/var/www` klasörünün içine kaydettiğiniz `nextjs` veya `nodejs` repository adı 


##

```
pm2 start npm --name "repository_adı" -- start
```
 - Bu komut ile VPS Ubuntu sunucuda web sitenizi aktif edebilrisiniz

##


## 8) Nginx restart edilmeli

```
systemctl restart nginx
```
## 9) Ardindan bu komut çalışıtırılamlı


```
 pm2 restart website_adı
```


##



## 10) Ekstra işinize yarayabilir..

```
pm2 list
```

![Ekran Resmi 2024-07-14 19 16 48](https://github.com/user-attachments/assets/81fd3f30-67ce-4daa-8dc3-a3267af005fa)

 - Bu komut ile VPS Ubuntu sunucuda aktif olan websitenizin durumunu vs görebilirisiniz



##

```
pm2 stop `website_adı` veya `all`
```
 - Bu komut ile VPS Ubuntu sunucuda aktif olan websitenizi durdurabilirsiniz


##

```
pm2 delete `website_adı` veya `all`
```
 - Bu komut ile VPS Ubuntu sunucuda aktif veya pasif olan websitenizi silebilirsiniz


## Ekstra kaynaklar

 - [NEXTJS deploy etme ](https://ilgaz.medium.com/deploy-multiple-next-js-apps-on-ubuntu-with-nginx-e8081c9bb080)
 - [ReactJS deploy etme ](https://github.com/thekinv21/deployment)




















![Ekran Resmi 2024-06-04 13 31 10](https://github.com/thekinv21/next-portfolio/assets/92122363/64c854d8-6395-4552-9226-99c7bea6064a)


![Ekran Resmi 2024-06-04 13 31 31](https://github.com/thekinv21/next-portfolio/assets/92122363/fb766d91-a501-425d-ab87-e961bdc5b2e8)


![Ekran Resmi 2024-06-04 13 31 39](https://github.com/thekinv21/next-portfolio/assets/92122363/c0da6660-12b3-491f-b5af-84ec8646773b)


![Ekran Resmi 2024-06-04 13 32 18](https://github.com/thekinv21/next-portfolio/assets/92122363/f529b624-5128-40ec-9ea4-e240b5cfbeb2)

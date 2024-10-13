# Deploy a NextJS To a VPS | Ubuntu 20.04 Server With NGINX

- [NEXTJS](https://github.com/thekinv21)

React projesi deploy etmek istiyorsanız:

- [React Deploy dokümanı](https://github.com/thekinv21/deployment)

Eğer `Nginx` ve `VPS Ubuntu` ile herhangi bir bilgiye sahip değilseniz öncelik olarak ReactJS deployment dökümanını incelemeniz önerilir...

Burada ReactJS deployment kısmının devamıdır gibi düşünebilirsiniz ve bunları yaparken tek VPS ve DNS adı kullanarak yapıldı

### 1) GoDaddy'den aldığımız DNS'e ekstra uygulama domain set etme

- [ Dns server al ](https://account.godaddy.com)

Buradan kendiniz istediğiniz dns alabilirsiniz ve ayarlarını yapabilirsiniz

![Ekran Resmi 2024-07-13 17 09 40](https://github.com/user-attachments/assets/367d4f30-571f-4500-ae19-00b23bb8992e)

### DNS adresi aldıktan sonra aşağıdaki ayarları yapmanız gerekmektedir..

![Ekran Resmi 2024-07-13 17 13 01](https://github.com/user-attachments/assets/a4cd8cc4-1a9f-4ea8-8ddc-7c277da31961)

### Burasi bizim React deployment için kullandığımız DNS ayarlarıdır, aşağıdaki resimde ise yeni eklenen ayarı görebilirisiniz

![Ekran Resmi 2024-07-14 14 57 52](https://github.com/user-attachments/assets/1aeffa72-883d-4ccd-a4fb-fd677076ac02)

### 2) Nginx ayarlarına NextJS için server set etme

- Eğer Nginx kurmadıysanız veya herhangi bişey yapmadıysanız React deployment repositorisine bakabilirsiniz..

React projesini deploy ettiğimizde kullandığımız nginx Konfigürasyonu ayarları aşağıdaki resimde gösterilmiştir

![Ekran Resmi 2024-07-13 16 56 44](https://github.com/user-attachments/assets/d92f165f-4b50-4897-8ecb-547575c845ab)

- /etc/nginx/sites-available klasörüne git ve içerisindeki default adlı dosyanın içerisini tamamen boşalt.

```
sudo nano /etc/nginx/sites-available/default
```

- NextJS için /etc/nginx/sites-available/default dosyasını aşağıdaki gibi doldur.

![Ekran Resmi 2024-07-14 15 32 47](https://github.com/user-attachments/assets/115902f6-a463-4221-b264-8414b2e97f2d)

## 3) Nginx restart etmek için:

```
sudo systemctl restart nginx
```

## 4) CERTBOT Kurulması ve Yapılandırılması

- Öncelikle certbot ve nginx plugin'ini kurmalıyız.

```
sudo apt install certbot python3-certbot-nginx
```

![Ekran Resmi 2024-07-14 15 42 31](https://github.com/user-attachments/assets/bcca3788-66a3-49be-ad08-9d80dbc3c1ee)

- Kurulum sonrası sertifikaları almalıyız.

```
sudo certbot --nginx -d nextjs.vadimkiniabaev.site -d vadimkiniabaev.site
```

![Ekran Resmi 2024-07-14 18 26 07](https://github.com/user-attachments/assets/d68105e4-c52a-467c-a409-5d84e2252620)

- Burada bizim 2 tane server_name var

1. `vadimkiniabaev.site` - React uygulaması için server name

2. `nextjs.vadimkiniabaev.site` - NextJS uygulaması için server name

Burada 1 DNS server altına çalıştırabilmek için `YAYICI` olan `Nginx` kullandığımız için serverları hepsini tanımlamamız gerekiyor SSL sertifikaları alırken bütün server adlarını vermeliyiz hem `Nginx` konfigürasyon dosyasında hemde sertifikaları alırken

### NOT

Eğer bizim 3.tane server_name olsaydı şu şekil olacakti

`sudo certbot --nginx -d 1.server_name -d 2.server_name -d 3.server_name`

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

![Ekran Resmi 2024-07-14 18 40 34](https://github.com/user-attachments/assets/a92020d8-8476-498d-8ee3-df553e2cb2f2)

##

- Daha sonra VPS Ubuntu sunucusunda bulunan `/var/www` klasörü altına o repoyu
  klonlamalıyız

##

- Klonladığımız repo içerisine girip ilk yapmamız gereken doğru dosyayı eklediğimizden emin olmak için `ls` komutu ile kontrol etmeliyiz, eğer doğru ise `NODE` versiyonunu kontrol etmeliyiz

##

- Daha sonra `npm install` komutu ile bütün proje gereksinimlerini indirmeliyiz

##

- Kurulum tamamlandıktan sonra `npm run build` komutu ile projeyi `build` etmeliyiz

## NOT:

Günde 5 kereden fazla sertifika almaya çalışırsanız ban yersiniz 2 günlük

- Build alındıktan sonra

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
- Bu işlemleri /var/www/repository_adı dosyası içinde gerçekleştirilmelidir
- pm2 ilk komutu /var/www/repository_adı dosyası içinde çalıştır

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

![Ekran Resmi 2024-07-14 18 15 15](https://github.com/user-attachments/assets/022e5613-3336-4e1c-879f-2002bd6fcf11)

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



## 📌  Deploying Next.js App on Ubuntu Server 20.04 with Nginx and PM2

![web](https://github.com/thekinv21/next-portfolio/assets/92122363/64c854d8-6395-4552-9226-99c7bea6064a)

## Medium Link:

 - [NextJS Deployment](https://medium.com/@thekinv21/deploying-next-js-app-on-ubuntu-server-20-04-with-nginx-and-pm2-c573e4da37b8)
 - [Spring Boot on Tomcat 10 Deployment](https://medium.com/@thekinv21/deploy-spring-boot-on-tomcat-10-with-nginx-autodeploy-ci-cd-via-github-actions-on-ubuntu-24-04-43849a43211d)
 - [ReactJs Deployment](https://medium.com/@thekinv21/deploying-reactjs-app-on-ubuntu-server-20-04-using-nginx-9a4970b8a955)
 - [PostgreSql Deployment](https://medium.com/@thekinv21/deploying-postgresql-database-on-ubuntu-server-20-04-fc7e6827b129)
 - [NestJS Deployment](https://medium.com/@thekinv21/deploying-a-nestjs-app-with-pm2-on-a-ubuntu-server-20-04-using-nginx-996a6533f2b7)



## 8) All command shortcut:

```
pm2 stop portfolio && pm2 delete portfolio && pm2 save --force && cd /var/www/portfolio && rm -rf node_modules package-lock.json .next && git pull && git fetch && npm install && npm run build && pm2 start npm --name "portfolio" -- start && sudo systemctl restart nginx && pm2 restart portfolio
```

## 8) For reset logs:


```
pm2 flush               # Flush all logs
pm2 reloadLogs          # Reload all logs
```

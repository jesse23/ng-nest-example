
https://www.djamware.com/post/5d2898430707cc5968d9d57f/build-a-web-app-using-nestjs-fastify-mongodb-and-angular-8

- launch mongoDB
```
mongod --dbpath ./db --logpath ./logs/mongod.log --fork
```

- launch client
```
ng serve --host 0.0.0.0 --port 8080 --disableHostCheck
```

- build client
```
ng build --prod
```
# vue-admin-sandbox

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## ローカル開発用の自己証明書作成

```
openssl genrsa 2048 > server.pem
openssl req -new -key server.pem -out csr.pem
openssl req -days 365 -in csr.pem -key server.pem -x509 -out crt.pem
```

## 認証
http://uehaj.hatenablog.com/entry/2016/05/16/125551

POST /api/login
{
    "email": "admin@exmple.com",
    "password": "password"
}

{
    "user_id": 0,
    "role": "ADMIN",
    "token_type": "Bear",
    "access_token": "jwthogehoge",
    "expires_in": 3600,
    "refresh_token": ""
}
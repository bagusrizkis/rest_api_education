# TODO

## Pre

- [x] Init Project (`npm init -y`)
- [x] install express, postgres, sequelize:
      `npm i express pg sequelize`
- [x] Init source code dengan `sequelize-cli`
      `sequelize init`
- [x] Setup config DB
- [x] Buat model dan migrasi

```sh
sequelize model:create --name Movie --attributes title:STRING,genre:STRING,imageUrl:STRING,releasedYear:STRING,status:ENUM:'{Released,In Production}'
```

- [x] Buat Seeding
- [x] init DB, migrasi, dan seeding

```sh
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

---

## Lecture

- [x] Buat dokumentasi
- [x] Buat entry point app

      - https://expressjs.com/
      - test dengan postman

- [x] Buat routing dan handlernya

      - GET /.. (mendapatkan semua movie)
      - POST /.. (membuat data movie)

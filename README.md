# Objective:

- Dapat membuat Dokumentasi REST API dengan Markdown
- Dapat membuat Server Restful API dengan express
- Dapat mengimplementasikan status code minimal 500, 200, 201
- Dapat menggunakan Api development tools seperti postman

---

## Postman

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/12708314-f3e64f2c-24a0-4756-9c57-d10b722dc1db?action=collection%2Ffork&collection-url=entityId%3D12708314-f3e64f2c-24a0-4756-9c57-d10b722dc1db%26entityType%3Dcollection%26workspaceId%3Df92f1f72-fd8f-445e-8935-6f774fb005b6)

# TODO:

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

```sh
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
```

---

## Lecture

- [x] Basic server endpoint (Hello World)

  - https://expressjs.com/
  - test dengan postman

- [x] Buat dokumentasi
- [x] Buat routing dan handlernya

  - GET /.. (mendapatkan semua movie)
  - POST /.. (membuat data movie)
  - DELETE /.. (menghapus movie)

---

- [x] Buat routing dan handlernya

      - [x] DELETE / (menghapus movie by id)
      - [x] PUT / (mengubah data movie by id)

---

## Lecture Protecting REST API

- [x] Model User

      - validasi
      - hooks hashing password (bcryptjs)
      - add UserId in movies

- [x] register ?
- [x] login ?
- [x] middleware ?
- [x] authentication movie

      - install jsonwebtoken

- [x] authorization edit dan delete movie

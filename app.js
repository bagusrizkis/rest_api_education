// diapakai development aja
require("dotenv").config();
const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

// middleware untuk parsing data dari user
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ! aplication level middleware
// diaplikasikan di seluruh endpoint dibawahnya
// app.use(
//   (req, res, next) => {
//     // nyimpen data sementara sampai endpoint
//     req.iniDataku = "halo";
//     console.log("masuk sini");
//     next();
//   },
//   (req, res, next) => {
//     console.log("masuk bawah");
//     next();
//   }
// );
// dibawahnya harus lewat dulu yang diatas

// ! router level middleware
// hanya diaplikasikan di router yang diberi
// app.get(
//   "/testing",
//   (req, res, next) => {
//     console.log("router level");
//     next();
//   },
//   (req, res, next) => {
//     console.log("router level");
//     next();
//   },
//   (req, res, next) => {
//     console.log("router level");
//     next();
//   },
//   (req, res) => {
//     console.log("data dari middleware :::", req.iniDataku);
//     res.send("Hello World!");
//   }
// );

app.use(router);

app.listen(port, () => {
  console.log(`Movie App :: listening at http://localhost:${port}`);
});

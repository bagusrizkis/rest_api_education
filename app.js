const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

// middleware untuk parsing data dari user
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

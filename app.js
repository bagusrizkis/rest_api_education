const express = require("express");
const router = require("./routes");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.use(router);

app.listen(port, () => {
  console.log(`Movie app listening at http://localhost:${port}`);
});

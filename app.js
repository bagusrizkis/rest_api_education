const express = require("express");
const routes = require("./routes");
const app = express();
const port = 3000;

/**
 * Digunakan untuk parsing data dari client
 * @urlencoded : form based
 * @json : JSON based file type
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// menggunakan routingan dari folder routes
app.use(routes);

app.listen(port, () => {
  console.log(`movie_app :: listening at http://localhost:${port}`);
});

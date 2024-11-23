import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8000;

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`server berjalan di port : http://localhost:${port}`)
);

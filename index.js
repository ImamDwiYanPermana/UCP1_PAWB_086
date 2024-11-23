import express from "express";
import bodyParser from "body-parser";
import pupukRoutes from "./routes/pupuk.js";
import bibitRoutes from "./routes/bibit.js";

const app = express();
const port = 3000;

app.use("/pupuk", pupukRoutes);
app.use("/bibit", bibitRoutes);

app.get("/", (req, res) => {
  console.log(["GET ROUTE"]);
  res.send("Selamat Imam Dwi Yan Permana");
});

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(s`erver berjalan di port : http://localhost:${port}`)
);

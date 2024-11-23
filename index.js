import express from "express";
import bodyParser from "body-parser";
import pupukRoutes from "./routes/pupuk.js";
import bibitRoutes from "./routes/bibit.js";

const app = express();
const port = 3000;

app.use(bodyParser.json()); // Untuk parsing JSON
app.use("/pupuk", pupukRoutes); // Routing untuk pupuk
app.use("/bibit", bibitRoutes); // Routing untuk bibit

app.get("/", (req, res) => {
  res.send("Selamat datang di sistem manajemen pupuk dan bibit!");
});

app.listen(port, () =>
  console.log(`Server berjalan di port: http://localhost:${port}`)
);

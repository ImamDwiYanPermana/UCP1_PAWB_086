import express from "express";
import bodyParser from "body-parser";
import pupukRoutes from "./routes/pupuk.js";
import bibitRoutes from "./routes/bibit.js";
import pupuk_todosRoutes from "./routes/pupuk_todo.js";

const app = express();
const port = 3000;

app.use("/pupuk", pupukRoutes);
app.use("/bibit", bibitRoutes);
app.use("/pupukkk", pupuk_todosRoutes);

app.get("/", (req, res) => {
  console.log(["GET ROUTE"]);
  res.send("Selamat Imam Dwi Yan Permana");
});

app.use(bodyParser.json());

app.listen(port, () =>
  console.log(`server berjalan di port : http://localhost:${port}`)
);

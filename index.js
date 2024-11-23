import express from "express";
import bodyParser from "body-parser";
import pupukRoutes from "./routes/pupuk.js";
import bibitRoutes from "./routes/bibit.js";

const app = express();
const port = 3000;

app.use("/pupuk", pupukRoutes);
app.use("/bibit", bibitRoutes);

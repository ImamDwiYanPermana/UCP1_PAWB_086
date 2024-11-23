import express, { Router } from "express";
const router = express.Router();

const bibit = [
  {
    nama_bibit: "padi",
    varietas: "IR64",
    kondisi_tumbuh: "Kebutuhan sinar matahari",
  },
];

router.get("/", (req, res) => {
  res.send(bibit);
});

export default router;

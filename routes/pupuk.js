import express, { Router } from "express";
const router = express.Router();

const pupuk = [
  {
    nama_pupuk: "urea",
    nutrisi: "nitrogen",
    tipe_pupuk: "organik",
  },
];

router.get("/", (req, res) => {
  res.send(pupuk);
});

export default router;

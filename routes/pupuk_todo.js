const express = require("express");
const router = express.Router();

const pupuk = [
  {
    id: 1,
    nama_bibit: "padi",
    varietas: "IR64",
    kondisi_tumbuh: "Kebutuhan sinar matahari",
  },
];

// Mendapatkan semua data pupuk
router.get("/", (req, res) => {
  res.json(pupuk);
});

// Menambahkan data pupuk baru
router.post("/", (req, res) => {
  const newPupuk = {
    id: pupuk.length + 1,
    nama_bibit: req.body.nama_bibit,
    varietas: req.body.varietas,
    kondisi_tumbuh: req.body.kondisi_tumbuh,
  };
  pupuk.push(newPupuk);
  res.status(201).json(newPupuk);
});

// Menghapus data pupuk berdasarkan ID
router.delete("/:id", (req, res) => {
  const pupukIndex = pupuk.findIndex((p) => p.id === parseInt(req.params.id));
  if (pupukIndex === -1)
    return res.status(404).json({ message: "Data pupuk tidak ditemukan" });

  const deletedPupuk = pupuk.splice(pupukIndex, 1)[0]; // Menghapus dan menyimpan data pupuk yang dihapus
  res
    .status(200)
    .json({ message: `Data pupuk '${deletedPupuk.nama_bibit}' telah dihapus` });
});

// Memperbarui data pupuk berdasarkan ID
router.put("/:id", (req, res) => {
  const pupukItem = pupuk.find((p) => p.id === parseInt(req.params.id));
  if (!pupukItem)
    return res.status(404).json({ message: "Data pupuk tidak ditemukan" });

  pupukItem.nama_bibit = req.body.nama_bibit || pupukItem.nama_bibit;
  pupukItem.varietas = req.body.varietas || pupukItem.varietas;
  pupukItem.kondisi_tumbuh =
    req.body.kondisi_tumbuh || pupukItem.kondisi_tumbuh;

  res.status(200).json({
    message: `Data pupuk dengan ID '${pupukItem.id}' telah diperbarui`,
    updatePupuk: pupukItem,
  });
});

module.exports = router;

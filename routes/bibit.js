import express from "express";

const router = express.Router();

// Data sementara untuk bibit
const bibit = [
  {
    id: 1,
    nama_bibit: "padi",
    varietas: "IR64",
    kondisi_tumbuh: "Kebutuhan sinar matahari",
  },
];

// Mendapatkan semua data bibit
router.get("/", (req, res) => {
  res.json(bibit);
});

// Menambahkan bibit baru
router.post("/", (req, res) => {
  const { nama_bibit, varietas, kondisi_tumbuh } = req.body;

  if (!nama_bibit || !varietas || !kondisi_tumbuh) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const newBibit = {
    id: bibit.length + 1, // ID otomatis
    nama_bibit,
    varietas,
    kondisi_tumbuh,
  };

  bibit.push(newBibit);
  res.status(201).json(newBibit);
});

// Mengupdate bibit berdasarkan ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nama_bibit, varietas, kondisi_tumbuh } = req.body;

  const index = bibit.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Bibit tidak ditemukan" });
  }

  if (!nama_bibit || !varietas || !kondisi_tumbuh) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  // Update data
  bibit[index] = { ...bibit[index], nama_bibit, varietas, kondisi_tumbuh };
  res.json(bibit[index]);
});

// Menghapus bibit berdasarkan ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  const index = bibit.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Bibit tidak ditemukan" });
  }

  // Hapus data dari array
  bibit.splice(index, 1);
  res.sendStatus(204);
});

export default router;

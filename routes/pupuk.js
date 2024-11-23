import express from "express";

const router = express.Router();

// Data sementara untuk pupuk
const pupuk = [
  {
    id: 1,
    nama_pupuk: "urea",
    nutrisi: "nitrogen",
    tipe_pupuk: "organik",
  },
];

// Mendapatkan semua data pupuk
router.get("/", (req, res) => {
  res.json(pupuk);
});

// Menambahkan pupuk baru
router.post("/", (req, res) => {
  const { nama_pupuk, nutrisi, tipe_pupuk } = req.body;

  if (!nama_pupuk || !nutrisi || !tipe_pupuk) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  const newPupuk = {
    id: pupuk.length + 1, // ID otomatis
    nama_pupuk,
    nutrisi,
    tipe_pupuk,
  };

  pupuk.push(newPupuk);
  res.status(201).json(newPupuk);
});

// Mengupdate pupuk berdasarkan ID
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { nama_pupuk, nutrisi, tipe_pupuk } = req.body;

  const index = pupuk.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Pupuk tidak ditemukan" });
  }

  if (!nama_pupuk || !nutrisi || !tipe_pupuk) {
    return res.status(400).json({ message: "Semua field harus diisi" });
  }

  // Update data
  pupuk[index] = { ...pupuk[index], nama_pupuk, nutrisi, tipe_pupuk };
  res.json(pupuk[index]);
});

// Menghapus pupuk berdasarkan ID
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const index = pupuk.findIndex((item) => item.id === parseInt(id));

  if (index === -1) {
    return res.status(404).json({ message: "Pupuk tidak ditemukan" });
  }

  // Hapus data dari array
  pupuk.splice(index, 1);
  res.status(204).send(); // Tidak ada konten yang dikembalikan
});

export default router;

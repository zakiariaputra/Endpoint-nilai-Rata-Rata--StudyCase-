const siswaData = require("../data/siswa");

function hitungRataRata(req, res) {
    const { kelas } = req.params;
    const { order_by } = req.query; // "ASC" atau "DESC"

    const daftarSiswa = siswaData[kelas];

    if (!daftarSiswa) {
        return res.status(404).json({
            message: `Kelas '${kelas}' tidak ditemukan`,
        });
    }

    // hitung rata-rata tiap siswa
    let hasil = daftarSiswa.map((siswa) => {
        const total = siswa.nilai.reduce((sum, n) => sum + n, 0);
        const average = Math.round((total / siswa.nilai.length) * 100) / 100;
        return { name: siswa.name, average };
    });

    // sorting berdasarkan average, jika order_by dikirim
    if (order_by) {
        const order = order_by.toString().toUpperCase();

        if (order !== "ASC" && order !== "DESC") {
            return res.status(400).json({
                message: "order_by hanya boleh bernilai 'ASC' atau 'DESC'",
            });
        }

        hasil.sort((a, b) =>
            order === "ASC" ? a.average - b.average : b.average - a.average
        );
    }

    return res.status(200).json(hasil);
}

module.exports = { hitungRataRata };

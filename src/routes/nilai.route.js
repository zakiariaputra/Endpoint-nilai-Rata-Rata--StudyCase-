const express = require("express");
const router = express.Router();
const { hitungRataRata } = require("../controllers/nilai.controller");

// get {domain}/nilai/rata-rata/:kelas?order_by=ASC|DESC
router.get("/rata-rata/:kelas", hitungRataRata);

module.exports = router;

const express = require("express");
const nilaiRoute = require("./routes/nilai.route");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/nilai", nilaiRoute);

app.listen(PORT, () => {
    console.log(`Server jalan di http://localhost:${PORT}`);
});


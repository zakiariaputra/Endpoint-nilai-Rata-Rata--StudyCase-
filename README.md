# Student Average Grade API Endpoint

Dokumentasi API service untuk menghitung dan menampilkan nilai rata-rata siswa berdasarkan kelas tertentu, dilengkapi dengan fitur pengurutan (*sorting*).

---

## > Deskripsi Study Case

Proyek ini menyediakan sebuah API endpoint yang memproses data nilai siswa. Endpoint ini menerima parameter kelas untuk memfilter data, lalu mengembalikan daftar siswa beserta rata-rata nilai mereka. API ini juga mendukung pengurutan (*ordering*) berdasarkan nilai rata-rata secara **Ascending (ASC)** maupun **Descending (DESC)**.

- **Deadline:** Jumat, 25 September 2026
- **Status:** Done

---

## > Endpoint Specification

### Get Average Grades by Class

Mengambil daftar siswa dan nilai rata-ratanya berdasarkan nama kelas.

- **URL:** `/nilai/rata-rata/:kelas?order_by=`
- **Method:** `GET`
- **URL Params:**
  - `kelas` *(Required)*: Nama atau ID kelas yang ingin ditampilkan (misal: '12A', '12B').
- **Query Params:**
  - `order_by` *(Optional)*: Urutan hasil berdasarkan rata-rata. 
    - `ASC` : Dari nilai terendah ke tertinggi.
    - `DESC` : Dari nilai tertinggi ke terendah.
    - `catatan` : Jika query tidak diisi data akan diurutkan sesuai index array of objek yang ada.

---

## > Example Requests

### 1. Default Request (Atau dengan Descending Order)
```http
GET /nilai/rata-rata/12A?order_by=
```

---

## >> Cara Penggunaan (Quick Start)

Jalankan perintah-perintah berikut secara urut di Terminal(windows) / Command Prompt kamu:

```bash
# 1. Clone / Pull repository dari GitHub
git clone https://github.com/zakiariaputra/Endpoint-nilai-Rata-Rata--StudyCase-.git

# 2. Masuk ke direktori projek yang sudah di-clone
cd Endpoint-nilai-Rata-Rata--StudyCase-

# 3. Inisialisasi npm
npm init -y

# 4. Install dependensi Express.js
npm install express

# 5. Masuk ke dalam direktori src
cd src

# 6. Jalankan server (pilih salah satu perintah di bawah ini)
node server.js
# atau
npm run develop
```
---


### Dan test dibrowser  

```Plaintext
http://localhost:3000/nilai/rata-rata/12A?order_by=

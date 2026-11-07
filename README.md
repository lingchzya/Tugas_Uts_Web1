# Tugas UTS Pemrograman Web 1 - Toko Buku Online

Aplikasi web sederhana untuk pemesanan toko buku online berbasis Front-End. Proyek ini dikembangkan untuk memenuhi kriteria Tugas Tengah Semester (UTS) mata kuliah Pemrograman Web 1 di Universitas Pelita Bangsa.

## 📌 Anggota / Pengembang
* **Nama**: Lingga Chezya Poetra
* **Program Studi**: Teknik Informatika
* **Institusi**: Universitas Pelita Bangsa

---

## 🚀 Fitur Utama & Kriteria Penilaian

1. **Halaman Login (`index.html`)**
   * Authentikasi kredensial pengguna yang terhubung langsung dengan `dataPengguna` pada `data.js`.
   * Feedback error menggunakan `alert` ketika email atau password salah.
   * Modal box interaktif untuk fitur **Lupa Password** dan **Daftar Akun Baru**.

2. **Dashboard Menu (`dashboard.html`)**
   * *Greeting* dinamis berbasis jam lokal perangkat (Pagi, Siang, Sore, Malam).
   * Navigasi ke seluruh fitur aplikasi web.

3. **Informasi Stok & Katalog (`stok.html`)**
   * Visualisasi tabel katalog buku dinamis dari variabel `dataKatalogBuku` pada `data.js`.
   * Fitur penambahan stok buku baru secara interaktif menggunakan Javascript DOM manipulasi via Modal Form.

4. **Halaman Pemesanan & Checkout (`checkout.html`)**
   * Penambahan item buku ke keranjang secara dinamis.
   * Kalkulasi otomatis total biaya belanja secara *real-time*.
   * Form pengisian informasi pemesan dan metode pembayaran.

5. **Tracking Pengiriman (`tracking.html`)**
   * Pencarian status pengiriman berdasarkan Nomor Delivery Order (DO).
   * Visualisasi status pengiriman dengan *progress bar* dan riwayat detail perjalanan paket.

---

## 📁 Struktur Folder Proyek

```text
tugas-uts-web1/
├── index.html            # Halaman Login
├── dashboard.html        # Menu Dashboard Utama
├── stok.html             # Katalog & Manajemen Stok Buku
├── checkout.html          # Form Pemesanan & Checkout
├── tracking.html         # Pelacakan Pengiriman (Tracking)
├── css/
│   └── style.css         # Styling CSS Modern & Dark Mode UI
├── js/
│   ├── data.js           # Dummy Data Array JSON (Pengguna, Buku, Tracking)
│   └── script.js         # Logika JavaScript & DOM Manipulation
├── assets/
│   └── logo.png          # Logo Institusi (Universitas Pelita Bangsa)
└── img/
    ├── kepemimpinan.jpg
    ├── manajemen_keuangan.jpg
    ├── mikrobiologi.jpg
    ├── paud_perkembangan.jpeg
    └── pengantar_komunikasi.jpg
```

---

## 🗝️ Data Kredensial & Pengujian

### 1. Akun Login (`index.html`)
Gunakan salah satu kredensial berikut dari `dataPengguna` di `data.js`:

| Email | Password | Role |
| :--- | :--- | :--- |
| `rina@gmail.com` | `rina123` | User |
| `agus@gmail.com` | `agus123` | User |
| `siti@gmail.com` | `siti123` | Admin |

### 2. Nomor Delivery Order / Tracking (`tracking.html`)
Gunakan salah satu nomor DO berikut:
* **`20230012`** (Atas nama: Rina Wulandari - Status: Dalam Perjalanan)
* **`20230013`** (Atas nama: Agus Pranoto - Status: Dikirim)

---

## 🛠️ Cara Menjalankan Proyek

1. **Menggunakan Live Server (VS Code)**:
   * Buka folder proyek `tugas-uts-web1` di VS Code.
   * Klik kanan pada file `index.html`.
   * Pilih **Open with Live Server**.

2. **Tanpa Live Server**:
   * Buka folder proyek di File Explorer laptop kamu.
   * Klik dua kali (double click) pada file `index.html` untuk membuanya di web browser (Google Chrome/Edge/Firefox).

---
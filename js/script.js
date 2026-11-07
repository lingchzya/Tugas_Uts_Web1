// Function: Greeting Berdasarkan Waktu Lokal (Dashboard)
function initGreeting() {
    const greetingElement = document.getElementById("greetingText");
    if (!greetingElement) return;

    const hour = new Date().getHours();
    let greeting = "";

    if (hour >= 4 && hour < 11) {
        greeting = "Selamat Pagi 🌅";
    } else if (hour >= 11 && hour < 15) {
        greeting = "Selamat Siang ☀️";
    } else if (hour >= 15 && hour < 18) {
        greeting = "Selamat Sore 🌇";
    } else {
        greeting = "Selamat Malam 🌙";
    }

    greetingElement.innerText = `${greeting}, Selamat datang di Toko Buku Online!`;
}

// Function: Validasi Login (index.html) menggunakan dataPengguna dari data.js
function handleLogin(event) {
    event.preventDefault();
    const emailInput = document.getElementById("email").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Cek kecocokan di array dataPengguna
    const userFound = dataPengguna.find(
        (user) => user.email === emailInput && user.password === passwordInput
    );

    if (userFound) {
        alert(`Login berhasil! Selamat datang, ${userFound.nama} (${userFound.role}).`);
        window.location.href = "dashboard.html";
    } else {
        alert("email/password yang anda masukkan salah");
    }
}

// Modal Control
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
}

// Function: Render Tabel Stok Buku (stok.html) dari dataKatalogBuku
function renderStokTable() {
    const tableBody = document.getElementById("stokTableBody");
    if (!tableBody || typeof dataKatalogBuku === "undefined") return;

    tableBody.innerHTML = "";
    dataKatalogBuku.forEach((buku) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td><img src="${buku.cover}" alt="${buku.namaBarang}" style="width: 45px; height: 60px; object-fit: cover; border-radius: 4px;"></td>
            <td>${buku.kodeBarang}</td>
            <td><strong>${buku.namaBarang}</strong></td>
            <td>${buku.jenisBarang}</td>
            <td>Edisi ${buku.edisi}</td>
            <td>${buku.harga}</td>
            <td>${buku.stok}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Function: Tambah Stok Baru via DOM (stok.html)
function handleAddStok(event) {
    event.preventDefault();
    
    const kodeBarang = document.getElementById("bukuKode").value;
    const namaBarang = document.getElementById("bukuNama").value;
    const jenisBarang = document.getElementById("bukuJenis").value;
    const edisi = document.getElementById("bukuEdisi").value;
    const hargaAngka = parseInt(document.getElementById("bukuHarga").value);
    const stok = parseInt(document.getElementById("bukuStok").value);
    const cover = document.getElementById("bukuCover").value;

    const harga = "Rp " + hargaAngka.toLocaleString("id-ID");

    // Push ke dataKatalogBuku
    dataKatalogBuku.push({ kodeBarang, namaBarang, jenisBarang, edisi, stok, harga, cover });

    renderStokTable();
    document.getElementById("formTambahStok").reset();
    closeModal("modalTambahStok");
    alert("Stok buku berhasil ditambahkan!");
}

// Function: Tracking Pengiriman (tracking.html) menggunakan dataTracking
function handleTracking(event) {
    event.preventDefault();
    const noDO = document.getElementById("inputDO").value.trim();
    const resultDiv = document.getElementById("trackingResult");

    if (typeof dataTracking !== "undefined" && dataTracking[noDO]) {
        const item = dataTracking[noDO];
        
        // Buat daftar riwayat perjalanan
        let riwayatHTML = "";
        if (item.perjalanan && item.perjalanan.length > 0) {
            riwayatHTML = `
                <h4 style="margin-top: 1rem; color: #00adb5;">Riwayat Perjalanan Paket:</h4>
                <ul style="margin-left: 1.2rem; margin-top: 0.5rem; line-height: 1.6;">
                    ${item.perjalanan.map(p => `<li><strong>[${p.waktu}]</strong> ${p.keterangan}</li>`).join('')}
                </ul>
            `;
        }

        const progressPercent = item.status === "Selesai Antar" || item.status === "Dikirim" ? 100 : 70;

        resultDiv.innerHTML = `
            <div class="card" style="margin-top: 1rem;">
                <h3>Detail Pengiriman DO: ${item.nomorDO}</h3>
                <p><strong>Nama Pemesan:</strong> ${item.nama}</p>
                <p><strong>Status:</strong> ${item.status}</p>
                
                <div class="progress-container">
                    <div class="progress-bar" style="width: ${progressPercent}%;"></div>
                </div>

                <table>
                    <tr><td>Ekspedisi</td><td>${item.ekspedisi}</td></tr>
                    <tr><td>Tanggal Kirim</td><td>${item.tanggalKirim}</td></tr>
                    <tr><td>Kode Paket</td><td>${item.paket}</td></tr>
                    <tr><td>Total Pembayaran</td><td>${item.total}</td></tr>
                </table>

                ${riwayatHTML}
            </div>
        `;
    } else {
        resultDiv.innerHTML = `<p style="color: #ff4d4d; margin-top: 1rem;">Nomor Delivery Order (DO) tidak ditemukan. Coba gunakan: <strong>20230012</strong> atau <strong>20230013</strong></p>`;
    }
}

// Function: Tambah Item Pemesanan (checkout.html)
function handleAddCheckoutItem(event) {
    event.preventDefault();
    const selectBuku = document.getElementById("selectBuku");
    const qtyInput = document.getElementById("qtyInput");
    const tableBody = document.getElementById("checkoutTableBody");

    const selectedOption = selectBuku.options[selectBuku.selectedIndex];
    const namaBarang = selectedOption.getAttribute("data-nama");
    const hargaStr = selectedOption.getAttribute("data-harga");
    const hargaNum = parseInt(hargaStr.replace(/[^0-9]/g, ""));
    const cover = selectedOption.getAttribute("data-cover");
    const qty = parseInt(qtyInput.value);
    const total = hargaNum * qty;

    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="${cover}" alt="${namaBarang}" style="width: 35px; height: 50px; object-fit: cover; border-radius: 4px;"></td>
        <td>${namaBarang}</td>
        <td>${hargaStr}</td>
        <td>${qty}</td>
        <td class="subtotal">Rp ${total.toLocaleString("id-ID")}</td>
        <td><button class="btn btn-secondary" onclick="this.parentElement.parentElement.remove(); calculateTotalCheckout();">Hapus</button></td>
    `;
    tableBody.appendChild(row);

    calculateTotalCheckout();
    qtyInput.value = 1;
}

// Function: Hitung Total Bayar (checkout.html)
function calculateTotalCheckout() {
    const subtotals = document.querySelectorAll(".subtotal");
    let totalAll = 0;

    subtotals.forEach(el => {
        const val = parseInt(el.innerText.replace(/[^0-9]/g, ""));
        totalAll += val;
    });

    document.getElementById("grandTotal").innerText = `Rp ${totalAll.toLocaleString("id-ID")}`;
}

// Inisialisasi Dropdown Pemesanan Buku (checkout.html)
function initCheckoutOptions() {
    const selectBuku = document.getElementById("selectBuku");
    if (!selectBuku || typeof dataKatalogBuku === "undefined") return;

    selectBuku.innerHTML = "";
    dataKatalogBuku.forEach(buku => {
        const option = document.createElement("option");
        option.value = buku.kodeBarang;
        option.setAttribute("data-nama", buku.namaBarang);
        option.setAttribute("data-harga", buku.harga);
        option.setAttribute("data-cover", buku.cover);
        option.innerText = `${buku.namaBarang} (${buku.kodeBarang}) - ${buku.harga}`;
        selectBuku.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initGreeting();
    renderStokTable();
    initCheckoutOptions();
});
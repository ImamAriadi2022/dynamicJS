// Console log saat script berhasil dijalankan
console.log("Script berhasil dijalankan!");

// Fungsi salam() untuk tombol pertama
function salam() {
    alert("Selamat datang di halaman web saya!");
}

// Fungsi untuk mengubah teks paragraf
function ubahTeks() {
    const mainText = document.getElementById("mainText");
    
    // Mengubah isi teks paragraf
    mainText.textContent = "Teks berhasil diubah melalui JavaScript!";
    
    // Menambahkan class untuk styling visual
    mainText.classList.add("text-changed");
    
    // Optional: Memberikan feedback visual dengan animasi
    mainText.style.transform = "scale(1.05)";
    
    // Mengembalikan ukuran normal setelah animasi
    setTimeout(() => {
        mainText.style.transform = "scale(1)";
    }, 200);
    
    console.log("Teks paragraf berhasil diubah!");
}

// Fungsi tambahan: Reset teks ke semula
function resetTeks() {
    const mainText = document.getElementById("mainText");
    mainText.textContent = "Ini adalah halaman web pertama saya menggunakan HTML.";
    mainText.classList.remove("text-changed");
    console.log("Teks paragraf dikembalikan ke semula!");
}

// Event listener ketika halaman selesai dimuat
document.addEventListener("DOMContentLoaded", function() {
    console.log("Halaman web berhasil dimuat!");
    
    // Menambahkan tombol reset jika teks sudah diubah
    const buttonsContainer = document.querySelector(".buttons-container");
    
    // Membuat tombol reset
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset Teks";
    resetButton.className = "btn btn-warning";
    resetButton.onclick = resetTeks;
    resetButton.style.background = "linear-gradient(45deg, #ffc107, #ffdb4d)";
    resetButton.style.color = "#212529";
    resetButton.style.display = "none";
    
    buttonsContainer.appendChild(resetButton);
    
    // Menampilkan tombol reset setelah teks diubah
    const originalUbahTeks = window.ubahTeks;
    window.ubahTeks = function() {
        originalUbahTeks();
        resetButton.style.display = "inline-block";
    };
    
    // Menyembunyikan tombol reset setelah direset
    window.resetTeks = function() {
        resetTeks();
        resetButton.style.display = "none";
    };
});
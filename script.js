let dataAnggota = [];

document.addEventListener('DOMContentLoaded', function() {
    const memberForm = document.getElementById('memberForm');

    if (memberForm) {
        memberForm.addEventListener('submit', function(e) {
            e.preventDefault();
        
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const bidangMinat = document.getElementById('bidangMinat').value;
            const usia = document.getElementById('usia').value;

            if (nama.trim() === "" || email.trim() === "" || minat === "") {
                alert("Pendaftaran Gagal! Harap isi semua kolom yang tersedia.");
                return; // Menghentikan proses jika ada field kosong
            }

            dataAnggota.push({ nama, email, bidangMinat, usia });

            memberForm.reset();
        });
    }
});
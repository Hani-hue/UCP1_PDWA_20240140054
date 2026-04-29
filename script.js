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

            if (nama.trim() === "" || email.trim() === "" || bidangMinat === "" || usia === "") {
                alert("Pendaftaran Gagal! Harap isi semua kolom yang tersedia.");
                return; 
            }

            const dataAnggota = {
                nama: nama,
                email: email,
                minat: bidangMinat,
                usia: usia
            };

            dataAnggota.push({ nama, email, bidangMinat, usia });

            alert("Data Anggota Berhasil Disimpan!\n\n" + 
                  "Nama: " + dataAnggota[dataAnggota.length - 1].nama + "\n" +
                  "Email: " + dataAnggota[dataAnggota.length - 1].email + "\n" +
                  "Minat: " + dataAnggota[dataAnggota.length - 1].minat + "\n" +
                  "Usia: " + dataAnggota[dataAnggota.length - 1].usia);

                  console.log("Daftar Anggota Komunitas:", dataAnggota);

            memberForm.reset();
        });
    }
});
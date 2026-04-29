let dataAnggota = [];

document.addEventListener('DOMContentLoaded', function() {
    const memberForm = document.getElementById('memberForm');

    function controlVideo(videoId, action) {
        const video = document.getElementById(videoId);

        if (video) {
        if (action === 'play') {
            video.play();
        } else if (action === 'stop') {
            video.pause();
            video.currentTime = 0; 
        }
    }
}

function playAudio() {
    const audio = document.getElementById('myAudio');
    if (audio) {
        audio.play();
        alert("Audio sedang diputar!"); 
    }
}

function pauseAudio() {
    const audio = document.getElementById('myAudio');
    if (audio) {
        audio.pause();
    }
}




function toggleMenu() {
    const nav = document.getElementById("sideNav");
    if (nav.style.width === "100%") {
        nav.style.width = "0";
    } else {
        nav.style.width = "100%"; // Membuka menu secara penuh (overlay)
    }
}




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
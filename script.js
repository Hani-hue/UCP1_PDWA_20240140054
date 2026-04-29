let dataAnggota = [];

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

document.addEventListener('DOMContentLoaded', function() {
    const allSeekBars = document.querySelectorAll('.seekBar');

    allSeekBars.forEach(seekBar => {
        const videoId = seekBar.getAttribute('data-video');
        const video = document.getElementById(videoId);

        if (video) {
            video.addEventListener('loadedmetadata', function() {
                seekBar.max = Math.floor(video.duration);
            });

            video.addEventListener('timeupdate', function() {
                seekBar.value = Math.floor(video.currentTime);
            });

            seekBar.addEventListener('input', function() {
                video.currentTime = seekBar.value;
            });
        }
    });
});

function playAudio() {
    const audio = document.getElementById('myAudio');
    const visualizer = document.getElementById('visualizer');
    if (audio) {
        audio.play();
        if (visualizer) {
            visualizer.classList.add('playing');
        }
    }
}

function pauseAudio() {
    const audio = document.getElementById('myAudio');
    const visualizer = document.getElementById('visualizer');
    if (audio) {
        audio.pause();
        if (visualizer) {
            visualizer.classList.remove('playing');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('myAudio');
    const audioSeekBar = document.getElementById('audioSeekBar');

    if (audio && audioSeekBar) {
        audio.addEventListener('loadedmetadata', function() {
            audioSeekBar.max = Math.floor(audio.duration);
        });

        audio.addEventListener('timeupdate', function() {
            audioSeekBar.value = Math.floor(audio.currentTime);
        });

        audioSeekBar.addEventListener('input', function() {
            audio.currentTime = audioSeekBar.value;
        });
        
        audio.addEventListener('ended', function() {
            const visualizer = document.getElementById('visualizer');
            if (visualizer) {
                visualizer.classList.remove('playing');
            }
            audioSeekBar.value = 0;
        });
    }
});

    document.addEventListener('DOMContentLoaded', function() {
   

    const memberForm = document.getElementById('memberForm');
    if (memberForm) {
        memberForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('nama').value;
            const email = document.getElementById('email').value;
            const bidangMinat = document.getElementById('bidang-minat').value;
            const usia = document.getElementById('usia').value;

            if (nama.trim() === "" || email.trim() === "" || bidangMinat === "" || usia === "") {
                alert("Pendaftaran Gagal! Harap isi semua kolom.");
                return;
            }

            const anggotaBaru = {
                nama: nama,
                email: email,
                minat: bidangMinat,
                usia: usia
            };

            let daftarAnggota = JSON.parse(localStorage.getItem('databaseAnggota')) || [];
            daftarAnggota.push(anggotaBaru);
            localStorage.setItem('databaseAnggota', JSON.stringify(daftarAnggota));

            alert("Data Anggota Berhasil Disimpan!");
            memberForm.reset();
            window.location.href = "index.html";
        });
    }
});
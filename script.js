let dataAnggota = [];

document.addEventListener('DOMContentLoaded', function() {
    const memberForm = document.getElementById('memberForm');
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const noHp = document.getElementById('bidangMinat').value;
        memberForm.reset();
    });
});
// Jam & tanggal berjalan di header
function updateLiveDate() {
    const el = document.getElementById("header-live-date");
    if (!el) return;

    const now = new Date();
    const opsi = {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    };

    el.textContent = now.toLocaleString("id-ID", opsi);
}

updateLiveDate();
setInterval(updateLiveDate, 1000);

// Toggle menu navigasi (tampilan mobile)
const navbarToggle = document.getElementById("navbarToggle");
const mainMenu = document.getElementById("main-menu");

navbarToggle.addEventListener("click", function () {
    mainMenu.classList.toggle("open");
});

// Klik salah satu nomor pagination untuk menandai halaman aktif
const pagination = document.getElementById("pagination");

pagination.addEventListener("click", function (event) {
    const target = event.target.closest("a.page-link");
    if (!target) return;

    event.preventDefault();

    const aktifSaatIni = pagination.querySelector(".page-item.active");
    if (aktifSaatIni) {
        aktifSaatIni.classList.remove("active");
    }

    target.closest(".page-item").classList.add("active");
});

let currentSlideIndex = 0;

function showSlides(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlideIndex = 0; // Kembali ke slide pertama
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; // Kembali ke slide terakhir
    } else {
        currentSlideIndex = index; // Tetapkan slide saat ini
    }

    slides.forEach(slide => {
        slide.style.display = "none"; // Sembunyikan semua slide
    });

    dots.forEach(dot => {
        dot.classList.remove('active'); // Menghapus kelas aktif dari semua dot
    });

    slides[currentSlideIndex].style.display = "block"; // Tampilkan slide saat ini
    dots[currentSlideIndex].classList.add('active'); // Tambahkan kelas aktif ke dot saat ini
}

function changeSlide(n) {
    showSlides(currentSlideIndex + n); // Ubah slide dengan offset
}

function currentSlide(n) {
    showSlides(n - 1); // Menetapkan slide saat ini berdasarkan dot yang diklik
}

// Inisialisasi slider
showSlides(currentSlideIndex);
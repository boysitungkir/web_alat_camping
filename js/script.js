// Tgoggle class actieve
const navbarNav = document.querySelector(".navbar");

// ketika menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar untuk menghilangkan sidebar
const menu = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.getElementById("menu").addEventListener("click", function (event) {
  event.preventDefault(); // Mencegah link mengarahkan ke home
  // Tambahkan kode lain di sini untuk menampilkan menu atau melakukan tindakan lain
});

// <section class="home" id="home">

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

// <section id="tranding">

var TrandingSlider = new Swiper(".tranding-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// fungsi pencarian
const searchForm = document.querySelector(".search-form");
const items = document.querySelectorAll(".item"); // Ganti '.item' dengan selector yang sesuai dengan item-item di website Anda

searchForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const searchTerm = searchForm.querySelector("input").value.toLowerCase();

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase();

    if (itemName.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
});

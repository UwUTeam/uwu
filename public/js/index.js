document.addEventListener("DOMContentLoaded", function () {
  // Находим все dropdown элементы
  const dropdowns = document.querySelectorAll(".dropdown");

  // Для каждого dropdown элемента
  dropdowns.forEach(function (dropdown) {
    const dropdownButton = dropdown.querySelector(".btn-secondary");
    const dropdownMenu = dropdown.querySelector(".dropdown-menu.drop-content");

    // Функция для добавления или удаления класса 'active'
    function toggleActiveClass() {
      if (dropdownMenu.classList.contains("show")) {
        dropdownButton.classList.add("active");
      } else {
        dropdownButton.classList.remove("active");
      }
    }

    // Отслеживаем изменения в атрибутах класса
    const observer = new MutationObserver(toggleActiveClass);

    // Начинаем наблюдение за элементом dropdownMenu
    observer.observe(dropdownMenu, {
      attributes: true, // Наблюдаем за изменениями атрибутов
      attributeFilter: ["class"], // Только для изменений класса
    });
  });
});

var swiper = new Swiper(".blog-slider", {
  spaceBetween: 30,
  effect: "fade",
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: ".blog-slider__pagination",
    clickable: true,
  },
});

document.getElementById("questions-btn").addEventListener("click", function () {
  this.classList.add("active");
  document.getElementById("requirements-btn").classList.remove("active");
});

document
  .getElementById("requirements-btn")
  .addEventListener("click", function () {
    this.classList.add("active");
    document.getElementById("questions-btn").classList.remove("active");
  });

var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
const iconList = burger.querySelector(".bi-list");
const iconX = burger.querySelector(".bi-x-lg");
const navi = document.querySelector(".navi");
const overlay = document.querySelector(".overlay"); // Выбор overlay

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");
  navi.classList.toggle("active");
  overlay.classList.toggle("active"); // Переключение класса active для overlay

  // Переключаем видимость иконок
  iconList.classList.toggle("d-none");
  iconX.classList.toggle("d-none");
});
window.addEventListener("scroll", function () {
  const navi = document.querySelector(".navi");

  if (window.scrollY > 0) {
    // Если прокрутка больше 50 пикселей
    navi.classList.add("active-top");
  } else {
    navi.classList.remove("active-top");
  }
});

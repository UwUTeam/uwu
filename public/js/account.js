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

const burger = document.querySelector(".navbar-burger");
const menu = document.querySelector(".navbar-menu");
const iconList = burger.querySelector(".bi-list");
const iconX = burger.querySelector(".bi-x-lg");

burger.addEventListener("click", () => {
  burger.classList.toggle("is-active");
  menu.classList.toggle("is-active");

  // Переключаем видимость иконок
  iconList.classList.toggle("d-none");
  iconX.classList.toggle("d-none");
});
document.querySelectorAll(".menu li").forEach((item) => {
  item.addEventListener("click", function () {
    // Скрыть все блоки
    document.querySelectorAll(".firstblock").forEach((block) => {
      block.classList.remove("active");
    });

    // Показать выбранный блок
    const target = this.getAttribute("data-target");
    document.querySelector(`.${target}`).classList.add("active");
  });
});

document.addEventListener("click", function (event) {
  if (event.target && event.target.classList.contains("add-item-btn")) {
    // Кнопка была нажата, прячем кнопку в предыдущем блоке
    event.target.style.display = "none";

    // Клонируем блок с товаром
    let container = document.getElementById("parcelContainer");
    let originalBlock = event.target.closest(".firstblock");
    let clone = originalBlock.cloneNode(true);

    // Очищаем поля в новом блоке
    let inputs = clone.querySelectorAll("input");
    inputs.forEach(function (input) {
      input.value = "";
    });

    // Возвращаем видимость кнопке в новом блоке
    clone.querySelector(".add-item-btn").style.display = "inline-block";

    // Добавляем новый блок в конец контейнера
    container.appendChild(clone);
  }
});

document.getElementById("addParcelBtn").addEventListener("click", function () {
  // Получаем все поля формы
  let inputs = document.querySelectorAll(".form-container input");

  // Флаг, чтобы отслеживать, все ли поля заполнены
  let allFilled = true;

  // Проверяем, все ли поля заполнены
  inputs.forEach(function (input) {
    if (input.value === "") {
      allFilled = false;
    }
  });

  // Если все поля заполнены, показываем блоки
  if (allFilled) {
    document.getElementById("parcelInfoBlock").style.display = "block";
    document.getElementById("parcelActionBlock").style.display = "block";
  } else {
    alert("Пожалуйста, заполните все поля.");
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".action-box");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      // Убираем активный класс у всех элементов
      boxes.forEach((b) => b.classList.remove("active"));
      // Добавляем активный класс к нажатому элементу
      this.classList.add("active");
    });
  });
});

function activateAnimations() {
  const animatedBlocks = document.querySelectorAll(
    ".anim-0-block, .anim-6-block ,.anim-0,.anim-1, .anim-2, .anim-3, .anim-4, .anim-5, .anim-6, .anim-7, .anim-8"
  );

  animatedBlocks.forEach((block) => {
    block.classList.add("anim-active"); // Добавляем класс, чтобы запустить анимацию
  });
}

// Пример активации анимации после клика на кнопку
document.getElementById("addParcelBtn").addEventListener("click", function () {
  activateAnimations();
});

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

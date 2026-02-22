let swiper;

function initSwiper() {
  if (window.innerWidth < 768 && !swiper) { //проверяем условие
    swiper = new Swiper(".swiper", {
      centeredSlides: true, // центрировать активный слайд
      slidesPerView: 1, // показывать только один слайд
      pagination: { //устанавливаем пагинацию
        el: ".swiper-pagination",
        clickable: true, //пагинацию можно кликнуть и перейти на тот слайд
      },
    });
  } else if (window.innerWidth >= 768 && swiper) { //если экран больше либо равен то код не сработает
    swiper.destroy(true, true); // уничтожаем Swiper
    swiper = null;
  }
}
window.addEventListener("resize", initSwiper);
initSwiper();

const showButton = document.getElementById("show-button");
const hideButton = document.getElementById("hide-button");
const hiddenElements = document.getElementById("hidden-elements");

showButton.addEventListener("click", show);
hideButton.addEventListener("click", hide);

function show(event) {
  hiddenElements.style.height = "auto";
}

function hide(event) {
  hiddenElements.style.height = "0px";
}



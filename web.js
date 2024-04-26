window.addEventListener('load', function() {
  let preload = document.querySelector('.preload');
  if (preload) {
      preload.style.display = 'none';
  }
});


var scrollUpBtn = document.getElementById("scrollUpBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollUpBtn.style.display = "block";
  } else {
    scrollUpBtn.style.display = "none";
  }
};
  scrollUpBtn.onclick = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


let currentIndex = 0;

function moveSlide(direction) {
  const sliders = document.querySelectorAll(".slider");
  const totalSlides = sliders.length;

  if (direction === "right") {
    currentIndex = (currentIndex + 1) % totalSlides;
  } else if (direction === "left") {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  }

  const offset = currentIndex * -200;
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(${offset}px)`;
  });
}





function filterSelection(category) {
  const elements = document.querySelectorAll('.selection img');
  if (category === 'all') {
      elements.forEach(el => el.style.display = '');
  } else {
      elements.forEach(el => {
          if (el.classList.contains(category)) {
              el.style.display = '';
          } else {
              el.style.display = 'none';
          }
      });
  }
}

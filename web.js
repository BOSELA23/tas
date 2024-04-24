let scrollUpButton = document.querySelector(".move-up-button");

  window.addEventListener("scroll", function() {
    if (window.scrollY > 2) {
      scrollUpButton.style.display = "block";
    } else {
      scrollUpButton.style.display = "none";
    }
  });

  scrollUpButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  let button = document.querySelector(".swiperight");

  button.addEventListener("click", () => {
    window.scrollBy({
      left: 100,
      top: 0,
      behavior: "smooth",
    });
  });

  
   
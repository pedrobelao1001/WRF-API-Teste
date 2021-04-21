const sliders = document.querySelector(".carouselbox");
var scrollPerClick;
var ImagePadding = 20;



// Scroll Functionality
var scrollAmount = 0;

function sliderScrollLeft() {
	console.log(scrollPerClick)

  sliders.scrollTo({
    top: 0,
    left: (scrollAmount -= scrollPerClick),
    behavior: "smooth",
  });
	console.log(scrollAmount)

  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  console.log("Scroll Amount: ", scrollAmount);
}

function sliderScrollRight() {
	console.log(scrollAmount)
  if (scrollAmount <= sliders.scrollWidth - sliders.clientWidth) {
    sliders.scrollTo({
      top: 0,
      left: (scrollAmount += scrollPerClick),
      behavior: "smooth",
    });

  }
  console.log("Scroll Amount: ", scrollAmount);
}
scrollPerClick = 600;

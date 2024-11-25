$(".navTrigger").click(function () {
  $(this).toggleClass("active");
  console.log("Clicked menu");
  $("#mainListDiv").toggleClass("show_list");
  $("#mainListDiv").fadeIn();
});

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("Slides");
  let dots = document.getElementsByClassName("dot");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 2000); // Change slide every 2 seconds
}
document.addEventListener("DOMContentLoaded", () => {
  const typewriterTitles = document.querySelectorAll(".typewriter-title");
  const typewriterParagraphs = document.querySelectorAll(
    ".typewriter-paragraph"
  );

  function typeWriterEffect(element, text, speed) {
    let charIndex = 0;

    function type() {
      if (charIndex < text.length) {
        element.innerHTML += text.charAt(charIndex);
        charIndex++;
        setTimeout(type, speed);
      } else {
        element.style.borderRight = "none"; // remove the cursor
      }
    }

    type();
  }

  function animateElements(elements, speed) {
    elements.forEach((element) => {
      const text = element.getAttribute("data-text");
      element.textContent = "";
      element.style.borderRight = "2px solid black";
      typeWriterEffect(element, text, speed);
    });
  }

  animateElements(typewriterTitles, 30); // animate titles first

  setTimeout(() => {
    animateElements(typewriterParagraphs, 15); // animate paragraphs after a delay
  }, typewriterTitles.length * 340); // delay based on number of title
});

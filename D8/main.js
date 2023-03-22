function changeNavbarColor() {
  const navbar = document.querySelector("nav.navbar");

  navbar.classList.add("startNavBg");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      navbar.classList.remove("startNavBg");

      navbar.classList.add("bg-black");
    } else {
      navbar.classList.remove("bg-black");
      navbar.classList.add("startNavBg");
    }
  });
}


window.onload = function () {
  changeNavbarColor();
};


const sections = document.getElementsByTagName("section");

let index = 0;

function showSection() {
  sections[index].style.opacity = 1;

  index++;

  if (index < sections.length) {
    setTimeout(showSection, 1000);
  }
}

showSection();




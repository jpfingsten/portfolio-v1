// Fixed nav bar transition + scroll up icon

const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector(".nav-menu");
const icnScrollUp = document.querySelector(".icn-scroll-up");

  window.onscroll = () => {
    if (window.scrollY > navbar.clientHeight || navMenu.classList.contains("active")) {
  navMenu.classList.add('nav-active');
  icnScrollUp.classList.add('active')
    } else {
  navMenu.classList.remove('nav-active');
  icnScrollUp.classList.remove('active');
    }
};

// Hamburger menu for mobile devices

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLink.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}));

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// Opening and closing pup picture modal

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modal-link");
const closeModal = document.querySelector(".close-x");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

// Dynamic copyright year

const copyrightYear = document.getElementById("copyright-year");
copyrightYear.innerText = new Date().getFullYear();

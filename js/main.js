// Fixed nav bar transition

const navbar = document.querySelector('.navbar');
const navMenu = document.querySelector(".nav-menu");

  window.onscroll = () => {
    if (window.scrollY > navbar.clientHeight || navMenu.classList.contains("active")) {
  navbar.classList.add('nav-active');
    } else {
  navbar.classList.remove('nav-active');
    }
};

// Hamburger menu for mobile devices

const hamburger = document.querySelector(".hamburger");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

navLink.forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// Opening and closing family picture modal

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modal-link");
const closeModal = document.querySelector(".close-x");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

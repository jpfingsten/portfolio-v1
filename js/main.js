// Fixed nav bar transition

const navbar = document.querySelector('.navbar');

  window.onscroll = () => {
    if (window.scrollY > navbar.clientHeight) {
  navbar.classList.add('nav-active');
    } else {
  navbar.classList.remove('nav-active');
    }
};

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelector(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))


// Opening and closing family picture modal

const modal = document.querySelector("#modal");
const openModal = document.querySelector("#modal-link");
const closeModal = document.querySelector(".close-x");

// Start modal closed

modal.close();

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

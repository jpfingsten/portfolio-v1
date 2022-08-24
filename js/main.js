// Fixed nav bar transition

const navbar = document.querySelector('nav');
  window.onscroll = () => {
    if (window.scrollY > navbar.clientHeight) {
  navbar.classList.add('nav-active');
    } else {
  navbar.classList.remove('nav-active');
    }
};

// Opening and closing family picture modal

const modal = document.querySelector("#modal");
const openModal = document.getElementById("modal-link");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});

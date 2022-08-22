// Fixed nav bar transition

const navbar = document.querySelector('.fixed-nav-bar');
  window.onscroll = () => {
    if (window.scrollY > navbar.clientHeight) {
  navbar.classList.add('nav-active');
    } else {
  navbar.classList.remove('nav-active');
    }
  };

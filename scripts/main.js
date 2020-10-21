const slider = document.querySelector('swiper-container');

let mySwiper = new Swiper('.swiper-container', {

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    
    1024: {
      slidesPerView: 2,
      spaceBetween: 30,
    },

    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },

  },
  loop: true,
})

const close = document.querySelector('.form__close');
const modal = document.querySelector('.modal');
const form = document.querySelector('.form');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.header__mobmenu');
const menuClose = document.querySelector('.mobmenu__close');
const nav = document.querySelector('.vertical-menu');
const links = document.querySelectorAll('.vertical-menu__link');

let keys = {
  ESC: 27,
};

function closeModal() {
  modal.classList.remove('modal_display_showed');
}

modal.addEventListener('click', (e) => {
  if (!form.contains(e.target)) {
    closeModal();
  }
});

function showModal() {
  modal.classList.add('modal_display_showed');
}

document.addEventListener('click', function(event) {
  if (event.target.dataset.show != undefined) {
    showModal();
  }
});

close.addEventListener('click', closeModal);

function showMenu() {
  menu.classList.add('header__mobmenu_showed');
  nav.classList.add('mobmenu__nav_showed');
  document.addEventListener('keydown', function(e) {
    if (e.keyCode == keys.ESC) {
      closeMenu();
    }
  });
}

function closeMenu() {
  menu.classList.remove('header__mobmenu_showed');
  nav.classList.remove('mobmenu__nav_showed');
}

burger.addEventListener('click', showMenu);
menuClose.addEventListener('click', closeMenu);

links.forEach((link) => link.addEventListener(`click`, (e) => {
  if (link.contains(e.target)) {
    closeMenu();
  }}));


menu.addEventListener('click', (e) => {
  if (!nav.contains(e.target)) {
    closeMenu();
  }
});



window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scrolled", window.scrollY > 0);
});

// contact btn circular

const textButtons = document.querySelectorAll(".contact__btn");
textButtons.forEach((textButton) => {
  let text = textButton.querySelector("p");
  text.innerHTML = text.innerHTML
    .split("")
    .map(
      (Character, index) =>
        `<span style="transform: rotate(${index * 12}deg)">${Character}</span>`
    )   
    .join('');
});

// Swiper gallery section

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints:{
    599:{
      slidesPerView: 2,
      spaceBetween: 40
    },
    1023:{
      slidesPerView: 3,
      spaceBetween: 60
    }
  }
});

const nav = document.querySelector('.nav__link');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closeNavBtn = document.querySelector('#nav__toggle-close');


//to open the hamburger navbar in tablet
const openNav = () => {
  nav.style.display = 'flex';
  openNavBtn.style.display = 'none';
  closeNavBtn.style.display = 'inline-block'
}
openNavBtn.addEventListener('click',openNav);

//.........................

//To close hamburger navbar

const closeNav = () => {
  nav.style.display = 'none';
  openNavBtn.style.display = 'inline-block';
  closeNavBtn.style.display = 'none'
}
closeNavBtn.addEventListener('click',closeNav);

//...............

//when click on the li and a the hamburger will close and take you to the place where you click

if(document.body.clientWidth < 1024){
  nav.querySelectorAll('li a').forEach(navLink => {
    navLink.addEventListener('click',closeNav);
  })
}
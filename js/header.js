const hamburguer = document.querySelector(".hamburguer");
const btnMenu = document.querySelector(".btn-menu");
const menu = document.querySelector(".content");
const menuMascMobile = document.querySelector(".menu-responsivo-homem");
const menufemcMobile = document.querySelector(".menu-responsivo-mulher");
const frete = document.querySelector(".frete-gratis");
const header = document.querySelector("header");
const body = document.querySelector("body");

function toShow() {
  hamburguer.classList.toggle("descer");
  menu.classList.toggle("show");
  header.classList.toggle("fixed");
  frete.classList.toggle("fixed");
  body.classList.toggle("hiden");
  setTimeout(() => {
    hamburguer.classList.toggle("girar");
    btnMenu.classList.toggle("active");
  }, "300");
}

function showDropDown() {
  const homemDrop = document.querySelector(".mobile-dropover");
  const dropDownArrow = document.querySelector(".menu-responsivo-homem img");
  dropDownArrow.classList.toggle("ativo");
  homemDrop.classList.toggle("ativo");
}

function showfemDropDown() {
  const mulherDrop = document.querySelector(".mobile-dropover-mulher");
  const dropDownArrow2 = document.querySelector(".menu-responsivo-mulher img");
  dropDownArrow2.classList.toggle("ativo");
  mulherDrop.classList.toggle("ativo");
}
hamburguer.addEventListener("click", toShow);
menuMascMobile.addEventListener("click", showDropDown);
menufemcMobile.addEventListener("click", showfemDropDown);

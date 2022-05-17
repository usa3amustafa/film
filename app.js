const openMenuBtn = document.querySelector('.menu-icon-top')
const closeMenuBtn = document.querySelector('.menu-icon-bottom')
const links = document.querySelector('.links')

openMenuBtn.addEventListener('click', function () {
  links.classList.add('show-links')
  closeMenuBtn.classList.add('show-btn')
  openMenuBtn.classList.remove('show-btn')
})
closeMenuBtn.addEventListener('click', function () {
  links.classList.remove('show-links')
  closeMenuBtn.classList.remove('show-btn')
  openMenuBtn.classList.add('show-btn')
})

const openMenuBtn = document.querySelector('.menu-icon-top')
const closeMenuBtn = document.querySelector('.menu-icon-bottom')
const links = document.querySelector('.links')
const link = document.querySelector('.link')

openMenuBtn.addEventListener('click', function () {
  links.classList.add('show-links')
  closeMenuBtn.classList.add('show-btn')
  openMenuBtn.style.display = 'none'
  link.classList.add('padding-top')
})
closeMenuBtn.addEventListener('click', function () {
  links.classList.remove('show-links')
  closeMenuBtn.classList.remove('show-btn')
  openMenuBtn.style.display = 'block'
  link.classList.remove('padding-top')
})

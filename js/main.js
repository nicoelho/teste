let butao = document.querySelector('.botao__menu')
let menu = document.querySelector('.lista')
butao.addEventListener('click', () => {
    menu.classList.toggle('menu-mobile')
})
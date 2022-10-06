let menuIcon = document.getElementById('menu-icon')
let menu = document.getElementById('menu')

menuIcon.addEventListener('click', () => {
    window.visualViewport.width<=800 && 
    menu.classList.toggle('menu-off');
})
let menuHamb = document.getElementById('menuHamb');
let menu = document.getElementById('menu');

function expandirMenu() {
    if (menu.style.display =='none') {
        menu.style.display ='block'
    } else {
        menu.style.display ='none'
    }
}

menuHamb.addEventListener('click', expandirMenu);
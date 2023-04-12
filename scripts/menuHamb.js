let menuHamb = document.getElementById('menuHamb');
let menu = document.getElementById('menu');

function expandirMenu() {
    if (menu.style.display =='block') {
        menu.style.display ='none'
    } else {
        menu.style.display ='block'
    }
}

menuHamb.addEventListener('click', expandirMenu);
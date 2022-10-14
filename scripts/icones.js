let itxtL = document.getElementById('itxtL');
let itxtG = document.getElementById('itxtG');
let itxtE = document.getElementById('itxtE');
let itxtW = document.getElementById('itxtW');

function linkedin() { 
    itxtL.style.display ='block'  
}

function linkedinoff(){
    itxtL.style.display ='none'
}

function github() { 
    itxtG.style.display ='block'  
}

function githuboff(){
    itxtG.style.display ='none'
}
function email() { 
    itxtE.style.display ='block'  
}

function emailoff(){
    itxtE.style.display ='none'
}
function whats() { 
    itxtW.style.display ='block'  
}

function whatsoff(){
    itxtW.style.display ='none'
}

iL.addEventListener('mouseover', linkedin);
iL.addEventListener('mouseleave', linkedinoff);

iG.addEventListener('mouseover', github);
iG.addEventListener('mouseleave',githuboff);

iE.addEventListener('mouseover', email);
iE.addEventListener('mouseleave',emailoff);

iW.addEventListener('mouseover', whats);
iW.addEventListener('mouseleave',whatsoff);
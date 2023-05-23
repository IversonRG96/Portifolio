let tagSobre = document.querySelector('#tag-sobre');
let secDescricao = document.querySelector('.sobre-descricao');
let tagSkill = document.querySelector('#tag-skill');
let skillLevel = document.querySelector('.box-skill-level');

function expande(){
    if (secDescricao.style.display == 'block'){
        secDescricao.style.display = 'none'
    } else {
        secDescricao.style.display = 'block'
    }
}

function expandeSkill(){
    if (skillLevel.style.display == 'block') {
        skillLevel.style.display = 'none'
    } else {
        skillLevel.style.display = 'block'
    }
}

tagSobre.addEventListener('click', expande);
tagSkill.addEventListener('click', expandeSkill);

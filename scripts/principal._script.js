let tagSobre = document.querySelector('#tag-sobre');
let secDescricao = document.querySelector('.sobre-descricao');

function expande(){
    if (secDescricao.style.display == 'block'){
        secDescricao.style.display = 'none'
    } else {
        secDescricao.style.display = 'block'
    }
}

tagSobre.addEventListener('click', expande);

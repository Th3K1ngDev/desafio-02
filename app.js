var textos = document.querySelector('.extras');
var botao = document.querySelector('#botao');

botao.addEventListener('click', ()=>{
    textos.style.display ='block';
    setTimeout(()=>{
        textos.style.display = 'none';
    }, 4000)
});
var btn = document.querySelector('.burger__menu'),
 list = document.querySelector('.drop__menu');


btn.addEventListener ('click', () =>{
    list.classList.toggle('active')
    // list.style.transition = '0.4s';
})
//получение клика, также можно использовать для появления каких либо всплывающих окон
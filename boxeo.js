const fabars=document.querySelector('.fa-bars');
const navmenu=document.querySelector('.ul1');

const navitem=document.querySelectorAll('.nav_item');


fabars.addEventListener("click", ()=>{
    navmenu.classList.toggle('clasemenu');
});

navitem.forEach(function (item) {
    item.addEventListener('click', function () {
        navmenu.classList.remove('clasemenu');
    });
});
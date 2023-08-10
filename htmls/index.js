const menu = document.querySelector('.menu');
const menuIcon = document.querySelector('.menu-icon')

menuIcon.addEventListener('click',()=>{
    if(menu.style.display === 'none'){
        menu.style.display ='block'
    }else{menu.style.display = 'none'}
})
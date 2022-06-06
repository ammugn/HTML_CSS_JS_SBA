window.addEventListener('load',()=>{
const uname = sessionStorage.getItem('UNAME');
document.getElementById('user-name').innerHTML=uname;
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
  });
})


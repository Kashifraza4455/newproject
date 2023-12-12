burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('vt-class-resp');
    navList.classList.toggle('vt-class-resp');
    navbar.classList.toggle('hi-nav-resp');

})
// Global Varibles
const menuIcon = document.querySelector('.menu-icon');
const navContainer = document.getElementById('nav-container');

// Screen Event Listener

if(window.innerWidth <= 767){
    navContainer.classList.add('nav-container-hidden');
    navContainer.classList.remove('nav-container');
}else{
    navContainer.classList.remove('nav-container-hidden');
    navContainer.classList.add('nav-container');
}


window.addEventListener('resize', function(event) {
    if(event.target.innerWidth <= 767){
        navContainer.classList.add('nav-container-hidden');
        navContainer.classList.remove('nav-container');
        menuIcon.classList.remove('active');
    }else if (event.target.innerWidth > 767){
        navContainer.classList.remove('nav-container-hidden');
        navContainer.classList.add('nav-container');
    }
});

// Menu Icon

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navContainer.classList.toggle('nav-container');
    if (!menuIcon.classList.contains('active') & !navContainer.classList.contains('nav-container-hidden')) {
        console.log("Don't Have Active Class")
        menuIcon.classList.toggle('not-active');
        navContainer.classList.toggle('nav-container-hidden');
    } else {
        menuIcon.classList.remove('not-active');
        navContainer.classList.remove('nav-container-hidden');
    }
});

// Scroll Top
document.getElementById("scrollTop").style.display = "none";
window.onscroll = function () {
    if (document.documentElement.scrollTop > 400) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
};

function goTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}

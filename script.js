// Global Varibles
const menuIcon = document.querySelector('.menu-icon');
const navContainer = document.getElementById('nav-container');

// Screen Event Listener

if (window.innerWidth <= 767) {
    navContainer.addEventListener('click', function (event) {
        event.stopPropagation();
    })

    menuIcon.addEventListener('click', function (event) {
        event.stopPropagation();
    })

    document.body.addEventListener('click', function (event) {
        navContainer.classList.add('nav-container-hidden');
        navContainer.classList.remove('nav-container');
        menuIcon.classList.remove('active');
    })

    navContainer.classList.add('nav-container-hidden');
    navContainer.classList.remove('nav-container');
} else {
    navContainer.classList.remove('nav-container-hidden');
    navContainer.classList.add('nav-container');
}


window.addEventListener('resize', function (event) {
    if (event.target.innerWidth <= 767) {
        navContainer.classList.add('nav-container-hidden');
        navContainer.classList.remove('nav-container');
        menuIcon.classList.remove('active');
    } else if (event.target.innerWidth > 767) {
        navContainer.classList.remove('nav-container-hidden');
        navContainer.classList.add('nav-container');
    }
});

// Menu Icon

menuIcon.addEventListener('click', function () {
    menuIcon.classList.toggle('active');
    navContainer.classList.toggle('nav-container');
    if (!menuIcon.classList.contains('active') & !navContainer.classList.contains('nav-container-hidden')) {
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
        var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        if(document.documentElement.scrollTop > 200 && width > 767){
            navContainer.style.position = "fixed";
        }else if(document.documentElement.scrollTop < 200 && width > 767){
            navContainer.style.position = "static";
        }
        document.getElementById("scrollTop").style.display = "block";
        var span = menuIcon.querySelectorAll('span');
        for (let i = 0; i < span.length; i++) {
            span[i].style.background = "#06d9ef";
        }
    } else {
        document.getElementById("scrollTop").style.display = "none";
        var span = menuIcon.querySelectorAll('span');
        for (let i = 0; i < span.length; i++) {
            span[i].style.background = "#06d9ef";
        }
    }
};

function goTop() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
}


// Your code goes here
const navLogo = document.querySelector('logo-heading');
const container = document.querySelector('.container')
const navMain = document.querySelector('.nav-container');
const wholePage = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');
const topNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');
const firstHeader = document.querySelector('.text-content h2');
const firstSection = document.querySelector('section');

///event listners

navLogo.addEventListener("mouseover", function(event){
    this.MSFIDOCredentialAssertion.add('nav-logo-border')
});


navLogo.addEventListener('mouseleave', function() {
    this.classList.remove('nav-logo-border');

});




window.addEventListener('wheel', function() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        navLogo.style.display = 'none';
        navMain.style.justifyContent = 'center';
    } else {
        navLogo.style.cssText = ""
        navMain.style.justifyContent = "space-between";
    }
})

//  drag / drop
//  load
//  focus
//  resize
//  scroll
//  select
//  dblclick
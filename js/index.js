// Your code goes here
const navLogo = document.querySelector('logo-heading');
const container = document.querySelector('.container');
const intro = document.querySelector('.intro');
const navMain = document.querySelector('.nav-container');
const wholePage = document.querySelector('body');
const navLinks = document.querySelectorAll('.nav-link');
const topNav = document.querySelector('.main-navigation');
const images = document.querySelectorAll('img');
const paragraphs = document.querySelectorAll('p');
const buttons = document.querySelectorAll('.btn');
const firstHeader = document.querySelector('.text-content h2');
const firstSection = document.querySelector('section');
const header2 = document.querySelector('.content-destination h2');
const header3= document.querySelector('.content-section .text-content h2');
///event listners

//click

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        this.style.color = "DarkTurquoise";
    });
};

//Load
window.addEventListener('load', function() {
    this.alert('Welcome to the Fun Bus!');
});

//mouseovers
header2.addEventListener('mouseover', ()=>{
    header2.textContent = 'OR MAYBE SOME PIZZA';
});
header3.addEventListener('mouseover',()=>{
    header3.textContent ='Pad Thai?';
});
//dblclick
for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('dblclick', function() {
        this.style.color = '#212529';
    });
};
//resize
window.addEventListener('resize', function() {
    topNav.style.backgroundColor = '#17A2B8';
});
//keydown
wholePage.addEventListener('keydown',()=>{
    wholePage.style.backgroundColor = '#17A2B8';
    
});

//drag start
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('dragstart', function() {
        for (let j = 0; j < paragraphs.length; j++) {
            paragraphs[j].style.color = '#17A2B8';
        }
    })};
    //drag end
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('dragend', function() {
            for (let j = 0; j < paragraphs.length; j++) {
                paragraphs[j].style.color = '#212529';
            }
        })
    };
    //prop
    firstHeader.addEventListener('click', function(event) {
        alert("This event won't propagate.");
        event.stopPropagation();
    });
//right click

header2.addEventListener('contextmenu', e => {
  e.preventDefault();
});
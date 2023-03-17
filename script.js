// Smooth Scroll credit: https://www.youtube.com/watch?v=9nh0snfJ7Ao

const links = document.querySelectorAll('.smooth');

links.forEach((anchor) => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const smoothScroll = document.querySelector(this.getAttribute('href'));
        smoothScroll.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

const buttons = document.querySelectorAll('.carouselButton');
console.log(buttons);
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const carousel = document.querySelector('.projectCarousel');
        const buttonLeft = document.querySelector('.buttonLeft');
        const buttonRight = document.querySelector('.buttonRight');
        const project = document.querySelector('.project')


        e.preventDefault();
    
        
        if (e.target === buttonLeft.lastChild) {
            const slideWidth = project.clientWidth;
            carousel.scrollLeft -= slideWidth;
            
        } else if (e.target === buttonRight.lastChild) {
            const slideWidth = project.clientWidth;
            carousel.scrollLeft += slideWidth;
        }
    
        // return
    })
})

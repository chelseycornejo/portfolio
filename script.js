// Smooth Scroll credit: https://www.youtube.com/watch?v=9nh0snfJ7Ao
// Highlight Active Link credit: https://www.youtube.com/watch?v=RsPWEmfOQdU

//SMOOTH SCROLL
// query select all links with .smooth class
const links = document.querySelectorAll('.smooth');

// for each link, create a click event listener
links.forEach((link) => {
    link.addEventListener('click', function(e) {
        // prevent reload 
        e.preventDefault();
        // query select the item clicked and go to its corresponding href in its attribute
        const smoothScroll = document.querySelector(this.getAttribute('href'));
        smoothScroll.scrollIntoView({
            behavior: 'smooth'
        })
    })
})

// HIGHLIGHT ACTIVE LINK ON SCROLL
// query select all sections and each list item in the side nav
const sections = document.querySelectorAll('section');
const sideNav = document.querySelectorAll('.sideNavItem')

// add scroll event listener to entire window
window.addEventListener('scroll', () => {

    sections.forEach(section => {
        // create variable for the measurement from top of page to start of sections and section height (must be dynamic versus current 100vh since height of a section will change because of responsiveness)
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        // create conditional if scroll on y is less than or equal to the start of a section location less a third of the section height (this makes it switch when the user is a 3rd away of current section to next section)
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    })
    // for each list element, we want to remove the active class and add to the current list elements class list
    sideNav.forEach( li => {
        const link = li.firstChild;
        link.classList.remove('active');
        if(li.classList.contains(current)) {
            link.classList.add('active')
        }
    })
})

// BURGER MENU
// query select the burger menu and exit menu
const burgerMenu = document.querySelector('.openMenu');
const exit = document.querySelector('.exitMenu');

// add click event listener to burger menu so it changes hides the burger menu icon and shows the .mainNav
burgerMenu.addEventListener('click', (e) => {
    const menu = document.querySelector('.mainNav');
    menu.style.display = 'block';
    burgerMenu.style.display = 'none';

    const burgerNav = document.querySelectorAll('.burgerNav')
    
    burgerNav.forEach((anchor) => {
        anchor.addEventListener('click', (e) => {

            menu.style.display = 'none';
            burgerMenu.style.display = 'block';
        })
    })
})

// add click event listener to exit icon so it shows the burger menu and hides the .mainNav
exit.addEventListener('click', () => {
    const menu = document.querySelector('.mainNav');
    menu.style.display = 'none';
    burgerMenu.style.display = 'block';
})




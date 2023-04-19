const hamburger = document.querySelector ('.hamburger');
const navlinks = document.querySelector ('.navlinks');
const closeBtn = document.querySelector ('.close-btn');
const supscroll = document.querySelector ('.supscroll')

hamburger.addEventListener('click', () => {
    navlinks.style.display = 'flex';
    closeBtn.style.display = 'inline';
    supscroll.style.overflow = 'hidden';
    

})

closeBtn.addEventListener ('click', () => {
    navlinks.style.display = 'none';
    supscroll.style.overflow = 'scroll';
})


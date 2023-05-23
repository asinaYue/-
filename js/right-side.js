var tools = document.querySelector('.tools')
var gotop = document.querySelector('.tools-gotop')
var layer = document.querySelector('.layer')
document.addEventListener('scroll', function () {
    // console.log(window.pageYOffset);
    // console.log(screen_outer.offsetTop);
    if (window.pageYOffset >= layer.offsetTop) {
        gotop.style.display = 'block'
    } else {
        gotop.style.display = 'none'
    }
})
gotop.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
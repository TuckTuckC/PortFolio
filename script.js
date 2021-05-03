// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
// }, false);

var scrollVal = 0;

$(window).scroll(function() {
    var x = $(this).scrollTop();
    if(x > scrollVal) {
        $('header').addClass('sticky');
    } else {
        $('header').removeClass('sticky');
    }
    scrollVal = x;
})
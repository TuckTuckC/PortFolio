// window.addEventListener('scroll', () => {
//     document.body.style.setProperty('--scroll', window.pageYOffset / (document.body.offsetHeight - window.innerHeight))
// }, false);

var scrollVal = 0;

$(window).scroll(function() {
    var x = $(this).scrollTop();
    if(x > scrollVal) {
        $('header').addClass('sticky');
    } else if(x == 0) {
        $('header').removeClass('sticky');
    }
    scrollVal = x;
})

// Form Submission
var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "Thanks for your submission!";
        form.reset()
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


// Project Pop Ups
$('.carsioProject').click(function() {
    $('.carsioPopUp').css('visibility', 'visible');
});

$('.close').click(function() {
    $('.projectPopUp').css('visibility', 'hidden')
})
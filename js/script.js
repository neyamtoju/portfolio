// $(function(){
    /** up **/
    // $('.bt-up').click(function () {
    //     $('html, body').animate({
    //       scrollTop: 0,
    //         }, 1500);
    //     });
      
    //     $(window).scroll(function () {
    //         let abc = $(this).scrollTop();
      
    //         if (abc > 200) {
    //             $('.bt-up').fadeIn();
    //         } else {
    //             $('.bt-up').fadeOut();
    //         }
    //     });
// });

/** type-js **/
let typed = new Typed('.typed', {
    strings: ['a professional coder,', 'a font-end developer,', 'a back-end developer.'],
    typeSpeed: 50,
    backSpeed: 0,
    smartBackspace: true,
    // loop: true,
});

/** menu-fix **/
let menu = document.getElementById('menu');
let offset = menu.offsetHeight;
window.onscroll = function() {
    if (window.scrollY > offset-10) {
        menu.classList.add("sticky");
    } else if(window.scrollY < offset-20) {
        menu.classList.remove("sticky");
    }
};
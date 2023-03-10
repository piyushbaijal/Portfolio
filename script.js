$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    // // scroll top
    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
        if ($(window).scrollTop() > 0) {
            $('.top').show();
        } else {
            $('.top').hide();
        }

    });
    // // smooth scrolling 
    $('a[href*="#"]').on('click', function (e) {
        // e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 1000,);
    });

    // // active link or hower link 
    const links = document.querySelectorAll("header .navbar ul li a");
    links.forEach(link => link.addEventListener("click", e => {
        links.forEach((link) => link.classList.remove("home"));
        link.classList.add("home");
    }));

    links[0].classList.add("home");

});

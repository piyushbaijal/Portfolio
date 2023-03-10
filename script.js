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

    // active link or hower link
    const links = document.querySelectorAll("header .navbar ul li a");
    links.forEach(link => link.addEventListener("click", () => {
        links.forEach((link) => link.classList.remove("home"));
        link.classList.add("home");
    }));
    links[0].classList.add("home");


    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        const headerHeight = document.querySelector('header').offsetHeight;
        const currentSection = [...sections]
            .find(sec => window.scrollY >= (sec.offsetTop - headerHeight) && window.scrollY <= (sec.offsetTop + sec.offsetHeight - headerHeight));
        const currentLink = document.querySelector(`nav a[href="#${currentSection.id}"]`);
        navLinks.forEach(link => link.classList.remove('home'));
        currentLink.classList.add('home');
    });

});




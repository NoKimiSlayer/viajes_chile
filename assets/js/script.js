$(document).ready(function () {

    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#mainNavbar').css('background-color', '#121212');
        } else {
            $('#mainNavbar').css('background-color', 'rgba(0, 0, 0, 0.7)');
        }
    });

});
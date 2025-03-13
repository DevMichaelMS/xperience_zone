$(document).ready(function() {
    if ($(window).width() <= 640) {
        $('.botao-menu').click(function() {
            $('.menu').slideToggle(500);
        });

        $('.submenu-btn').click(function(event) {
            event.stopPropagation();
            $(this).next('.submenu').slideToggle(500);
        });
    }
});
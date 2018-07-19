/******Jquery******/
$(".btn1").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#dummy").offset().top
    }, 700);
});

/******Vanilla JavaScript******/



function bact_to_top(){
    var amountScrolled = 200;
    // var amountScrolledNav = 25;
    $(window).scroll(function() {
        if ( $(window).scrollTop() > amountScrolled ) {
            $('.back-to-top').addClass('show');
        } else {
            $('.back-to-top').removeClass('show');
        }
    });

    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 50);
        return false; 
    });
}

export default bact_to_top;
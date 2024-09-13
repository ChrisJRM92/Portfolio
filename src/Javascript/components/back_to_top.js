

function bact_to_top() {
    var amountScrolled = 200;

    $(document).ready(function() {
        var $headerContent = $('.header_content');
        var $backToTop = $('.back-to-top');

        // Escuchar el evento de desplazamiento en el contenedor
        $headerContent.on('scroll', function() {
            if ($headerContent.scrollTop() < amountScrolled) {
                $backToTop.addClass('show');
            } else {
                $backToTop.removeClass('show');
            }
        });

        // Hacer scroll al inicio del contenedor cuando se hace clic en el botón
        $backToTop.click(function() {
            $headerContent.animate({
                scrollTop: 0
            }, 500); // Ajusta la duración del desplazamiento a tu preferencia
            return false;
        });
    });
}

export default bact_to_top;
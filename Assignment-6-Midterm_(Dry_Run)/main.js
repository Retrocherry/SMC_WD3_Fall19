setTimeout(function () {

    $('#exampleModal').modal('show');
}, 4000); // Wait 4 seconds before calling this function





$(document).ready(function () {
    $('#myCarousel').on('slide.bs.carousel', function (e) {
        console.log(e);
    })
 
    $('.js-modal-close').click(function () {
        $('.alert').addClass('show');
        $('.alert').alert();

        if (true) {
            $("#myModal").modal('hide');
        }
    })

})

$(window).on('load', function () {
    $('#myCarousel').carousel({
        interval: 500
    });

    $('#myModal').modal({
        backdrop: false,
        keyboard: false
    });
})
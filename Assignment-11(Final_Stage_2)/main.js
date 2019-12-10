setTimeout(function () {

    $('#exampleModal').modal('show');
}, 10000); // Wait 4 seconds before calling this function




/* ------- CART ------------------------ */
$(document).ready(function () {
    $('#main-add').on('click', function (e) {
        e.preventDefault();
    });

    
    $('input').keyup(checkValid);
    $('textarea').keyup(checkValid);


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

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
$(document).ready(function () {
});

        //    $('#submit-div a').click(function() {return false;} );
        $('#submit-div a').off();
    }
}



// ----------------- FORM 1
$(window).on('load', function () {
    $('#myCarousel').carousel({
        interval: 500
    });

    $('#myModal').modal({
        backdrop: false,
        keyboard: false
    });
})

(function() {
    $('form > input').keyup(function() {


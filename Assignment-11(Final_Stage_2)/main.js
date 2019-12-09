setTimeout(function () {

    $('#exampleModal').modal('show');
}, 10000); // Wait 4 seconds before calling this function





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

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});



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

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#register').attr('disabled', 'disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        } else {
            $('#register').removeAttr('disabled'); // updated according to http://stackoverflow.com/questions/7637790/how-to-remove-disabled-attribute-with-jquery-ie
        }
    });
})()


// ----------------- FORM 2
$('#contact-form').on('blur keyup change', 'input', function(event) {
    validateForm('#contact-form');
  });
  
  function validateForm(id) {
    var valid = $(id).validate().checkForm();
      if (valid) {
        $('.form-save').prop('disabled', false);
          $('.form-save').removeClass('isDisabled');
      } else {
        $('.form-save').prop('disabled', 'disabled');
        $('.form-save').addClass('isDisabled');
      }
  }
  
  // Run once, so subsequent input will be show error message upon validation
  validateForm('#contact-form');
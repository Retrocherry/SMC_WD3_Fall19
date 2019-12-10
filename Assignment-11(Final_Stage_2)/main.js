setTimeout(function () {

    $('#exampleModal').modal('show');
}, 10000); // Wait 4 seconds before calling this function

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





/* ------- CART ------------------------ */
$(document).ready(function () {
    $('#main-add').on('click', function (e) {
        e.preventDefault();
        let prodNumber = $('#main-prod-number').val();
        updateCartItems(prodNumber);
    });

    
    $('input').keyup(checkValid);
    $('textarea').keyup(checkValid);


   

})

$(document).ready(function () {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function () {
        $(this).toggleClass('open');
    });
});



function updateCartItems(num) {
    //alert(num);
    let existing = $('#cartItems').html();
    existing = parseInt(existing) + parseInt(num);
    $('#cartItems').html(existing);
}

/* ------- FORM VALIDATION ------------------------ */

function checkValid() {
    console.log('checkValid');
    let isValidated = true;
    let name = $('#name').val();
    //  var last_name = $('#last_name').val();
    let email = $('#email').val();
    let subject = $('#subject').val();
    let message = $('#message').val();

    $(".error").remove();

    if (name.length < 1) {
        $('#name').after('<span class="error">This field is required</span>');
        isValidated = false;
    }
    if (email.length < 1) {
        $('#email').after('<span class="error">This field is required</span>');
        isValidated = false;
    }
    if (subject.length < 1) {
        $('#subject').after('<span class="error">This field is required</span>');
        isValidated = false;
    }
    /*
     else {
       var regEx = /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/;
       var validEmail = regEx.test(email);
       if (!validEmail) {
         $('#email').after('<span class="error">Enter a valid email</span>');
       }

     }*/
    if (message.length < 1) {
        $('#message').after('<span class="error">This field is required</span>');
        isValidated = false;
    }
    if (isValidated) {
        /* submit button lights up */
        $('#submit-div').addClass('formValidated');
        $('#submit-div a').click(function () {
            alert('Thanks for submitting your form.');
        });
    } else {
        $('#submit-div').removeClass('formValidated');
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


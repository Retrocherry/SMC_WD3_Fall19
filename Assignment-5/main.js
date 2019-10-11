$(document).ready(function () {

    var billingCheckbox;



    $("#mainTitle").addClass("pink");


    $("#colorChange").click(changeColor);
    $("#addDiv").click(addStuff);

    function changeColor() {
        $("#mainTitle").toggleClass("blue");
        $("#subTitle").toggle();
        if ($("#mainTitle").hasClass("pink")) {
            $("#mainTitle").removeClass("pink");
            $("#mainTitle").addClass("blue");
        } else if ($("#mainTitle").hasClass("blue")) {
            $("#mainTitle").removeClass("blue");
            $("#mainTitle").addClass("pink");
        } else {
            $("#mainTitle").addClass("pink");
        }
    }

    function addStuff() {
        // $("#mainTitle").append('<span style="color: red">Ha, ha, ha!</span>');

        var formHTML = `<form method="POST">
        <h4 class="main-title">Shipping Address</h4>
        <div class="form-group needs-validation was-validated" novalidate="">
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="firstName">First name</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value=""
                        required="">
                    <div class="invalid-feedback">
                        Valid first name is required.
                    </div>
                </div>
                <div class="col-md-6 mb-3">
                    <label for="lastName">Last name</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value=""
                        required="">
                    <div class="invalid-feedback">
                        Valid last name is required.
                    </div>
                </div>
            </div>

            <div class="mb-3 form-group">
                <label for="inputAddress">Address</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"
                    required="">
                <div class="invalid-feedback">
                </div>

                <div class="mb-3 form-group">
                    <label for="inputAddress2">Address 2</label><span
                        class="text-muted">(Optional)</span>
                    <input type="text" class="form-control" id="inputAddress2"
                        placeholder="Apartment, studio, or floor">
                </div>

                <div class="form-row">

                    <div class="col-md-6 mb-3">
                        <label for="country">Country</label>
                        <select class="custom-select d-block w-100" id="country" required="">
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>

                    <div class="form-group col-md-6 mb-3">
                        <label for="inputCity">City</label>
                        <select id="inputCity" class="form-control">
                            <option selected>Choose...</option>
                            <option> Los Angeles</option>
                            <option> New York</option>
                        
                            <select>
                    </div>




                    <div class="form-group col-md-4">
                        <label for="inputState">State</label>
                        <select id="inputState" class="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                        </select>
                        <div class="invalid-feedback">
                            Please add a State
                        </div>
                    </div>
                    <div class="form-group col-md-2">
                        <label for="inputZip">Zip</label>
                        <input type="text" class="form-control" id="inputZip">
                    </div>
                    <div class="invalid-feedback">
                        Zip code required.
                    </div>
                </div>


                <div class="form-group">

    </form>

    <hr class="mb-4">

    <div class="custom-control">
        <input type="checkbox" checked class="custom-control-input" id="same-address">
        <label class="custom-control-label" for="same-address">Shipping address is the same as my
            billing
            address</label>
    </div>



    <hr class="mb-4">

<hr class="mb-3">


<button " class="btn btn-primary btn-md btn-block" type="submit">Confirm
    Purchase!
</button>

</form>`;





        var formContainer = $("#form-container");

        console.log(formContainer);

        formContainer.append(formHTML);

        billingCheckbox = $("#inputAddress");

        $("#addDiv").off("click");
    };


})



function toggleBillingInfo() {
    var billingHTML = ` <form method="POST">
    <h4 class="main-title">Billing Information</h4>

    <h5>Make an account with us!</h5>
    <div class="form-group">
        <label for="inputEmail4">Email</label>
        <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
    </div>
    <div class="form-group">
        <label for="inputPassword4">Password</label>
        <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
    </div>

    <label class="sr-only" for="inlineFormInputGroup">Username</label>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <div class="input-group-text">@</div>
        </div>
        <input type="text" class="form-control" id="inlineFormInputGroup"
            placeholder="Username">
    </div>

    <hr class="mt-3 mb-3">
    <div class="form-group">

        <label for="inputAddress">Address</label>
        <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="form-group">
        <label for="inputAddress2">Address 2</label>
        <input type="text" class="form-control" id="inputAddress2"
            placeholder="Apartment, studio, or floor">
    </div>
    <div class="form-row">

        <div class="col-md-6 mb-3">
            <label for="country">Country</label>
            <select class="custom-select d-block w-100" id="country" required="">
                <option value="">Choose...</option>
                <option>United States</option>
            </select>
            <div class="invalid-feedback">
                Please select a valid country.
            </div>
        </div>


        <div class="form-group col-md-6">
            <label for="inputCity">City</label
            <select id="inputCity" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
        </div>



        <div class="form-group col-md-4">
            <label for="inputState">State</label>
            <select id="inputState" class="form-control">
                <option selected>Choose...</option>
                <option>...</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
        </div>
        <div class="form-group col-md-2">
            <label for="inputZip">Zip</label>
            <input type="text" class="form-control" id="inputZip">
        </div>
    </div>
</div>

<h4 class="mb-3 main-title">Payment</h4>
<div class="row">
<div class="custom-control custom-radio col-lg-12 ml-3">
    <input type="radio" id="debit" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="debit">Debit Card</label>
</div>
<div class="custom-control custom-radio col-lg-12 ml-3">
    <input type="radio" id="credit" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="credit">Credit</label>
</div>
<div class="custom-control custom-radio col-lg-12 ml-3">
    <input type="radio" id="paypal" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="paypal">Paypal</label>
</div>
<div class="custom-control custom-radio col-lg-12 ml-3">
    <input type="radio" id="applepay" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="applepay">Apple Pay</label>
</div>
<div class="custom-control custom-radio col-lg-12 col-1 ml-3 mb-3">
    <input type="radio" id="googlepay" name="customRadio" class="custom-control-input">
    <label class="custom-control-label" for="googlepay">Google Pay</label>
</div>
</div>
<div class="row">
<div class="col-md-6 mb-3">
    <label for="cc-name">Name on Card</label>
    <input type="text" class="form-control" id="cc-name" placeholder="" required="">
    <small class="text-muted">Full name as written on card</small>
    <div class="invalid-feedback">
        Name on card is required
    </div>
</div>

<div class="col-md-6 mb-3">
    <label for="cc-number"> Credit Card #</label>
    <input type="text" class="form-control" id="cc-number" placeholder="0000 0000 0000 0000"
        required="">
    <small class="text-muted">Required</small>
    <div class="valid-tooltip mt--3">
        Looks good!
    </div>
    <div class="invalid-feedback">
        Credit card number required!
    </div>

</div>
</div>
<div class="row">
<div class="col-md-3 mb-3">
    <label></label>
    <label for="cc-expiration-month">Month </label>
    <input type="text" class="form-control" id="cc-expiration-month" placeholder="MM"
        required="">
    <div class="invalid-feedback">
        Expiration date required
    </div>
</div>
<div class="col-md-3 mb-3">
    <label for="cc-expiration-year">Year </label>
    <input type="text" class="form-control" id="cc-expiration-year" placeholder="YY"
        required="">
    <div class="invalid-feedback">
        Expiration date required
    </div>
</div>
<div class="col-md-3  mb-3">
    <label for="cc-expiration">CVV</label>
    <input type="text" class="form-control" id="cc-cvv" placeholder="" required="">
    <div class="invalid-feedback">
        Security code required
    </div>

</div>
</div>

</form>`;



}
// var canvas = document.getElementById("Game");
// var ctx = canvas.getContext("2d");

// var ballX = canvas.width / 2;
// var ballY = canvas.height / 2;
// var ballColor = 'rgb(0, 155, 155)';
// var ballRadius = 50;

// var speedX = 5;
// var speedY = 3;

// var directionDown = true;
// var directionRight = true;

// function animate() {
//     ctx.fillStyle = 'rgba(225, 235, 222, 0.3)'; //color of background
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     ctx.beginPath();
//     ctx.fillStyle = ballColor;
//     ctx.strokeStyle = 'black';
//     ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
//     ctx.fill();
//     ctx.stroke();
//     ctx.closePath();

//     if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0) {
//         directionRight = !directionRight;
//     }

//     if (directionRight) {
//         ballX = ballX + speedX;
//     } else {
//         ballX = ballX - speedX;
//     }


//     if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
//         directionDown = !directionDown;
//     }
//     if (directionDown) {
//         ballY = ballY + speedY;
//     } else {
//         ballY = ballY - speedY;
//     }

//     window.requestAnimationFrame(animate);
// }

// animate();



// canvas.addEventListener("click", function (event) {

//     var distX = Math.abs(ballX - event.clientX);
//     var distY = Math.abs(ballY - event.clientY);


//     if (distX < ballRadius && distY < ballRadius) {
//         console.log('FIRE!!!!!!');
//         // amountOfClicks = amountOfClicks + 1;
//     }

// })

var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width / 2;
var ballY = canvas.height / 2;
var ballColor = 'rgb(0, 155, 155)';
var ballRadius = 50;

var speedX = 5;
var speedY = 3;

var directionDown = true;
var directionRight = true;

function animate() {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'black';
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    if (ballX + ballRadius >= canvas.width || ballX - ballRadius <= 0) {
        directionRight = !directionRight;
    }

    if (directionRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }


    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) {
        directionDown = !directionDown;
    }
    if (directionDown) {
        ballY = ballY + speedY;
    } else {
        ballY = ballY - speedY;
    }

    window.requestAnimationFrame(animate);
}

animate();

var counterElem = document.getElementById('counter');

canvas.addEventListener("click", function (event) {

    var distX = Math.abs(ballX - event.clientX);
    var distY = Math.abs(ballY - event.clientY);
    // var distX = Math.abs(ballX - event.canvasX);
    // var distY = Math.abs(ballY - event.canvasY);

    if (distX < ballRadius && distY < ballRadius) {
        console.log('+1 Clicks');
        amountOfClicks = amountOfClicks + 1;
        console.log(amountOfClicks);
        counterElem.innerHTML = amountOfClicks;

        // ctx.fillStyle('rgb(200, 128, 90)');
        // ballColor = 'rgb(200, 128, 90)';
    }
})

var redButton = document.getElementById('redButton');
var blueButton = document.getElementById('blueButton');
var greenButton = document.getElementById('greenButton');


redButton.addEventListener('click',function (e) {
    ballColor = 'rgb(235, 64, 52)'; // Modify color accordingly
})


blueButton.addEventListener('click', function(e) {
    ballColor = 'rgb(22, 174, 240)'; // Modify color accordingly
})

greenButton.addEventListener('click',function (e) {
    ballColor = 'rgb(33, 224, 16)'; // Modify color accordingly
})
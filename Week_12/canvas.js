var canvas = document.getElementById("Game");
var ctx = canvas.getContext("2d");

var ballX = canvas.width / 2; //this will give us the x position of any ball. our position can be described by 2 or 3 dimensions. 
var ballY = canvas.height / 2; //center for Y
var ballColor = 'rgb(0, 155, 155)'
var ballRadius = 50;

//PHYSICS
var speedX;
var speedY; //going to tell me how many pixels it will move on the Y axis on the frame
var ballRadius;

function animate() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.beginPath();
    ctx.fillStyle = ballColor;
    ctx.strokeStyle = 'black';
    ctx.arc(ballX, ballY, ballRadius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.closePath();

    ballX = ballX + speedX;
    ballY = ballY + speedY;

    if (ballX + ballRadius >= canvas.width) {
        directionRight = true;

    }
    if (ballX <= 0) {
        directionRight = true;
    }

    if (directionRight) {
        ballX = ballX + speedX;
    } else {
        ballX = ballX - speedX;
    }



    if (ballY + ballRadius >= canvas.height || ballY - ballRadius <= 0) { // || = OR
        directionDown = false;
    }
    if (ballY - ballRadius <= 0) {
        directionDown = true;

    }


    window.requestAnimationFrame(animate) //our browser is going to request the next animation frame. This will be defined by (animate) function
}

animate();

canvas.addEventListener("click", function (e) { //the peramter that is being passed to it is that event itself. 
            console.log(event);

            var distX = Math.abs(ballX - event.clientX);
            var distY = Math.abs(ballY - event.clientY);

            if (distX < ballRadius && distY < ballRadius) {
                console.log('FIRE@@@@@@@!!!!!!!!!!!!!')
            }
        }
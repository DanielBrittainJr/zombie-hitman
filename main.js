//grab canvas
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
context.fillStyle = "black";

//game objects
let player = { x: 100, y: 100, width: 50, height: 50 };
let enemy = { x: 200, y: 200, width: 30, height: 30 };



function drawPlayer(x, y) {
    context.fillStyle = "blue";
    context.fillRect(x, y, player.width, player.height);
}

function drawEnemy(x, y) {
    context.fillStyle = "red";
    context.fillRect(x, y, enemy.width, enemy.height);
}

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowUp") {
        player.y -= 5;
    } else if (event.code === "ArrowDown") {
        player.y += 5;
    } else if (event.code === "ArrowLeft") {
        player.x -= 5; 
    } else if (event.code === "ArrowRight") {
        player.x += 5;
    }
});


function update() {
    //clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);


    drawPlayer(player.x, player.y);
    drawEnemy(enemy.x, enemy.y);


    //run loop again
    requestAnimationFrame(update);
}

update();

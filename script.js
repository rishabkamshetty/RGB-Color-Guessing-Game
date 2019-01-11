var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#messageDisplay");
var bgHeader = document.querySelector(".bg-header");
var resetBtn = document.querySelector(".new-color");
var hardBtn = document.querySelector(".hardBtn");
var easyBtn = document.querySelector(".easyBtn");

easyBtn.addEventListener("click", function () {
    hardBtn.classList.remove("active");
    easyBtn.classList.add("active");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});
hardBtn.addEventListener("click", function () {
    easyBtn.classList.remove("active");
    hardBtn.classList.add("active");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";

    }
});

resetBtn.addEventListener("click", function () {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    bgHeader.style.backgroundColor = "dimgray";
    this.textContent = "New Colors";
    message.textContent = "";
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function () {
        var clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            colorDisplay.textContent = clickedColor;
            changeColor(clickedColor);
            message.textContent = "Correct!!!";
            resetBtn.textContent = "Play Again";
        } else {
            this.style.backgroundColor = "#fff";
            message.textContent = "Try Again";
        }
    });
};

function changeColor(color) {
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
        bgHeader.style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // create an array
    var arr = [];
    // generate random color
    for (var i = 0; i < num; i++) {
        arr.push(randomColor())
    }
    // return an array
    return arr;
}

function randomColor() {
    // random red color
    var r = Math.floor(Math.random() * 256);
    // random green color
    var g = Math.floor(Math.random() * 256);
    // random Blue color
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
var numsquare = 6;
var color = generateRandomColors(numsquare);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function() {
  this.classList.add("selected");
  hardBtn.classList.remove("selected");
  numsquare = 3;
  color = generateRandomColors(numsquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    if (color[i]) {
      squares[i].style.backgroundColor = color[i];
    } else {
      squares[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function() {
  this.classList.add("selected");
  easyBtn.classList.remove("selected");
  numsquare = 6;
  color = generateRandomColors(numsquare);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  messageDisplay.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];
    squares[i].style.display = "block";
  }
});

reset.addEventListener("click", function() {
  // generate all new colors
  color = generateRandomColors(numsquare);
  // pick a new random color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  reset.textContent = "New Colors";
  messageDisplay.textContent = "";
  // change colors squares on the page
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color[i];
  }
  h1.style.backgroundColor = "steelblue";
});

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add inital colors to squares
  squares[i].style.backgroundColor = color[i];
  // add click listen to squares
  squares[i].addEventListener("click", function() {
    // grab color of clicked square
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);
    //compare color to picked color
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct";
      changeColor(clickedColor);
      h1.style.backgroundColor = clickedColor;
      reset.textContent = "Play Again?";
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function changeColor(color) {
  //loop through all sqaures
  for (var i = 0; i < squares.length; i++) {
    // match each color of square to the given color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  // this random number is being generated to access a random index in the colors array and randomizing the rgb in colors array is done later in the gernerate random colors function
  var random = Math.floor(Math.random() * color.length);
  return color[random];
}

function generateRandomColors(num) {
  // make an array
  var arr = [];
  // add num random colors to array
  for (var i = 0; i < num; i++) {
    // get random color and push into array
    arr.push(randomColor());
  }
  //  return array at the end
  return arr;
}

function randomColor() {
  // r 0 to 255
  var r = Math.floor(Math.random() * 256);
  // g 0 to 255
  var g = Math.floor(Math.random() * 256);
  // b 0 to 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

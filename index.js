var colorCodes = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

var color1, color2;

// For first time genrateGradient must be called automatically
genrateGradient();

$("#genrate-btn").on("click", genrateGradient);
$("#flip-btn").on("click", flipGradient);

function flipGradient() {
  var temp = color1;
  color1 = color2;
  color2 = temp;

  $(".color-1").css("backgroundColor", color1);
  $(".color-1").text(color1);

  $(".color-2").css("backgroundColor", color2);
  $(".color-2").text(color2);

  var gradient = "linear-gradient(90deg," + color1 + "," + color2 + ")";
  $(".color-box").css("background-image", gradient);
}

function genrateGradient() {
  color1 = genrateHexCode();
  color2 = genrateHexCode();

  $(".color-1").css("backgroundColor", color1);
  $(".color-1").text(color1);

  $(".color-2").css("backgroundColor", color2);
  $(".color-2").text(color2);

  var gradient = "linear-gradient(90deg," + color1 + "," + color2 + ")";
  $(".color-box").css("background-image", gradient);
}

function genrateHexCode() {
  var hexCode = "#";
  for (var i = 0; i < 6; i++) {
    hexCode += genrateColor();
  }
  return hexCode;
}

function genrateColor() {
  var randomNumber = Math.floor(Math.random() * 16);
  return colorCodes[randomNumber];
}

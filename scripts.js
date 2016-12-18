var time = document.getElementById("clock");
var colorCode = document.getElementById("color-code");
var body = document.getElementById("body");
var currentTime = getCurrentTime();
var hour = timeFormat((new Date()).getHours());
var minute = timeFormat((new Date()).getMinutes());
var second = timeFormat((new Date()).getSeconds());


setTime();


function setTime() {
  time.innerHTML = getCurrentTime();
  setColor();
  setTimeout(setTime, 1000);
}

function setColor() {
  var red = Math.round(255 * (hour / 23)).toString(16);
  var green = Math.round(255 * (minute / 59)).toString(16);
  var blue = Math.round(255 * (second / 59)).toString(16);

  red = colorFormat(red);
  green = colorFormat(green);
  blue = colorFormat(blue);
  var currentColor = "#"+red+green+blue;

  colorCode.innerHTML = currentColor;
  body.setAttribute("style", "background-color: " + currentColor + ";");
}

function timeFormat(i) {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
}

function colorFormat(i) {
  if (i.length < 2) {
    i = '0' + i;
  }
  return i;
}

function getCurrentTime() {
  var curTime = new Date();
  hour = timeFormat(curTime.getHours());
  minute = timeFormat(curTime.getMinutes());
  second = timeFormat(curTime.getSeconds());

  return hour + ':' + minute + ':' + second;
}

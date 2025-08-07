let image_tracker = "dis";

function changePower() {
  let image = document.getElementById("ifimg");
  let redLed = document.getElementById("redLed");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/led_off.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
    if (redLed) redLed.style.display = "none";
  } else {
    image.src = "./src/images/led/led_dis.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor ="#009C4E";
    image_tracker = "dis";
    if (redLed) redLed.style.display = "none";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  let slider = document.getElementById("photoSlider");
  let redLed = document.getElementById("redLed");
  if (image_tracker == "off") {
    if (slider) slider.style.display = "block";
    if (redLed) redLed.style.display = "block";
    image.src = "./src/images/led/led_off.gif";
    image_tracker = "red";
  } else if (image_tracker == "red" || image_tracker == "green") {
    if (slider) slider.style.display = "none";
    if (redLed) redLed.style.display = "none";
    image.src = "./src/images/led/led_on.gif";
    image_tracker = "off";
  }
}

window.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('photoSlider');
  var redLed = document.getElementById('redLed');
  if (slider && redLed) {
    slider.addEventListener('input', function() {
      // Map slider value (0-100) to opacity (0.1-1)
      var opacity = 0.1 + (slider.value / 100) * 0.9;
      redLed.style.opacity = opacity;
    });
    // Set initial opacity
    var opacity = 0.1 + (slider.value / 100) * 0.9;
    redLed.style.opacity = opacity;
  }
});



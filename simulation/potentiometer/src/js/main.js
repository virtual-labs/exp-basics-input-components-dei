let image_tracker = "dis";

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/led_off.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
  } else {
    image.src = "./src/images/led/led_dis.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor =
      "#009C4E";
    image_tracker = "dis";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/led/led_on.png";
    image_tracker = "red";
  } else if (image_tracker == "red" || image_tracker == "green") {
    image.src = "./src/images/led/led_off.png";
    image_tracker = "off";
  }
}

function changeLedColor() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "red") {
    image.src = "./src/images/led/led_green.png";
    image_tracker = "green";
  } else if (image_tracker == "green") {
    image.src = "./src/images/led/led_on.png";
    image_tracker = "red";
  }
}

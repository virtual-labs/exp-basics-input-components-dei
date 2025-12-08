let image_tracker = "dis";

function showPushbuttonNotification() {
  const pushImg = document.getElementById("ifimg");
  const notification = document.getElementById("pushbuttonNotification");
  if (pushImg && notification) {
    const rect = pushImg.getBoundingClientRect();
    notification.style.left = (rect.right + window.scrollX + 16) + "px";
    notification.style.top = (rect.top + window.scrollY) + "px";
    notification.style.display = "block";
  }
}

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/led_off.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
    showPushbuttonNotification();
  } else {
    image.src = "./src/images/led/led_dis.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor ="#009C4E";
    image_tracker = "dis";
    let notification = document.getElementById("pushbuttonNotification");
    if (notification) notification.style.display = "none";
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



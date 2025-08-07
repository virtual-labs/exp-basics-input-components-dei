let image_tracker = "dis";

function showSlideswitchNotification() {
  const slideImg = document.getElementById("ifimg");
  const notification = document.getElementById("slideswitchNotification");
  if (slideImg && notification) {
    const rect = slideImg.getBoundingClientRect();
    notification.style.left = (rect.right + window.scrollX + 16) + "px";
    notification.style.top = (rect.top + window.scrollY) + "px";
    notification.style.display = "block";
  }
}

function changePower() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "dis") {
    image.src = "./src/images/led/led_off.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker = "off";
    showSlideswitchNotification();
  } else {
    image.src = "./src/images/led/led_dis.gif";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor ="#009C4E";
    image_tracker = "dis";
    let notification = document.getElementById("slideswitchNotification");
    if (notification) notification.style.display = "none";
  }
}

function changeImage() {
  let image = document.getElementById("ifimg");
  if (image_tracker == "off") {
    image.src = "./src/images/led/led_on.gif";
    image_tracker = "red";
  } else if (image_tracker == "red" || image_tracker == "green") {
    image.src = "./src/images/led/led_off.gif";
    image_tracker = "off";
  }
}



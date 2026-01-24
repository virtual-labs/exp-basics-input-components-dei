let image_tracker = "dis";

function changePower() {
  const image = document.getElementById("ifimg");
  const startBtn = document.getElementById("startBtn");
  const pushButton = document.getElementById("pushbutton");

  if (image_tracker === "dis") {
    image.src = "./src/images/led/led_off.png";
    startBtn.innerHTML = '<span class="play-icon">⏹</span> Stop Simulation';
    startBtn.classList.remove("start-btn");
    startBtn.classList.add("stop-btn");
    image_tracker = "off";

    // Show pushbutton
    if (pushButton) {
      pushButton.style.display = "inline-block";
    }
  } else {
    image.src = "./src/images/led/led_dis.png";
    startBtn.innerHTML = '<span class="play-icon">▶</span> Start Simulation';
    startBtn.classList.remove("stop-btn");
    startBtn.classList.add("start-btn");
    image_tracker = "dis";

    // Hide pushbutton
    if (pushButton) {
      pushButton.style.display = "none";
    }
  }
}

function changeImage() {
  const image = document.getElementById("ifimg");
  
  if (image_tracker === "off") {
    image.src = "./src/images/led/led_on.png";
    image_tracker = "red";
  } else if (image_tracker === "red" || image_tracker === "green") {
    image.src = "./src/images/led/led_off.png";
    image_tracker = "off";
  }
}

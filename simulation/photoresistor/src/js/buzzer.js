let image_tracker_buzzer = "dis";

function changePowerBuzzer() {
  const image = document.getElementById("ifimg2");

  if (image_tracker_buzzer === "dis") {
    image.src = "./src/images/buzzer/buzzer_off.png";
    document.getElementById("pushbuttonPower").innerHTML = "Stop Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "red";
    image_tracker_buzzer = "off";
  } else if (image_tracker_buzzer === "off" || image_tracker_buzzer === "on") {
    image.src = "./src/images/buzzer/buzzer_static.png";
    document.getElementById("pushbuttonPower").innerHTML = "Start Simulation";
    document.getElementById("pushbuttonPower").style.backgroundColor = "#009c4e";
    image_tracker_buzzer = "dis";
  }
}

function changeBuzzerImage() {
  const image = document.getElementById("ifimg2");

  if (image_tracker_buzzer ==== "off") {
    image.src = "./src/images/buzzer/buzzer_on.gif";
    image_tracker_buzzer = "on";
  } else if (image_tracker_buzzer === "on") {
    image.src = "./src/images/buzzer/buzzer_off.png";
    image_tracker_buzzer = "off";
  }
}

const audioElement = document.getElementById("myAudio");

function togglePlay() {
  if (audioElement.paused) {
    audioElement.play();
    audioElement.loop = true;
  } else {
    audioElement.pause();
  }
}

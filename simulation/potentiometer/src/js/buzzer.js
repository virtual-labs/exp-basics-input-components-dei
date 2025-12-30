// POTENTIOMETER JAVASCRIPT
let image_tracker_potentiometer = "dis";

// POWER SWITCH
function changePowerBuzzer() {
  let image = document.getElementById("ifimg2");
  let powerButton = document.getElementById("pushbuttonPower");

  if (image_tracker_potentiometer == "dis") {
    // Start Simulation
    image.src = "./src/images/buzzer/pot_on.gif"; // circuit ON gif
    powerButton.innerHTML = "Stop Simulation";
    powerButton.style.backgroundColor = "red";
    image_tracker_potentiometer = "on";
    // Show notification to the right of the image
    showPotNotification();
  } else {
    // Stop Simulation
    image.src = "./src/images/buzzer/pot_off.gif"; // circuit OFF image
    powerButton.innerHTML = "Start Simulation";
    powerButton.style.backgroundColor = "#009C4E";
    image_tracker_potentiometer = "dis";
    // Hide notification
    let potNotification = document.getElementById("potNotification");
    if (potNotification) potNotification.style.display = "none";
    
    // Hide slider and LED when stopping simulation
    let slider = document.getElementById("potSlider");
    let potLed = document.getElementById("potLed");
    if (slider) slider.style.display = "none";
    if (potLed) potLed.style.display = "none";
  }
}

// POTENTIOMETER BUTTON CLICK FUNCTION
function changePotentiometerImage() {
  let image = document.getElementById("ifimg2");
  let slider = document.getElementById("potSlider");
  let potLed = document.getElementById("potLed");
  
  if (image_tracker_potentiometer == "on") {
    if (slider && potLed) {
      if (slider.style.display === "none" || slider.style.display === "") {
        // Show slider and LED indicator
        slider.style.display = "block";
        potLed.style.display = "block";
      } else {
        // Hide slider and LED indicator
        slider.style.display = "none";
        potLed.style.display = "none";
      }
    }
  }
}

// BUZZER BUTTON CLICK FUNCTION (without sound)
function changeBuzzerImage() {
  let image = document.getElementById("ifimg2");
  
  if (image_tracker_potentiometer == "on") {
    // When buzzer is clicked and simulation is running
    image.src = "./src/images/buzzer/buzzer_on.gif";
    
    // Reset to pot_on.gif after a short delay
    setTimeout(() => {
      if (image_tracker_potentiometer == "on") {
        image.src = "./src/images/buzzer/pot_on.gif";
      }
    }, 1000);
  }
}

function showPotNotification() {
  const potImg = document.getElementById("ifimg2");
  const notification = document.getElementById("potNotification");
  if (potImg && notification) {
    // Get image position
    const rect = potImg.getBoundingClientRect();
    // Position notification to the right of the image
    notification.style.left = (rect.right + window.scrollX + 16) + "px"; // 16px gap
    notification.style.top = (rect.top + window.scrollY) + "px";
    notification.style.display = "block";
  }
}

// Add slider event listener for potentiometer simulation
window.addEventListener('DOMContentLoaded', function() {
  var slider = document.getElementById('potSlider');
  var potLed = document.getElementById('potLed');
  if (slider && potLed) {
    slider.addEventListener('input', function() {
      // Map slider value (0-1023) to opacity (0.1-1)
      var opacity = 0.1 + (slider.value / 1023) * 0.9;
      potLed.style.opacity = opacity;
    });
    // Set initial opacity
    var opacity = 0.1 + (slider.value / 1023) * 0.9;
    potLed.style.opacity = opacity;
  }
});

let image_tracker = "dis";

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 180) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);
  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  return [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");
}

function updateGauges(analogValue, pwmValue) {
  const potValue = document.getElementById('potValue');
  const ledValue = document.getElementById('ledValue');
  const potGauge = document.getElementById('potGauge');
  const ledGauge = document.getElementById('ledGauge');
  
  if (potValue) potValue.textContent = analogValue;
  if (ledValue) ledValue.textContent = pwmValue;
  
  if (potGauge) {
    const potAngle = (analogValue / 1023) * 180;
    potGauge.setAttribute('d', describeArc(100, 100, 80, 0, potAngle));
  }
  
  if (ledGauge) {
    const ledAngle = (pwmValue / 255) * 180;
    ledGauge.setAttribute('d', describeArc(100, 100, 80, 0, ledAngle));
  }
}

function changePower() {
  const image = document.getElementById("ifimg");
  const potLed = document.getElementById("potLed");
  const slider = document.getElementById("potSlider");
  const startBtn = document.getElementById("startBtn");
  const pushButton = document.getElementById("pushbutton");

  if (image_tracker === "dis") {
    image.src = "./src/images/buzzer/pot_on.gif";
    startBtn.innerHTML = '<span class="play-icon">⏹</span> Stop Simulation';
    startBtn.classList.remove("start-btn");
    startBtn.classList.add("stop-btn");
    image_tracker = "off";

    // Show potentiometer button
    if (pushButton) {
      pushButton.style.display = "inline-block";
    }

    if (potLed) {
      potLed.style.display = "none";
    }
  } else {
    image.src = "./src/images/buzzer/pot_off.gif";
    startBtn.innerHTML = '<span class="play-icon">▶</span> Start Simulation';
    startBtn.classList.remove("stop-btn");
    startBtn.classList.add("start-btn");
    image_tracker = "dis";

    // Hide potentiometer button
    if (pushButton) {
      pushButton.style.display = "none";
    }

    if (slider) {
      slider.style.display = "none";
    }
    if (potLed) {
      potLed.style.display = "none";
    }
    
    // Reset gauges to zero when stopping simulation
    updateGauges(0, 0);
  }
}

function changeImage() {
  const image = document.getElementById("ifimg");
  const slider = document.getElementById("potSlider");
  const potLed = document.getElementById("potLed");

  if (image_tracker === "off") {
    if (slider) {
      slider.style.display = "block";
    }
    if (potLed) {
      potLed.style.display = "block";
    }
    // Update gauges to current slider value when activating sensor
    const sliderVal = parseInt(slider.value);
    const analogValue = sliderVal;
    const pwmValue = Math.round((sliderVal / 1023) * 255);
    updateGauges(analogValue, pwmValue);
    
    image.src = "./src/images/buzzer/pot_on.gif";
    image_tracker = "red";
  } else if (image_tracker === "red" || image_tracker === "green") {
    if (slider) {
      slider.style.display = "none";
    }
    if (potLed) {
      potLed.style.display = "none";
    }
    image.src = "./src/images/buzzer/pot_on.gif";
    image_tracker = "off";
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('potSlider');
  const potLed = document.getElementById('potLed');

  // Initialize gauges at 0 on page load
  updateGauges(0, 0);

  function updateSensorValues() {
    if (!slider) return;
    const sliderVal = parseInt(slider.value);
    const analogValue = sliderVal;
    const pwmValue = Math.round((sliderVal / 1023) * 255);
    
    updateGauges(analogValue, pwmValue);
  }

  if (slider && potLed) {
    slider.addEventListener('input', function() {
      const opacity = 0.1 + (slider.value / 1023) * 0.9;
      potLed.style.opacity = opacity;
      updateSensorValues();
    });

    const opacity = 0.1 + (slider.value / 1023) * 0.9;
    potLed.style.opacity = opacity;
  }
});

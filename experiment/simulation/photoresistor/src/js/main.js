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
  const lightValue = document.getElementById('lightValue');
  const ledValue = document.getElementById('ledValue');
  const lightGauge = document.getElementById('lightGauge');
  const ledGauge = document.getElementById('ledGauge');
  
  if (lightValue) lightValue.textContent = analogValue;
  if (ledValue) ledValue.textContent = pwmValue;
  
  if (lightGauge) {
    const lightAngle = (analogValue / 1023) * 180;
    lightGauge.setAttribute('d', describeArc(100, 100, 80, 0, lightAngle));
  }
  
  if (ledGauge) {
    const ledAngle = (pwmValue / 255) * 180;
    ledGauge.setAttribute('d', describeArc(100, 100, 80, 0, ledAngle));
  }
}

function changePower() {
  const image = document.getElementById("ifimg");
  const redLed = document.getElementById("redLed");
  const slider = document.getElementById("photoSlider");
  const startBtn = document.getElementById("startBtn");
  const popup = document.getElementById("sensorPopup");

  if (image_tracker === "dis") {
    image.src = "./src/images/led/led_off.gif";
    startBtn.innerHTML = '<span class="play-icon">⏹</span> Stop Simulation';
    startBtn.classList.remove("start-btn");
    startBtn.classList.add("stop-btn");
    image_tracker = "off";

    if (popup) {
      popup.style.display = "block";
      setTimeout(() => {
        popup.classList.add("show");
      }, 100);
    }

    if (redLed) {
      redLed.style.display = "none";
    }
  } else {
    image.src = "./src/images/led/led_dis.gif";
    startBtn.innerHTML = '<span class="play-icon">▶</span> Start Simulation';
    startBtn.classList.remove("stop-btn");
    startBtn.classList.add("start-btn");
    image_tracker = "dis";

    if (popup) {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    }

    if (slider) {
      slider.style.display = "none";
    }
    if (redLed) {
      redLed.style.display = "none";
    }
    
    // Reset gauges to zero when stopping simulation
    updateGauges(0, 0);
  }
}

function changeImage() {
  const image = document.getElementById("ifimg");
  const slider = document.getElementById("photoSlider");
  const redLed = document.getElementById("redLed");
  const popup = document.getElementById("sensorPopup");

  if (image_tracker === "off") {
    if (popup) {
      popup.classList.remove("show");
      setTimeout(() => {
        popup.style.display = "none";
      }, 300);
    }

    if (slider) {
      slider.style.display = "block";
    }
    if (redLed) {
      redLed.style.display = "block";
    }
    // Update gauges to current slider value when activating sensor
    const sliderVal = parseInt(slider.value);
    const analogValue = Math.round((sliderVal / 100) * 1023);
    const pwmValue = Math.round((sliderVal / 100) * 255);
    updateGauges(analogValue, pwmValue);
    
    image.src = "./src/images/led/led_off.gif";
    image_tracker = "red";
  } else if (image_tracker === "red" || image_tracker === "green") {
    if (slider) {
      slider.style.display = "none";
    }
    if (redLed) {
      redLed.style.display = "none";
    }
    image.src = "./src/images/led/led_off.gif";
    image_tracker = "off";
  }
}

window.addEventListener('DOMContentLoaded', function() {
  const slider = document.getElementById('photoSlider');
  const redLed = document.getElementById('redLed');

  // Initialize gauges at 0 on page load
  updateGauges(0, 0);

  function updateSensorValues() {
    if (!slider) return;
    const sliderVal = parseInt(slider.value);
    const analogValue = Math.round((sliderVal / 100) * 1023);
    const pwmValue = Math.round((sliderVal / 100) * 255);
    
    updateGauges(analogValue, pwmValue);
  }

  if (slider && redLed) {
    slider.addEventListener('input', function() {
      const opacity = 0.1 + (slider.value / 100) * 0.9;
      redLed.style.opacity = opacity;
      updateSensorValues();
    });

    const opacity = 0.1 + (slider.value / 100) * 0.9;
    redLed.style.opacity = opacity;
  }
});

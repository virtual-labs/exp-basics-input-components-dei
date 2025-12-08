## Input Components in Embedded Systems and IoT

In embedded systems and IoT applications, input components allow the microcontroller to sense user actions and environmental changes.  
This experiment focuses on understanding how different input devices interact with the Arduino Uno and how their signals can be read in a virtual lab simulation.  
The Arduino reads these signals as **digital or analog values**, which are then processed through programming logic.

---

## Pushbutton (Digital Input)

A pushbutton is a simple mechanical input device used to detect press-and-release actions.

### Working Principle

- When pressed, it **completes the circuit**; when released, it **opens the circuit**.  
- It provides a **digital output**:
  - **HIGH (1)** when activated  
  - **LOW (0)** when deactivated (depending on wiring type)
- Arduino uses **internal pull-up or pull-down resistors** to prevent floating inputs.

### Simulation Use

- In the virtual lab, pressing the button generates a clean digital signal without mechanical noise.

### Applications

- Start/stop commands  
- Menu selection  
- Reset operations  
- General user input control  

---

## Potentiometer (Analog Input)

A potentiometer is a rotary variable resistor that provides **adjustable analog input**.

### Working Principle

- Produces a variable voltage (**0–5V**) based on knob rotation.  
- Connected to Arduino through **analog pins A0–A5**.  
- Arduino reads the value using its **10-bit ADC**, generating values **0 to 1023**.

### Simulation Use

- Turning the knob shows **real-time voltage changes** on the analog input in the simulation.

### Applications

- Brightness control  
- Audio volume adjustment  
- Motor speed regulation  
- Sensor calibration  

---

## Slider Switch (Digital Input)

A slider switch is a stable two-position switch used for mode selection.

### Working Principle

- Slides between two fixed states: **ON/OFF** or **LEFT/RIGHT**.  
- Provides a **stable digital signal** that stays constant until the switch is moved.

### Simulation Use

- Sliding the switch instantly toggles the digital input on the Arduino pin.

### Applications

- Mode selection  
- Enabling/disabling circuits  
- Device configuration settings  

---

## Photoresistor / LDR (Analog Input)

A Photoresistor (LDR) is a light-sensitive resistor whose resistance varies with light intensity.

### Working Principle

- **High light → Low resistance → Higher voltage output**  
- **Low light → High resistance → Lower voltage output**  
- Used with a **voltage divider** to produce an analog voltage.  
- Arduino reads this through analog pins to measure **light intensity**.

### Applications

- Automatic lighting systems  
- Security alarms  
- Smart agriculture  
- Home automation  

### Simulation Use

- Light intensity can be adjusted using a slider in the virtual lab, showing the analog reading change instantly.

---

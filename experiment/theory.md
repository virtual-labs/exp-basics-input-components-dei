In embedded systems and IoT applications, input components allow the microcontroller to sense user actions and environmental changes. This experiment focuses on understanding how different input devices interact with the Arduino Uno and how their signals can be read in a virtual lab simulation. The Arduino reads these signals as digital or analog values, which can then be processed through programming logic.

# Pushbutton (Digital Input)

A pushbutton is a simple mechanical input device used to detect press-and-release actions.

## Working Principle

When pressed, it completes the circuit; when released, it opens the circuit.

It provides a digital output:

HIGH (1) when activated

LOW (0) when deactivated (depending on wiring type)

Arduino uses internal pull-up or pull-down resistors to avoid floating input values.

## Simulation Use

In the virtual lab, pressing the button creates a clean digital signal without mechanical noise.

## Applications

Start/stop commands, menu selection, reset operations, and user input control.

# Potentiometer (Analog Input)

A potentiometer is a rotary variable resistor that provides adjustable analog input.

Working Principle

Produces a variable voltage (0–5V) based on knob rotation.

Connected to Arduino through analog pins A0–A5.

Arduino reads this using its 10-bit ADC, giving values from 0 to 1023.

## Simulation Use

Turning the knob in the simulation shows real-time voltage changes on the analog input.

## Applications

Brightness control, audio volume adjustment, motor speed regulation, and calibration.

# Slider Switch (Digital Input)

A slider switch is a selectable two-position switch used for stable mode selection.

## Working Principle

Slides between two fixed states: ON/OFF or LEFT/RIGHT.

Provides a stable digital signal that does not change until the switch is moved.

## Simulation Use

Sliding the switch immediately toggles the digital input on the Arduino pin.

## Applications

Mode selection, enabling/disabling circuits, device configuration settings.

# Photoresistor / LDR (Analog Input)

A Photoresistor (LDR) is a light-sensitive resistor whose resistance depends on the light intensity.

## Working Principle

High light → Low resistance → Higher voltage

Low light → High resistance → Lower voltage

Used with a voltage divider to generate an analog voltage for the Arduino.

Arduino reads this value through analog pins to determine light levels.

## Applications

Automatic lighting systems, security alarms, smart agriculture, and home automation.

## Simulation Use

Light intensity can be adjusted using a slider in the virtual lab to observe changes instantly.
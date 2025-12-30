This experiment studies basic input components—pushbutton, potentiometer, slider switch and photoresistor—and their electrical interfacing with Arduino so that the microcontroller can sense digital events and analog values reliably. The theory now includes both scientific background and explicit pin‑level connections for each component, with image placeholders you can fill later in your report.

**1. Pushbutton: digital input and connection**
A pushbutton is a momentary electromechanical switch that provides a binary signal corresponding to pressed and released states, suitable for digital input sensing. Due to mechanical contact bounce and the possibility of floating inputs, the Arduino pin must be biased using pull‑up or pull‑down techniques so that the logic level is always well defined.​

In this experiment, the standard and robust connection is to use an internal pull‑up configuration: one leg of the pushbutton is connected to an Arduino digital input pin (e.g., D2), and the other leg is connected to ground (GND). In the sketch, the pin is configured as INPUT_PULLUP, which enables the internal pull‑up resistor so that the pin reads HIGH when the button is open and LOW when the button is pressed, because the input is then shorted to ground through the switch. This wiring minimizes external components and clearly demonstrates the concept of active‑low digital inputs.​
![](https://docs.arduino.cc/static/529466c29da40f5e0129591beec4f0ff/4ef49/circuit.png)

**2. Potentiometer: analog input and connection**
The potentiometer acts as a manually controlled voltage divider, transforming mechanical rotation into a variable output voltage. When used with Arduino, this allows continuous user control to be sampled by the analog‑to‑digital converter and represented as a 10‑bit digital value from 0 to 1023.​

For the experiment connections, one outer terminal of the potentiometer is wired to the 5 V pin of the Arduino and the other outer terminal is wired to GND, establishing a fixed potential difference across the resistive track. The middle wiper terminal is then connected to an analog input pin (commonly A0), which senses a voltage that varies between approximately 0 V and 5 V as the knob is rotated. This setup directly implements the classical voltage divider, with the Arduino ADC sampling the wiper voltage to illustrate the mapping between knob position and digital reading.
![](https://docs.arduino.cc/static/c0dbb145c8aed34ea8b617049eef33b1/4ef49/potentiometer-circuit.png)

**3. Slider switch: discrete mode input and connection**
A slider switch provides one or more stable mechanical positions, each corresponding to a discrete electrical connection that can be used to encode configuration states for the microcontroller. In its simplest SPST or SPDT form, it behaves like a latching on/off or selector switch, unlike the momentary pushbutton.

In this experiment, a common and clear wiring approach is to treat each slider pole as a digital input similar to a button: one terminal of the slider is connected to GND, the other terminal is connected to an Arduino digital pin (e.g., D3), and the pin is configured with INPUT_PULLUP. When the slider is in the “ON” position, the pin is connected to GND and reads LOW; when it is in the “OFF” position, the pin is open and pulled HIGH by the internal pull‑up. If a multi‑position or multi‑throw slider is used, additional contacts can be wired to other digital pins (e.g., D4, D5) to encode multiple modes using different HIGH/LOW combinations.
​

Figure 4: Slider switch wired like a latched button with one side to GND and the other to Arduino digital pin D3 using internal pull‑up, representing mode selection.
(Image placeholder – to be inserted here)

**4. Photoresistor (LDR): analog input and connection**
The photoresistor is a passive optoelectronic device whose resistance decreases with increasing light intensity, so it must be placed in a voltage divider to produce a measurable voltage for the ADC. This circuit converts changes in resistance into changes in node voltage, which the Arduino can then sample on an analog input.

In the typical connection for this experiment, one leg of the LDR is connected to the 5 V pin, and the other leg is connected to a junction node that is also tied to one end of a fixed resistor (often around 10 kΩ). The other end of the fixed resistor is connected to GND, completing the series path from 5 V through the LDR and resistor to ground. The junction node between the LDR and the fixed resistor is connected to an Arduino analog input pin (e.g., A1), so that as light intensity changes, the LDR resistance changes, altering the junction voltage and thus the analogRead value.
​![](https://projects.arduinocontent.cc/3329d088-703d-4598-99fc-8f52c4fe3e0b.png)

Figure 5: LDR and 10 kΩ resistor forming a voltage divider between 5 V and GND, with the junction connected to analog input A1 on Arduino.
(Image placeholder – to be inserted here)


​


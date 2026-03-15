# Gamepad

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A library for accessing gamepad/controller input in the browser.

## Demo
[https://code4fukui.github.io/Gamepad/](https://code4fukui.github.io/Gamepad/)

## Features
- Provides a simple interface to access gamepad/controller input
- Supports vibration functionality

## Usage
To use the library, import the `Gamepad` module:

```javascript
import { Gamepad } from "./Gamepad.js";

const pads = Gamepad.get();
if (pads.length > 0) {
  const pad = pads[0];
  console.log(pad.id, pad.mapping, pad.axes, pad.buttons.map(b => b.value));

  if (pad.buttons[0].pressed) {
    await pad.vibrationActuator.playEffect("dual-rumble", {
      duration: 100,
      weakMagnitude: 1.0
    });
  }
}
```

## License
This project is licensed under the MIT License.
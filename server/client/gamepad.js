let gamepad = null;
let gpIndex = null;

window.addEventListener("gamepadconnected", (e) => {
  gamepad = e.gamepad
  gpIndex = e.gamepad.index
  console.log(gamepad)
  // gpIndex = e.index
  console.log(
    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index,
    e.gamepad.id,
    e.gamepad.buttons.length,
    e.gamepad.axes.length,
  );
  // console.log(gamepad)
});

window.addEventListener("gamepaddisconnected", (e) => {
  console.log(
    "Gamepad disconnected from index %d: %s",
    e.gamepad.index,
    e.gamepad.id,
  );
});


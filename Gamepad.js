const getGamepads = function() {
  if (!navigator.getGamepads || navigator.getGamepads().length == 0)
    return [];
  const pads = navigator.getGamepads();
  return pads.filter(p => p);
};

const Gamepad = {
  get: getGamepads,
};
export { Gamepad };

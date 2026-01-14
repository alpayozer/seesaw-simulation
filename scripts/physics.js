import {
  ANGLE_SENSITIVITY,
  MAX_ANGLE,
  TORQUE_NORMALIZATION,
} from "./constants.js";
import { plankDisplay } from "./dom.js";
import { state } from "./state.js";
import { updateValues } from "./ui.js";

const calculateTorque = (box) => {
  return box.weight * (box.distance / TORQUE_NORMALIZATION);
};

const updateSeesawPosition = () => {
  let leftTorque = 0;
  let rightTorque = 0;
  let leftWeightTotal = 0;
  let rightWeightTotal = 0;

  state.objects.forEach((box) => {
    const torque = calculateTorque(box);
    if (box.side === "left") {
      leftTorque += torque;
      leftWeightTotal += box.weight;
    } else {
      rightTorque += torque;
      rightWeightTotal += box.weight;
    }
  });
  const netTorque = rightTorque - leftTorque;
  const angle = Math.max(
    -MAX_ANGLE,
    Math.min(MAX_ANGLE, netTorque / ANGLE_SENSITIVITY)
  );
  state.currentAngle = angle;
  plankDisplay.style.transform = `rotate(${angle}deg)`;

  updateValues(leftWeightTotal, rightWeightTotal, angle);
};

export { updateSeesawPosition };

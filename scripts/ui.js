import {
  angleDisplay,
  leftWeightDisplay,
  nextWeightDisplay,
  rightWeightDisplay,
} from "./dom.js";
import { state } from "./state.js";

const generateRandomWeight = () => {
  state.nextWeight = Math.floor(Math.random() * 10) + 1;
  nextWeightDisplay.textContent = `${state.nextWeight}kg`;
};

const updateValues = (leftWeight, rightWeight, currentAngle) => {
  leftWeightDisplay.textContent = leftWeight;
  rightWeightDisplay.textContent = rightWeight;
  angleDisplay.textContent = `${currentAngle.toFixed(2)}°`;
};

export { generateRandomWeight, updateValues };

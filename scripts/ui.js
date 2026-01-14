import {
  angleDisplay,
  leftWeightDisplay,
  nextWeightDisplay,
  plankDisplay,
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

const renderBox = (box) => {
  const weightBox = document.createElement("div");
  weightBox.classList.add("weight-box");
  weightBox.id = `box-${box.id}`;
  weightBox.textContent = `${box.weight}kg`;

  const scale = 0.7 + (box.weight / 10) * 0.8;
  weightBox.style.width = `${40 * scale}px`;
  weightBox.style.height = `${40 * scale}px`;

  weightBox.style.left = box.styleLeft;

  plankDisplay.appendChild(weightBox);
};

export { generateRandomWeight, updateValues, renderBox };

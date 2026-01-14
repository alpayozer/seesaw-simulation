import {
  angleDisplay,
  leftWeightDisplay,
  logsDisplay,
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
  weightBox.style.width = `${9 * scale}%`;
  weightBox.style.left = box.styleLeft;

  plankDisplay.appendChild(weightBox);

  if (logsDisplay && box.distance) {
    renderLog(box.weight, box.distance, box.side);
  }
};

const renderLog = (weight, distance, side) => {
  const logItem = document.createElement("div");
  logItem.classList.add("log-item");
  logItem.textContent = `Dropped a ${weight}kg object ${Math.round(
    distance
  )}px to the ${side} of the center.`;
  logsDisplay.prepend(logItem);
};

export { generateRandomWeight, updateValues, renderBox };

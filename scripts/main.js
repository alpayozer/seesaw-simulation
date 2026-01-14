import {
  containerDisplay,
  logsDisplay,
  plankDisplay,
  resetButton,
} from "./dom.js";
import { updateSeesawPosition } from "./physics.js";
import { state } from "./state.js";
import { generateRandomWeight, renderBox } from "./ui.js";
import { getSeesawWeights, saveSeesawWeights } from "./storage.js";
import { playSound } from "./sound.js";

const init = () => {
  console.log("Seesaw Simulation Initialized");

  generateRandomWeight();

  resetButton.addEventListener("click", () => {
    state.objects = [];
    plankDisplay.innerHTML = `<div class="balance-point"></div>`;
    logsDisplay.innerHTML = "";
    localStorage.removeItem("seesawWeights");
    updateSeesawPosition();
    generateRandomWeight();
  });

  containerDisplay.addEventListener("click", (e) => {
    const containerArea = containerDisplay.getBoundingClientRect();
    const plankLength = plankDisplay.getBoundingClientRect().width;
    const balancePoint = containerArea.left + containerArea.width / 2;
    const boxDistance = e.clientX - balancePoint;
    const scale = containerArea.width / plankLength;
    const scaledDistance = boxDistance / scale;
    const boxPoint = plankLength / 2 + scaledDistance;
    const distancePercentage = (boxPoint * 100) / plankLength;

    if (state.nextWeight <= 0) {
      generateRandomWeight();
    }

    const nextWeight = state.nextWeight;

    const newBox = {
      id: Date.now(),
      weight: nextWeight,
      styleLeft: `${distancePercentage}%`,
      distance: Math.abs(scaledDistance),
      side: boxDistance < 0 ? "left" : "right",
    };

    renderBox(newBox);
    state.objects.push(newBox);
    playSound();
    saveSeesawWeights();
    updateSeesawPosition();
    generateRandomWeight();
  });

  if (getSeesawWeights()) {
    try {
      state.objects = getSeesawWeights();
      state.objects.forEach((box) => renderBox(box));
      updateSeesawPosition();
    } catch (error) {
      console.error("Error loading saved seesaw weights:", error);
      localStorage.removeItem("seesawWeights");
    }
  }
};

document.addEventListener("DOMContentLoaded", init);

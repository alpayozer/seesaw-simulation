import { PLANK_LENGTH } from "./constants.js";
import { containerDisplay } from "./dom.js";
import { state } from "./state.js";
import { generateRandomWeight, renderBox, updateValues } from "./ui.js";

const init = () => {
  console.log("Seesaw Simulation Initialized");

  generateRandomWeight();
  updateValues(10, 5, 20);

  containerDisplay.addEventListener("click", (e) => {
    const containerArea = containerDisplay.getBoundingClientRect();
    const balancePoint = containerArea.left + containerArea.width / 2;
    const boxDistance = e.clientX - balancePoint;
    const scale = containerArea.width / PLANK_LENGTH;
    const scaledDistance = boxDistance / scale;
    const boxPoint = PLANK_LENGTH / 2 + scaledDistance;

    let nextWeight = state.nextWeight;

    if (nextWeight <= 0) {
      nextWeight = Math.floor(Math.random() * 10) + 1;
      state.nextWeight = nextWeight;
      nextWeightDisplay.textContent = `${state.nextWeight}kg`;
    }

    const newBox = {
      id: Date.now(),
      weight: nextWeight,
      styleLeft: `${boxPoint}px`,
    };

    renderBox(newBox);
    state.objects.push(newBox);
    generateRandomWeight();
  });
};

document.addEventListener("DOMContentLoaded", init);

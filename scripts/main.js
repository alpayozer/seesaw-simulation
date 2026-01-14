import { PLANK_LENGTH } from "./constants.js";
import { containerDisplay } from "./dom.js";
import { updateSeesawPosition } from "./physics.js";
import { state } from "./state.js";
import { generateRandomWeight, renderBox } from "./ui.js";

const init = () => {
  console.log("Seesaw Simulation Initialized");

  generateRandomWeight();

  containerDisplay.addEventListener("click", (e) => {
    const containerArea = containerDisplay.getBoundingClientRect();
    const balancePoint = containerArea.left + containerArea.width / 2;
    const boxDistance = e.clientX - balancePoint;
    const scale = containerArea.width / PLANK_LENGTH;
    const scaledDistance = boxDistance / scale;
    const boxPoint = PLANK_LENGTH / 2 + scaledDistance;

    if (state.nextWeight <= 0) {
      generateRandomWeight();
    }

    const nextWeight = state.nextWeight;

    const newBox = {
      id: Date.now(),
      weight: nextWeight,
      styleLeft: `${boxPoint}px`,
      distance: Math.abs(scaledDistance),
      side: boxDistance < 0 ? "left" : "right",
    };

    renderBox(newBox);
    state.objects.push(newBox);
    updateSeesawPosition();
    generateRandomWeight();
  });
};

document.addEventListener("DOMContentLoaded", init);

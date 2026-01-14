import { logsDisplay, plankDisplay, resetButton } from "../dom.js";
import { updateSeesawPosition } from "../physics.js";
import { state } from "../state.js";
import { generateRandomWeight } from "../ui.js";

const handleReset = () => {
  resetButton.addEventListener("click", () => {
    state.objects = [];
    plankDisplay.innerHTML = `<div class="balance-point"></div>`;
    logsDisplay.innerHTML = "";
    localStorage.removeItem("seesawWeights");
    updateSeesawPosition();
    generateRandomWeight();
  });
};

export { handleReset };

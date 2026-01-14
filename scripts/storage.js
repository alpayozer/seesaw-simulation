import { updateSeesawPosition } from "./physics.js";
import { state } from "./state.js";
import { renderBox } from "./ui.js";

const saveSeesawWeights = () => {
  localStorage.setItem("seesawWeights", JSON.stringify(state.objects));
};

const getSeesawWeights = () => {
  const savedWeights = localStorage.getItem("seesawWeights");
  return savedWeights ? JSON.parse(savedWeights) : null;
};

const loadSeesawWeights = () => {
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

export { saveSeesawWeights, getSeesawWeights, loadSeesawWeights };

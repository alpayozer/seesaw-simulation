import { generateRandomWeight } from "./ui.js";
import { loadSeesawWeights } from "./storage.js";
import { boxDropHandler } from "./handlers/boxDropHandler.js";
import { handleReset } from "./handlers/resetHandler.js";

const init = () => {
  generateRandomWeight();
  loadSeesawWeights();
  boxDropHandler();
  handleReset();
};

document.addEventListener("DOMContentLoaded", init);

import { generateRandomWeight, updateValues } from "./ui.js";

const init = () => {
  console.log("Seesaw Simulation Initialized");

  generateRandomWeight();
  updateValues(10, 5, 20);
};

document.addEventListener("DOMContentLoaded", init);

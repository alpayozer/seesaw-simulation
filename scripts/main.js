import { generateRandomWeight, renderBox, updateValues } from "./ui.js";

const init = () => {
  console.log("Seesaw Simulation Initialized");

  generateRandomWeight();
  updateValues(10, 5, 20);
  renderBox({ id: 3, weight: 3, styleLeft: "90px" });
  renderBox({ id: 7, weight: 7, styleLeft: "250px" });
  renderBox({ id: 9, weight: 9, styleLeft: "330px" });
  renderBox({ id: 10, weight: 10, styleLeft: "370px" });
};

document.addEventListener("DOMContentLoaded", init);

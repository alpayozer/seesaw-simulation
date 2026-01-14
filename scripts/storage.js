import { state } from "./state.js";

const saveSeesawWeights = () => {
  localStorage.setItem("seesawWeights", JSON.stringify(state.objects));
};

const getSeesawWeights = () => {
  const savedWeights = localStorage.getItem("seesawWeights");
  return savedWeights ? JSON.parse(savedWeights) : null;
};

export { saveSeesawWeights, getSeesawWeights };

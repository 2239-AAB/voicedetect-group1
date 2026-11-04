// UI wiring only. The actual math lives in calculation.js -> calculate(a, b).
const inputA = document.getElementById("number-a");
const inputB = document.getElementById("number-b");
const output = document.getElementById("result");

function update() {
  if (inputA.value === "" || inputB.value === "") {
    output.value = "";
    return;
  }
  output.value = calculate(Number(inputA.value), Number(inputB.value));
}

inputA.addEventListener("input", update);
inputB.addEventListener("input", update);

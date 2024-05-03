//selector
const result = document.getElementById("result");
const widthInput = document.getElementById("widthInput");
const heightInput = document.getElementById("heightInput");
const calcBtn = document.getElementById("calcBtn");
const records = document.getElementById("records");

//logic function
const area = (w, h) => w * h;

//event listen
const handleBtn = () => {
  const logic = area(widthInput.valueAsNumber, heightInput.valueAsNumber);
  result.innerHTML = `${widthInput.valueAsNumber} ft * ${heightInput.valueAsNumber} ft = ${logic} ft<sup>2</sup>`;
  widthInput.value = null;
  heightInput.value = null;
};

const clearHandle = () => {
  result.innerHTML = "";
};

const storeHandle = () => {
  records.innerHTML += `<li>${result.innerHTML}</li>`;
  clearHandle();
};

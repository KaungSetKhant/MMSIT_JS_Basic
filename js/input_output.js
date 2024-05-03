// const area = (w, h) => w * h;
// const width = window.prompt("width");
// const height = window.prompt("height");
// // window.alert(area(width, height));
// document.write(area(width, height));

// const ask = window.confirm("Do you love me");
// console.log(ask);
// window.alert(ask ? "Nyi 400" : "You die");

// document.write("Hello");

const heading = document.getElementById("heading");
const para = document.getElementById("para");
const lists = document.getElementById("lists");
const list_one = document.getElementById("list_one");
const inputText = document.getElementById("inputText");
const btn = document.getElementById("btn");

// console.dir(lists.innerHTML);
// console.dir(lists.innerText);

// input type - number - valueAsNumber
// input type - date - valueAsDate (this is object so we can get like  getFullYear())
// input type - text - value

// heading.innerText = "ha ha";

const run = () => {
  const data = inputText.value;
  heading.innerText = data;
  inputText.value = "";
};

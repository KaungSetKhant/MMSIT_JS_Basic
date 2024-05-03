// //function expression
// const funExp = function (a, b) {
//   return a + b;
// };
// console.log(funExp(2, 3));

// //arrow function
// const arrowFun = (a, b) => a + b;
// console.log(arrowFun(6, 6));

// //function expression
// const run = function () {
//   return "this is run function";
// };
// console.log(run());

// //arrow function
// const arrowRun = () => "this is arrow run function";
// console.log(arrowRun());

// const arrowSquareArea = (w) => w ** 2;
// console.log(arrowSquareArea(4));

// const arrowCircleArea = (r) => Math.PI * r ** 2;
// console.log(arrowCircleArea(30));

// const arrowArea = (w, h) => w * h;
// console.log(arrowArea(15, 50));

// const findMyAge = (dateString) => {
//   const date = new Date();
//   const currentDate = date.getFullYear();

//   const inputDate = new Date(dateString);
//   const birthYear = inputDate.getFullYear();

//   return currentDate - birthYear;
// };
// console.log(findMyAge("2001-02-05"));

// const gadgets = [
//   { id: 1, name: "SmartPhone", price: 599.99, stock: 100, rating: 4.8 },
//   { id: 2, name: "Laptop", price: 1299.99, stock: 50, rating: 4.5 },
//   { id: 3, name: "SmartWatch", price: 199.99, stock: 75, rating: 4.2 },
//   {
//     id: 4,
//     name: "Noise-Cancelling-Headphones",
//     price: 249.99,
//     stock: 30,
//     rating: 4.7,
//   },
//   { id: 5, name: "Fitness Tracker", price: 79.99, stock: 120, rating: 4.6 },
// ];
// console.table(gadgets);
// console.table(gadgets.sort((a, b) => a.price - b.price));
// console.table(
//   gadgets.sort((a, b) => a.name.charCodeAt() - b.name.charCodeAt())
// );

// console.table(
//   gadgets.map((gadget) => {
//     gadget.price += 100;
//     return gadget;
//   })
// );

//short statement
// console.table(
//   gadgets.map((gadget) => ({ ...gadget, price: (gadget.price += 100) }))
// );

// console.table(gadgets.filter((gadget) => gadget.stock >= 100));

// console.table(gadgets.reduce((pv, cv) => pv + cv.price, 0));

// const nums = [10, 16, 3.2, 0, 39, 53, 2.1, -21, 5];
// console.log(nums.sort((a, b) => a - b)); //ascending sort
// console.log(nums.sort((a, b) => b - a)); //descending sort

// const chars = ["a", "x", "y", "b", "z", "c"];
// console.log(chars);
// console.log(chars.sort((a, b) => a.charCodeAt() - b.charCodeAt()));
// console.log(chars.sort((a, b) => b.charCodeAt() - a.charCodeAt()));

//mutable(can change) like array and object and immutable(cannot change)

//method chaining
// console.table(
//   gadgets
//     .filter((gadget) => gadget.stock >= 100)
//     .map((gadget) => ({ ...gadget, price: gadget.price - 20 }))
//     .map((gadget) => gadget.name)
//     .join("\n")
// );

//method chaining
// const text = "san kyi tar par byar ma ya boo lar ma ti boo kwar";
// console.log(
//   text
//     .split(" ")
//     .filter((el) => el.length === 3)
//     .map((el) => el.toUpperCase())
//     .join(" ")
// );
// split(" ") make array

//array destructuring
// const arr = ["a", "b", "c", "d", "e"];
// const [x, y, z] = arr;
// console.log(x);
// console.log(y);
// console.log(z);

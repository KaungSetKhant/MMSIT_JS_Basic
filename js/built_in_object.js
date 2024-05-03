//Date() - native code
// const d = new Date();
// console.dir(d);
// console.dir(d.toDateString());
// console.dir(d.toTimeString());
// console.dir(d.toLocaleTimeString());
// console.dir(d.toLocaleDateString());

// console.log(d.getFullYear());
// console.log(d.getMonth());
// console.log(d.getDay());
// console.log(d.getDate());
// console.log(d.getHours());
// console.log(d.getSeconds());
// console.log(d.getMinutes());
// console.log(d.getTime());

//Q-1 What is 300 hours from now on?
// console.log(d.toLocaleDateString());
// d.setHours(d.getHours() + 300);
// console.log(d.toLocaleDateString());

//Q-2 What is next blood donation date from current date to next 4 months?
// console.log(d.toLocaleDateString());
// d.setMonth(d.getMonth() + 4);
// console.log(d.toLocaleDateString());

//Q-3 How many day we need to study if we have 50 hours courses to learn 2 hours on each day?
//logic - 50hrs/2hrs = 25 days
// console.log(d.toLocaleDateString());
// d.setDate(d.getDate() + 25);
// console.log(d.toLocaleDateString());

//Q-4 Which day is anniversary? 12-15-2020 is marriage to 1000 ani
// const marriage = new Date("2020-12-15");
// console.log(marriage.toLocaleDateString());
// marriage.setDate(marriage.getDate() + 1000);
// console.log(marriage.toLocaleDateString());

//String() - native code
// const myName = "kaung set khant";
// console.log(myName);

// console.dir(String);
// console.log(String.fromCharCode(65,79,84));

// const st = new String("    san kyi tar par  ");
// console.log(st);
// console.log(st.length);

// console.log(st[0]);

//cut string
// console.log(st.substr(0, 7));
// console.log(st.slice(7));
// console.log(st.substring(4, 8));

//search string
// console.log(st.search("par"));

//replace string
// console.log(st.replace("par", "byar"));

//replaceAll string
// console.log(st.replaceAll("a", "haha"));

//string transform
// console.log(st.toUpperCase());
// console.log(st.toLowerCase());

//trim is remove unwanted space
// const newSt = st.trim();
// console.log(newSt);
// console.log(newSt.length);

//padStart and padEnd are filling needed word
// const coupon = "A4";
// console.log(coupon.padStart(8, "X"));
// console.log(coupon.padEnd(8, "0"));

//split() is creating an array and ("") is splitting each word and (" ") is slitting and grouping of text
// console.log(st.split(" "));

//Number - native code
// console.dir(Number);
// console.dir(Number.MAX_SAFE_INTEGER);
// console.dir(Number.MAX_VALUE);
// console.dir(Number.MIN_SAFE_INTEGER);
// console.dir(Number.MIN_VALUE);

// console.log(undefined / 2);
// console.log(Number.isNaN(undefined / 2));
// console.log(Number.isNaN(5 / 2));

// console.log(Number.isFinite(5 / 0));
// console.log(Number.isFinite(5 / 2));

// console.log(Number.isInteger(12.43));

// console.log(Number.parseFloat(12.23));
// console.log(Number.parseInt(12.23)); //change float to int
// console.log(Number.parseInt(12kyat)); //change string to int
// console.log(Number.parseInt($12)); //NaN because string is start

// const num = new Number(45000.671242);
// console.log(num);
// console.log(num.toFixed());
// console.log(num.toFixed(1));
// console.log(num.toFixed(2));
// console.log(num.toExponential());

//Math - native code (only have static)
// console.log(Math);

// const circleArea = function () {
//   return Math.PI * r ** 2;
// };

// console.log(Math.log()); //sin cos tan...

// console.log(Math.floor(5.97)); //take less number
// console.log(Math.ceil(5.97));  //take more number

// console.log(Math.random());
// console.log((Math.random() * 100).toFixed()); //randomly number during 100 with int
// console.log((Math.random() * 1000).toFixed()); //randomly number during 1000 with int

// console.log(Math.sqrt(16)); //square root
// console.log(Math.pow(2, 8)); //2 power 8

// console.log(Math.min(1,5,-3,0,124)); // find min number
// console.log(Math.max(1,5,-3,0,124)); // find max number

// console.log(Math.round(45.6344)); // return nearest int and same with toFixed

// console.log(eval("1 + 5")); // calculating string

//push(),unshift(),pop(),shift()
// const fruits = [
//   "apple",
//   "orange",
//   "grape",
//   "banana",
//   "papaya",
//   "watermelon",
//   "peach",
//   "kiwi",
// ];
// console.log(fruits);

// console.log(fruits.pop()); //data remove in last room
// console.log(fruits.shift()); //data remove in first room
// console.log(fruits);

// fruits.push("cucumber"); //data add in last room
// fruits.unshift("coconut"); //data add in first room
// console.log(fruits);

// const num = [1, 3, 5, 4, 7, 9, 2, 8, 6];
// console.log(num);
// num.sort(); //sort ascending
// console.log(num);
// num.reverse(); //sort descending
// console.log(num);

// const vegs = ["cauliflower", "eggplant", "rosemary", "greenpeper"];
// const chars = ["a", "f", "k", "d", "s"];
// const kanes = [1, 2, 45, 6, 83, 2];

// const results = [...chars, ...kanes, ...vegs];
// // const results = chars.concat(kanes).concat(vegs).concat(kanes);
// console.log(results);
//concat(something) and spread operator[...] are collecting array data in one array

// const sumAll = function (...all) {
//   console.log(all);
//   let total = 0;
//   for (x of all) {
//     total += x;
//   }
//   return total;
// };
// console.log(sumAll(...kanes));

// note- ...all is rest parameter and ...kanes is spread operator (copy array)

//Higher Order Function(HOF) function is accepting -> call back function -> in his own function-> like argument
// const modifyArr = function (arr, logic) {
//   let result = [];
//   for (el of arr) {
//     result.push(logic(el));
//   }
//   return result;
// };
// console.log(kanes);
// console.log(
//   modifyArr(kanes, function (el) {
//     return el * 10;
//   })
// );

//forEach() loop
// kanes.forEach(function(el){
//     console.log(el);
// });

//map() is like higher order function return from [] to [data]
// const output = kanes.map(function (el) {
//   return el *2;
// });
// console.log(output);

//filter() return from [data] to [filter data condition] -> output array[]
//find() return from [data] to [find one data only] -> output object{}

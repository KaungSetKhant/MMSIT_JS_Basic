// //classes
// const obj = {
//   a: "aa",
//   b: "bb",
//   y(){
//     return "y";
//   }
// };
// console.log(obj);

// class Test {
//   //properties or fields
//   a = "aa";
//   b = "bb";
//   #d = "ddd"; //private property
//   //methods
//   x() {
//     return "x method";
//   }

//   y() {
//     console.log(this);
//     return "method y";
//   }

//   z() {
//     console.log(this.#d);
//     return "z method";
//   }

//   //static method or fields are not need to build object instance and use direct with class name
//   static w() {
//     return "static method w";
//   }

//   constructor() {
//     this.c = "ccc";
//   }
// }

// // instance object
// const test = new Test();
// console.log(test);
// console.log(test.a); //access property
// console.log(test.x());
// console.log(test.y());
// console.log(test.z());

// console.log(Test.w());

//class with constructor

// class Student {
//   x() {
//     console.log("x method");
//   }
//   y() {
//     console.log("y method");
//   }
//   //after build object instance, constructor is first run
//   constructor(inputName, inputAge, inputGender, inputMajor) {
//     this.name = inputName;
//     this.age = inputAge;
//     this.gender = inputGender;
//     this.major = inputMajor;
//   }
//   birthYear() {
//     return 2024 - this.age;
//   }
// }

// // //object instance with initialization
// const st = new Student("KSK", 23, "Male", "SWD");
// console.log(st);
// console.log(st.birthYear());
// st.x();
// st.y();

// const st2 = new Student("TokeGyi", 24, "Male", "PHP");
// console.log(st2);
// console.log(st2.birthYear());

//access modifier(public,protected,private)

//class extends or inheritance
// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//   }
// }

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender); //super() use for parent class constructor
//     this.major = major;
//   }
// }

// const stu = new Student("KyawGyi", 24, "Male","JS");
// console.log(stu);

// class Person {
//   constructor(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
//     this.prefix = this.gender === "male" ? "Mr." : "Ms.";
//   }
//   intro() {
//     return `I'm ${this.prefix} ${this.name} and I'm ${this.age} years old.`;
//   }
// }
// const p1 = new Person("Tokegyi", 23, "male");
// console.log(p1);
// console.log(p1.intro());

// class Student extends Person {
//   constructor(name, age, gender, major) {
//     super(name, age, gender);
//     this.major = major;
//   }
// }
// const st1 = new Student("HlaHla", 23, "female", "Science");
// console.log(st1);
// console.log(st1.intro());

// class Monitor extends Student {
//   constructor(name, age, gender, major, room) {
//     super(name, age, gender, major);
//     this.room = room;
//   }
// }
// const m1 = new Monitor("MC", 24, "male", "Science", "Class A");
// console.log(m1);
// console.log(m1.intro());

// Encapsulation
// class BankAccount {
//   #balance = 0;
//   #record = [];
//   #recordIndex = 0;
//   constructor(inputNumber, inputName) {
//     this.number = inputNumber;
//     this.name = inputName;
//   }
//   history(){
//     return this.#record;
//   }
//   //getter
//   checkBalance() {
//     return this.#balance;
//   }
//   //setter
//   deposit(amount) {
//     this.#balance += amount;
//     this.#record[this.#recordIndex++] = "Deposit " + amount;
//     return "Deposit " + amount;
//   }
//   withdraw(amount) {
//     if (amount <= this.#balance) {
//       this.#balance -= amount;
//       this.#record[this.#recordIndex++] = "Withdraw " + amount;

//       return "Withdraw " + amount;
//     }
//     this.#record[this.#recordIndex] = "Not enough balance";
//     return "Not enough balance";
//   }
// }
// const ba = new BankAccount(1243537, "KSK");
// console.log(ba);
// console.log(ba.checkBalance());
// console.log(ba.deposit(50000));
// console.log(ba);
// console.log(ba.withdraw(10000));
// console.log(ba);
// console.log(ba.withdraw(70000));
// console.log(ba);
// console.table(ba.history());
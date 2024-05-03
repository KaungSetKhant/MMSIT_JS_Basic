const app = document.querySelector("#app");

const heading = document.createElement("h1");
heading.innerText = "Min Ga Lar Par";
heading.classList.add("heading");
heading.id = "myHeading";
heading.title = "myHeading";
heading.setAttribute("data-id", 3);

const lists = document.createElement("ul");
// const list1 = document.createElement("li");
// list1.innerText = "Apple";

// const list2 = document.createElement("li");
// list2.innerText = "Orange";

// const list3 = document.createElement("li");
// list3.innerText = "Mango";

// const list4 = document.createElement("li");
// list4.innerText = "Lemon";

// lists.append(list1);
// lists.append(list2);
// lists.append(list3);
// lists.append(list4);

const createList = (text) => {
  const list = document.createElement("li");
  list.innerText = text;
  return list;
};

const input = document.createElement("input");
input.type = "text";
input.placeholder = "Say something";

const btn = document.createElement("button");
btn.innerText = "Read More";

btn.onclick = () => {
  //   const list = document.createElement("li");
  //   list.innerText = input.value;

  //   lists.append(list);
  lists.prepend(createList(input.value));
  input.value = "";
};

const select = document.createElement("select");

const option1 = new Option("Myanmar", "MM");
const option2 = new Option("English", "ENG");

select.append(option1);
select.append(option2);

// // app.append(heading);
// app.append(lists);
// // app.append(input);
// // app.append(btn);
// lists.before(heading);
// lists.after(input);
// input.after(btn);

app.append(heading);
// app.append(lists);
// app.append(input);
// app.append(btn);
// app.append(select);

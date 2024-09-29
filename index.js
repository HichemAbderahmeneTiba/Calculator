const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const btn = document.querySelectorAll(".btn");
const write = document.querySelector(".operating textarea");

let content = "";
let symbol = "";

const clear = function () {
  content = "";
  write.value = content;
};

const deleteLastCharactere = function () {
  content = write.value;
  content = content.slice(0, -1);
  write.value = content;
};

ac.addEventListener("click", clear);

del.addEventListener("click", deleteLastCharactere);

btn.forEach((button) => {
  button.addEventListener("click", function () {
    Symbol = button.textContent;
    content += symbol;
    write.value = content;
  });
});

console.log(btn);

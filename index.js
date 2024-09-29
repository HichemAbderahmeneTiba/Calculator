const ac = document.querySelector(".ac");
const del = document.querySelector(".del");
const btn = document.querySelectorAll(".btn");
const write = document.querySelector(".operating textarea");
const equal = document.querySelector(".equal");

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

function clac() {
  if ((write.value = eval(write.value))) {
    write.value = eval(write.value);
    content = write.value;
  } else {
    write.value = "Error";
  }
}

ac.addEventListener("click", clear);

del.addEventListener("click", deleteLastCharactere);

equal.addEventListener("click", clac);

btn.forEach((button) => {
  button.addEventListener("click", function () {
    symbol = button.textContent;
    content += symbol;
    write.value = content;
  });
});

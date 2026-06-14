let start = document.querySelector(".start");
let NameButton = document.querySelector(".inputButton");
let one = document.querySelector(".one");
let name = document.querySelector(".nameH2");
let input = document.querySelector("#inputStart");
let intern = document.querySelector(".intern");
let two = document.querySelector(".two");
let pickPerson2 = document.querySelector(".pickPerson2");
let fired2 = document.querySelector(".fired2");
let keep2 = document.querySelector(".keep2");
let pickPerson1 = document.querySelector(".pickPerson1");
let fired = document.querySelector(".fired");
let keep = document.querySelector(".keep");

one.style.display = "none";
intern.style.display = "none";
two.style.display = "none";
pickPerson2.style.display = "none";
fired2.style.display = "none";
keep2.style.display = "none";
pickPerson1.style.display = "none";
fired.style.display = "none";
keep.style.display = "none";

let oneChoice = document.querySelector(".oneChoice1");
let person1 = document.querySelector(".person1");
let person2 = document.querySelector(".person2");

person1Pick1 = document.querySelector(".person1Pick1");
person1Pick2 = document.querySelector(".person1Pick2");
person2Pick1 = document.querySelector(".person2Pick1");
person2Pick2 = document.querySelector(".person2Pick2");

let twoChoice = document.querySelector(".oneChoice2");
let retry = document.querySelector(".retry");
let retry1 = document.querySelector(".retry1");
let retry2 = document.querySelector(".retry2");

name.innerHTML = "[Name]";

NameButton.addEventListener("click", function () {
  start.style.display = "none";
  name.innerHTML = input.value;
  one.style.display = "block";
});

oneChoice.addEventListener("click", function () {
  one.style.display = "none";
  two.style.display = "block";
});

person1.addEventListener("click", function () {
  two.style.display = "none";
  pickPerson1.style.display = "block";
});
person1Pick1.addEventListener("click", function () {
  keep.style.display = "block";
  pickPerson1.style.display = "none";
});
person1Pick2.addEventListener("click", function () {
  pickPerson1.style.display = "none";
  fired.style.display = "block";
});
retry1.addEventListener("click", function () {
  location.reload();
});

person2.addEventListener("click", function () {
  two.style.display = "none";
  pickPerson2.style.display = "block";
});
person2Pick1.addEventListener("click", function () {
  pickPerson2.style.display = "none";
  person2.style.display = "none";
  keep2.style.display = "block";
});
retry2.addEventListener("click", function () {
  location.reload();
});
person2Pick2.addEventListener("click", function () {
  pickPerson2.style.display = "none";
  person2.style.display = "none";
  fired2.style.display = "block";
});

twoChoice.addEventListener("click", function () {
  one.style.display = "none";
  intern.style.display = "block";
});
retry.addEventListener("click", function () {
  location.reload();
});

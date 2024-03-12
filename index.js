const myLabel = document.getElementById("myLabel");
const myInput = document.getElementById("myInput");
const myBtn = document.getElementById("myBtn");
const resultAge = document.getElementById("resultAge");
let age = 0;

myBtn.onclick = function () {
  age = myInput.value;
  age = Number(age);
  if (age >= 100) {
    myLabel.textContent =
      "Where you found the fountain of youth? Don't worry I wont tell Google";
  } else if (age >= 70) {
    myLabel.textContent = "You're too old for this site. . .";
  } else if (age <= 0) {
    myLabel.textContent = ". . .I don't think you exist, or do you???";
  } else if (age == 1 || age <= 4) {
    myLabel.textContent = ". . .how are you typing . . .?";
  } else if (age >= 18) {
    myLabel.textContent = "You are old enough to be in this site!";
  } else if (age <= 18) {
    myLabel.textContent = "You're too young for this site.";
  } else {
    myLabel.textContent = "Don't want to tell me your age. . .? I understand";
  }
};

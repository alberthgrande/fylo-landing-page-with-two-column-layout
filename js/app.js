const emailInput1 = document.getElementById("email-input1");
const emailInput2 = document.getElementById("email-input2");
const errorMessage1 = document.getElementById("error-message1");
const errorMessage2 = document.getElementById("error-message2");
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function submitBtn() {
  if (emailInput1.value.match(mailformat)) {
    emailInput1.style.borderColor = "hsl(170, 45%, 43%)";
    emailInput1.style.borderWidth = "2px";
    errorMessage1.style.display = "none";
  } else {
    emailInput1.style.borderColor = "red";
    errorMessage1.innerText = "Please check you email";
    errorMessage1.style.color = "red";
    errorMessage1.style.display = "block";
  }

  if (emailInput2.value.match(mailformat)) {
    emailInput2.style.borderColor = "hsl(170, 45%, 43%)";
    emailInput2.style.borderWidth = "2px";
    errorMessage2.style.display = "none";
  } else {
    emailInput2.style.borderColor = "red";
    errorMessage2.innerText = "Please check you email";
    errorMessage2.style.color = "red";
    errorMessage2.style.textAlign = "left";
    errorMessage2.style.color = "hsl(240, 75%, 98%)";
    errorMessage2.style.display = "block";
  }
}

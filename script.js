//Assignment Code
const result = document.querySelector("#password");
const passLength = document.querySelector("#length");
const passLengthResult = document.querySelector("#length-result");
const includeUpperChars = document.querySelector("#upperchars");
const includeLowerChars = document.querySelector("#lowerchars");
const includeNumericChars = document.querySelector("#numericchars");
const includeSpecialChars = document.querySelector("#specialchars");
const generateBtn = document.querySelector("#generate");
const criteriaDiv = document.querySelector("#card-prompt");
// Set default password length 8 max on load
document.addEventListener("DOMContentLoaded", () => {
  passLength.value = 8;
  passLengthResult.innerText = 8;
  /*let onLoadLength = passLength.value;
  let onLoadUpper = includeUpperChars.checked;
  let onLoadLower = includeLowerChars.checked;
  let onLoadNumbers = includeNumericChars.checked;
  let onLoadSymbols = includeSpecialChars.checked;
  
result.value = generatePassword(onLoadUpper, onLoadLower, onLoadNumbers, onLoadSymbols, onLoadLength);*/
});
// Listen for password range change
passLength.addEventListener("change", (event) => {
  passLengthResult.innerText = event.target.value;
});
generateBtn.addEventListener("click", () => {
  //Criteria Prompt on button Click.
  if (criteriaDiv.style.display === "block") {
    criteriaDiv.style.display = "none";
  } else {
    criteriaDiv.style.display = "block";
  }

  const length = passLength.value;
  const upper = includeUpperChars.checked;
  const lower = includeLowerChars.checked;
  const numbers = includeNumericChars.checked;
  const symbols = includeSpecialChars.checked;
  result.value = generatePassword(upper, lower, numbers, symbols, length);
});
//iterate over a loop  based on the password length selected, and use our randomly generated characters
function generatePassword(upper, lower, number, symbol, length) {
  let generatedPassword = "";
  for (let i = 0; i < length; i++) {
    if (upper) {
      generatedPassword += getRandomUpper();
    }
    if (lower) {
      generatedPassword += getRandomLower();
    }
    if (number) {
      generatedPassword += getRandomNumber();
    }
    if (symbol) {
      generatedPassword += getRandomSymbol();
    }
    generatedPassword;
  }
  const finalPassword = generatedPassword.slice(0, length);
  return finalPassword;
}
//  set functions to be called that will return randomized values based on different criteria
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97).toUpperCase();
}
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
function getRandomSymbol() {
  const symbols = "!@#$%^&*(){}[]=<>/,.";
  return symbols[Math.floor(Math.random() * symbols.length)];
}

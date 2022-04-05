let passwordBox1 = document.getElementById("emptybutton1");
let passwordBox2 = document.getElementById("emptybutton2");
let passwordBox3 = document.getElementById("emptybutton3");
let passwordBox4 = document.getElementById("emptybutton4");

// genRandomNumbers = function getRandomNumbers() {
//   const array = new Uint32Array(1);
//   crypto.getRandomValues(array);

//   const randText = document.getElementById("emptybutton1");

//   for (let i = 0; i < array.length; i++) {
//     randText.textContent += array[i] + " ";
//   }
// };

// genRandomNumbers2 = function getRandomNumbers() {
//   const array = new Uint32Array(1);
//   crypto.getRandomValues(array);

//   const randText = document.getElementById("emptybutton2");

//   for (let i = 0; i < array.length; i++) {
//     randText.textContent += array[i] + " ";
//   }
// };

// genRandomNumbers3 = function getRandomNumbers() {
//   const array = new Uint32Array(1);
//   crypto.getRandomValues(array);

//   const randText = document.getElementById("emptybutton3");

//   for (let i = 0; i < array.length; i++) {
//     randText.textContent += array[i] + " ";
//   }
// };

// Define password length and chars + password 1 - 4 variables

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pwordLength = 12;
let password = "";
let password2 = "";
let password3 = "";
let password4 = "";

// Generate random numbers and paste into html

genRandomNumbers1 = function getRandomNumbers() {
  const array = new Uint32Array(chars.length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < pwordLength; i++) {
    password += chars[array[i] % chars.length];
    passwordBox1.textContent = password;
  }
};

genRandomNumbers2 = function getRandomNumbers() {
  const array = new Uint32Array(chars.length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < pwordLength; i++) {
    password2 += chars[array[i] % chars.length];
    passwordBox2.textContent = password2;
  }
};

genRandomNumbers3 = function getRandomNumbers() {
  const array = new Uint32Array(chars.length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < pwordLength; i++) {
    password3 += chars[array[i] % chars.length];
    passwordBox3.textContent = password3;
  }
};

genRandomNumbers4 = function getRandomNumbers() {
  const array = new Uint32Array(chars.length);
  window.crypto.getRandomValues(array);

  for (let i = 0; i < pwordLength; i++) {
    password4 += chars[array[i] % chars.length];
    passwordBox4.textContent = password4;
  }
};

// Run all 4 randomnumbers Functions

function randomnumberTimes4() {
  genRandomNumbers1();
  genRandomNumbers2();
  genRandomNumbers3();
  genRandomNumbers4();
}

// Start copy buttons 1 - 4

function CopyToClipboard(emptybutton1) {
  let r = document.createRange();
  r.selectNode(document.getElementById(emptybutton1));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  // remove options to copy
  window.getSelection().removeAllRanges();
}

function CopyToClipboard(emptybutton2) {
  let r = document.createRange();
  r.selectNode(document.getElementById(emptybutton2));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  // remove options to copy
  window.getSelection().removeAllRanges();
}

function CopyToClipboard(emptybutton3) {
  let r = document.createRange();
  r.selectNode(document.getElementById(emptybutton3));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  // remove options to copy
  window.getSelection().removeAllRanges();
}

function CopyToClipboard(emptybutton4) {
  let r = document.createRange();
  r.selectNode(document.getElementById(emptybutton4));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  // remove options to copy
  window.getSelection().removeAllRanges();
}

// let passArray = [1, 2, 3, 4, 5, 6, 7, "a", "b", "x", "X", "?"];

// function getArray() {
//   let rndIndx = Math.floor(Math.random() * passArray.length);
//   return textcontent.passwordBox1.passArray[rndIndx];
// }

// passwordBox1.textContent = getArray();

// console.log(getArray());

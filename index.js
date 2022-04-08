let passwordBox1 = document.getElementById("emptybutton1");
let passwordBox2 = document.getElementById("emptybutton2");
let passwordBox3 = document.getElementById("emptybutton3");
let passwordBox4 = document.getElementById("emptybutton4");
let generateBtn = document.getElementById("generatebutton");

let chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let pwordLength = 12;

// Generate random numbers and paste into html

function getRandomNumbers() {
  const array = new Uint32Array(chars.length); // set up a 32bit unsigned array
  window.crypto.getRandomValues(array);
  let password = "";
  for (let i = 0; i < pwordLength; i++) {
    password += chars[array[i] % chars.length];
  }
  return password;
}

function randomnumberTimes4() {
  passwordBox1.textContent = getRandomNumbers();
  passwordBox2.textContent = getRandomNumbers();
  passwordBox3.textContent = getRandomNumbers();
  passwordBox4.textContent = getRandomNumbers();
}

generateBtn.addEventListener("click", function () {
  randomnumberTimes4();
});

function CopyToClipboard(emptybutton$) {
  let r = document.createRange();
  r.selectNode(document.getElementById(emptybutton$));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges(); // remove options to copy
}

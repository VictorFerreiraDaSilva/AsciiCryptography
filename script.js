'use strict';

function encrypt() {
  let text = document.getElementById('textEncrypt').value;

  let asciiValues = [];
  let charValues = [];
  let encrypted = '';

  for (let i = 0; i < text.length; i++) {
    asciiValues.push(('00' + text[i].charCodeAt(0)).slice(-3));
    encrypted += asciiValues[i];
    charValues.push(String.fromCharCode(asciiValues[i]));
  }

  console.log(asciiValues);
  console.log(charValues);
  document.getElementById('encrypted').value = encrypted;
}

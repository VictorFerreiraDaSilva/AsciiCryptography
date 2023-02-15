'use strict';

function encrypt() {
  let text = document.getElementById('textEncrypt').value;
  let encrypted = '';

  for (let i = 0; i < text.length; i++) {
    encrypted += ('00' + text[i].charCodeAt(0)).slice(-3);
  }
  document.getElementById('encrypted').value = encrypted;
}

function decrypt() {
  let text = document.getElementById('textDecrypt').value;
  let decrypted = '';
  let splited = text.match(/.{1,3}/g) ?? [];

  for (let i = 0; i < splited.length; i++) {
    decrypted += String.fromCharCode(splited[i]);
  }

  document.getElementById('decrypted').value = decrypted;
}

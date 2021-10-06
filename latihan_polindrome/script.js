function cekPolindrome(number) {
  let stringAngka = number.toString();
  let cek = true;
  for (let i = 0; i < stringAngka.length; i++) {
    if (stringAngka[i] != stringAngka[stringAngka.length - 1 - i]) cek = false;
    return cek;
  }
}

function nearestPolindrome(number) {
  while (cekPolindrome(number) == false) {
    number++;
  }
  return number;
}

console.log(nearestPolindrome(148));
console.log(nearestPolindrome(100));
console.log(nearestPolindrome(1742));

function isNumberKey(evt) {
  let charCode = evt.which ? evt.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  return true;
}

let userInput = document.querySelector("userNumber").val();
var inputVal = "";
if (userInput) {
  inputVal = userInput.value;
}
let hasil = nearestPolindrome(2365236);
console.log(hasil);
// document.querySelector("hasil").value = hasil;

const search = document.querySelector("search");
function output() {
  alert(hasil);
}

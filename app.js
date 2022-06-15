let phoneNumber = "09150004036";
let last4Digits = phoneNumber.slice(-2);
let first4Digits = phoneNumber.slice(0, 4);
let paddingStarted = last4Digits.padStart(7, "*");

let finalNumber = first4Digits + paddingStarted;

alert(finalNumber);

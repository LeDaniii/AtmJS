"use strict";

// ---------- Atm Input ----------

let input = 880;

// ---------- Storage banknotes + stop switch ----------

let hundretNote = 200;
let fiftyNote = 200;
let twentyNote = 2;
let tenNote = 200;
let stop = true;

// ---------- Do We Have Enough Banknotes? ----------

let availableAmount =
  hundretNote * 100 + fiftyNote * 50 + twentyNote * 20 + tenNote * 10;
console.log(availableAmount);

if (input > availableAmount) {
  stop = false;
  console.log("Please refil");
  console.log("We don't have enough money for you We are sincerely Sorry");
  console.log("Out of Service");
}
if (hundretNote < 10) {
  hundretNote = false;
  console.log("please refill");
  console.log("We are short on 100€ notes, are 50€ notes also ok?");
}
if (fiftyNote < 10) {
  fiftyNote = false;
  console.log("please refill");
  console.log("We are short on 50€ notes, are 20€ notes also ok?");
}
if (twentyNote < 10) {
  twentyNote = false;
  console.log("please refill");
  console.log("We are short on 20€ notes, are 10€ notes also ok?");
}
if (tenNote < 10) {
  tenNote = false;
  console.log("please refill");
  console.log("We are short on 10€ notes, pls take an other amount!");
}
// ---------- Withdraw notes -----------

while (input != 0) {
  if (stop == false) {
    break;
  } else if (input > 100 && hundretNote) {
    let hundret = input / 100;
    let roundHundret = Math.floor(hundret);
    input = input % 100;
    console.log("you get " + roundHundret + " hundret euro notes");
  } else if (input >= 50 && fiftyNote) {
    let fifty = input / 50;
    let roundFifty = Math.floor(fifty);
    input = input % 50;
    console.log("you get " + roundFifty + " fifty euro notes");
  } else if (input >= 20 && twentyNote) {
    let twenty = input / 20;
    let roundTwenty = Math.floor(twenty);
    input = input % 20;
    console.log("you get " + roundTwenty + " twenty euro notes");
  } else if (input >= 10 && tenNote) {
    let ten = input / 10;
    let roundTen = Math.floor(ten);
    input = input % 10;
    console.log("you get " + roundTen + " ten euro notes");
  }
}

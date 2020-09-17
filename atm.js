"use strict";

// ---------- ATM Input ----------

let input = 880;

// ---------- Storage Banknotes + Stop Switch ----------

let hundretNote = 15;
let fiftyNote = 2;
let twentyNote = 2;
let tenNote = 2;
let stop = true;

// ---------- Do We Have Enough Banknotes? ----------

let availableAmount =
  hundretNote * 100 + fiftyNote * 50 + twentyNote * 20 + tenNote * 10;

if (input > availableAmount) {
  stop = false;
  console.log("Please refill");
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
  console.log("We are short on 10€ notes, pls take another amount!");
}

// ---------- FAIL SECTION ----------
// ---------- Round Counter For Amount Calculation If There Is Something Left ---> Prompt: Use This Amount ----------

// Counter 100
// let h = 0;
// Counter 50
// let f = 0;
// Counter 20
// let tw = 0;
// Counter 10
// let te = 0;

// ---------- Safe Input for Calculation If There Is Something Left ---> Prompt: We Can Provide You This Amount ----------
let inputSafe = input;
// ---------- Withdraw Notes -----------

while (input != 0) {
  if (stop == false) {
    break;
  } else if (input > 100 && hundretNote) {
    let hundret = input / 100;
    let roundHundret = Math.floor(hundret);
    hundretNote = hundretNote - roundHundret;
    input = input % 100;
    console.log("you get " + roundHundret + " hundret euro notes");
  } else if (input >= 50 && fiftyNote) {
    let fifty = input / 50;
    let roundFifty = Math.floor(fifty);
    fiftyNote = fiftyNote - roundFifty;
    input = input % 50;
    console.log("you get " + roundFifty + " fifty euro notes");
  } else if (input >= 20 && twentyNote) {
    let twenty = input / 20;
    let roundTwenty = Math.floor(twenty);
    twentyNote = twentyNote - roundTwenty;
    input = input % 20;
    console.log("you get " + roundTwenty + " twenty euro notes");
  } else if (input >= 10 && tenNote) {
    let ten = input / 10;
    let roundTen = Math.floor(ten);
    tenNote = tenNote - roundTen;
    input = input % 10;
    console.log("you get " + roundTen + " ten euro notes");
  } else {
    console.log("We can provide you with " + (inputSafe - input) + "€");
    break;
  }
}
// ---------- How Many Notes Are Left ----------

console.log(
  "hundretNote = " +
    hundretNote +
    "///fiftyNote = " +
    fiftyNote +
    "///twentyNote = " +
    twentyNote +
    "///tenNote" +
    tenNote
);

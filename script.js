let age = 25;
document.write("Hi my name is Martin " + "and i am " + age + " years old");

let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log("the most valuable player is " + players[2]);

let cars = ["Tesla", "Audi", "Renault", "Volvo", "Mazda", "Fiat", "Ferrari"];
cars.sort();
console.log(cars);

let fruits = ["apple", "banana", "kiwi"];
fruits.push("orange");
console.log(fruits);
fruits.pop();
console.log(fruits);

let output = fruits.join(" \n ");
console.log(output);

let output2 = new Array();
output2 = output.split(" \n ");
console.log(output2);

let animals = ["monkey", "horse", "dog"];
animals.sort;
animals.unshift("cat");
console.log(animals);

let fruits2 = "mango, cherries, kiwi, grapes, pear, peach, orange, lemon";

let fruitbowl = new Array();
fruitbowl = fruits2.split(", ");
console.log(fruitbowl);
document.write(fruitbowl.join("<br>"));

let a = 7;
let b = 14;
let c = "21";
let d = "31";
let e = 42;

let ergebnis = a + b + parseInt(c) + parseInt(d) + e;
console.log(ergebnis);

let f = "1";
let g = 15;
let h = 8;
let i = "1";

let mulitply = parseInt(f) * 15 * 8 * parseInt(1);
console.log(mulitply);

document.write("<br>");
document.write(ergebnis / mulitply);

let multiarray = [
  ["1", "2", "1", "24"],
  ["8", "11", "9", "4"],
  ["7", "0", "7", "27"],
  ["7", "4", "28", "14"],
  ["3", "10", "25", "7"],
  ["21", "4", "6", "17"],
  ["3", "5", "26", "3"],
];

console.log(multiarray[1][1]);
console.log(multiarray[4][2]);
console.log(multiarray[2][1]);
console.log(multiarray[5][3]);
console.log(multiarray[2][3]);

// let viennaArray = [
//   ["Vienna", "\t", "\t", "\t", "\t"],
//   ["\t", "is", " ", " ", " "],
//   ["\t", "\t", "a", "27", "0"],
//   ["\t", "\t", "\t", "nice"],
//   ["\t", "\t", "\t", "\t", "city"],
// ];
// document.write("<br>");
// document.write("<br>" + viennaArray[0][0]);
// document.write("<br>" + viennaArray[0][1] + viennaArray[1][1]);
// document.write("<br>" + viennaArray[2][2]);
// document.write("<br>" + viennaArray[3][3]);
// document.write("<br>" + viennaArray[4][4]);

// console.log(viennaArray);

let text =
  "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its $HTML$tag.$A$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$ callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties $flow$down;$actions$flow$up";

let space = text.replaceAll("$", " ");
console.log(space);
document.write(space);

let extraText = "Hey there, i am a javascript developer, and i live in vienna";

let subText = extraText.substring(11, 38);
console.log(subText);

let fruitbasked = ["apple", "banana", "kiwi"];
fruitbasked.splice(2, 0, "orange", "strawberry");
console.log(fruitbasked);

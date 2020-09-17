let input = 880;

while (input != 0) {
  if (input > 100) {
    let hundret = input / 100;
    roundHundret = Math.floor(hundret);
    input = input % 100;
    console.log("you get " + roundHundret + " hundret euro notes");
  } else if (input >= 50) {
    let fifty = input / 50;
    roundFifty = Math.floor(fifty);
    input = input % 50;
    console.log("you get " + roundFifty + " fifty euro notes");
  } else if (input >= 20) {
    let twenty = input / 20;
    roundTwenty = Math.floor(twenty);
    input = input % 20;
    console.log("you get " + roundTwenty + " twenty euro notes");
  } else if (input >= 10) {
    let ten = input / 10;
    roundTen = Math.floor(ten);
    input = input - roundTen * 10;
    console.log("you get " + roundTen + " ten euro notes");
  }
}

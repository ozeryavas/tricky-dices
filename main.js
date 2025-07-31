let dice1 = Math.random();
let dice2 = Math.random();


if (dice1 < 1/6) {
  dice1 = 1;
} else if (dice1 > 1/6 && dice1 < 2/6) {
  dice1 = 2;
} else if (dice1 > 2/6 && dice1 < 3/6) {
  dice1 = 3;
} else if (dice1 > 3/6 && dice1 < 4/6) {
  dice1 = 4;
} else if (dice1 > 4/6 && dice1 < 5/6) {
  dice1 = 5;
} else if (dice1 > 5/6) {
  dice1 = 6;
}

if (dice2 < 1/6) {
  dice2 = 1;
} else if (dice2 > 1/6 && dice2 < 2/6) {
  dice2 = 2;
} else if (dice2 > 2/6 && dice2 < 3/6) {
  dice2 = 3;
} else if (dice2 > 3/6 && dice2 < 4/6) {
  dice2 = 4;
} else if (dice2 > 4/6 && dice2 < 5/6) {
  dice2 = 5;
} else if (dice2 > 5/6) {
  dice2 = 6;
}

document.getElementById("dice1-img").src = "images/dice" + dice1 + ".png";
document.getElementById("dice2-img").src = "images/dice" + dice2 + ".png";

document.getElementById("total-result").textContent = dice1 + dice2;

if (dice1 == dice2  && dice1 == 1) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 2;
} else if (dice1 == dice2  && dice1 == 2) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 3;
} else if (dice1 == dice2  && dice1 == 3) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 4;
} else if (dice1 == dice2  && dice1 == 4) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 5;
} else if (dice1 == dice2  && dice1 == 5) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 6;
} else if (dice1 == dice2  && dice1 == 6) {
  document.getElementById("total-result").textContent = (dice1 + dice2) * 7;
}


/* 
When the sections with the following comment line are activated, the dice start to work in a rigged manner. 
*/


/*

if (dice1 < 3/6) {
  dice1 = 1;
} else if (dice1 > 3/6 && dice1 < 5/6) {
  dice1 = 2;
} else if (dice1 > 5/6 && dice1 < 5.7/6) {
  dice1 = 3;
} else if (dice1 > 5.7/6 && dice1 < 5.8/6) {
  dice1 = 4;
} else if (dice1 > 5.8/6 && dice1 < 5.9/6) {
  dice1 = 5;
} else if (dice1 > 5.9/6) {
  dice1 = 6;
}

if (dice2 < 1/6) {
  dice2 = 1;
} else if (dice2 > 1/6 && dice2 < 2/6) {
  dice2 = 2;
} else if (dice2 > 2/6 && dice2 < 3/6) {
  dice2 = 3;
} else if (dice2 > 3/6 && dice2 < 4/6) {
  dice2 = 4;
} else if (dice2 > 4/6 && dice2 < 5/6) {
  dice2 = 5;
} else if (dice2 > 5/6) {
  dice2 = 6;
}
*/

/*
if (dice1 < 0.05/6) {
  dice1 = 1;
} else if (dice1 > 0.05/6 && dice1 < 2/6) {
  dice1 = 2;
} else if (dice1 > 2/6 && dice1 < 2.05/6) {
  dice1 = 3;
} else if (dice1 > 2.05/6 && dice1 < 4/6) {
  dice1 = 4;
} else if (dice1 > 4/6 && dice1 < 4.05/6) {
  dice1 = 5;
} else if (dice1 > 4.05/6) {
  dice1 = 6;
}

if (dice2 < 1.8/6) {
  dice2 = 1;
} else if (dice2 > 1.8/6 && dice2 < 2/6) {
  dice2 = 2;
} else if (dice2 > 2/6 && dice2 < 3.8/6) {
  dice2 = 3;
} else if (dice2 > 3.8/6 && dice2 < 4/6) {
  dice2 = 4;
} else if (dice2 > 4/6 && dice2 < 5.8/6) {
  dice2 = 5;
} else if (dice2 > 5.8/6) {
  dice2 = 6;
}
*/
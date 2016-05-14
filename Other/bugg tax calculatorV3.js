var taxrate1 = .20;
var taxrate2 = .25;
var taxrate3 = .30;
var income = true;

while (income == true) {
  income = prompt("What is your annual Income?");

  if (income > 0 && income <= 100000) {
    income = income * taxrate1;
  } else if (income > 100000 && income <= 1000000) {
    income = income * taxrate2;
  } else if (income > 1000000) {
    income = income * taxrate3;
  } else {
    alert("You entered an invalid value, here is what you put: " + income)
    location.reload();
  }
}

if (income > 0) {
  document.getElementById("div1").innerHTML = "Here is your annual tax " + "$" + income;
  if (income > 0 && income < 1000) {
    document.getElementById("div2").innerHTML = "Your taxes are under $1,000";
  } else if (income > 1000 && income < 10000) {
    document.getElementById("div2").innerHTML = "Your taxes are between $1,000 and $10,000";
  } else if (income > 10000) {
    document.getElementById("div2").innerHTML = "Your taxes are over $1,000 and $10,000";
  }
}
// cleaned up the else if statements and shifted around a few things to make the layout more readable.
var taxrate1 = .20;
var taxrate2 = .25;
var taxrate3 = .30;
var income = true;

while (income == true){
	income = prompt("What is your annual Income?");
	
		if (income > 0 && income <= 100000){
			income = (income * (taxrate1));

			
		} else if (income > 100000 && income <= 1000000){ 
				income = (income * (taxrate2));

				
			} else if (income > 1000000){
					income = (income * (taxrate3));
	
				} else {
					alert("you entered an invalid value, here is what you put: " + income)
					location.reload();
				}
}
	if (income > 0){
	alert("here is your total annual tax: " + income)
	}
// cleaned up the else if statements and shifted around a few things to make the layout more readable.
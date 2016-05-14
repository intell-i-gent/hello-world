var taxrate1 = .20;
var taxrate2 = .25;
var taxrate3 = .30;
var income = false;

while(income == false){
	income = prompt("What is your annual Income?");
	if (income <= 0){
		alert("please enter a valid income.");
	} else {
		if (income > 0 && income <= 100000){
			income = (income * (taxrate1));
			console.log(income);
			
		} else {
			if (income > 100000 && income <= 1000000){
				income = (income * (taxrate2));
				console.log(income);
				
			} else {
				if (income > 1000000){
					income = (income * (taxrate3));
					console.log(income);	
				}
			}
		}
	}
	if (income > 0){
	alert("here is your total annual tax." + income)
}else {
	alert("you entered an invalid value, here is what you put." + income)
}
}

/*issues I ran into: starting out I ran into many issues with the else statements not working or being attached to 
the wrong braces. I restarted serval time only to find out that i was not properly placing my else’s at the end 
of my if statements. I also tried to make a global result variable and then modify another variable to it locally. 
then when I called it globally to compare the values it came up undefined. initially thought the problem was in 
the math but after using the console log command I saw the math was working fine. this was because I only changed 
the variable locally and not globally. I decided to delete it as it was redundant and unnecessary. The other issue 
I ran into was with the comparisons statements this caused anything to be above a 0 to be considered true thus 
ignoring the other higher value. I fixed this by replacing all my OR’s with AND's and successfully completed 
the program in approximately two hours with no help from google. */ 
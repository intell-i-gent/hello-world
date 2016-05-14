var scoops = 2;

if (scoops >= 5) { 

	lowsup();
	
} else if (scoops > 3) {
	
	lowersup();
	
} else {
	
	outlowsup();
}

function lowsup(){
 document.write("<h1>your getting low on ice cream</h1>");
}

function lowersup (){
	document.write("<h2>your getting vary low on ice cream!</h2>")
}

function outlowsup () {
	document.write("<h3>you almost out of ice cream!</h3>")
}
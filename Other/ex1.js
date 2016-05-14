var price = 28.99;

var discount = 10;

var total = price - (price *(discount/100));

if (total > 25) {
	freeShipping();
} else {
	
	document.write(total + "<br>");
	document.write("sorry, your order does not qualify for free shipping.");
}

function freeShipping() {
	document.write(total + "<br>");

	document.write("congratulations, you qualify for free shiping!");
}
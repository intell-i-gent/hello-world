var count = 0;

while (count <= 10 ) {
	juggle();
	count = count + 1;
}
function juggle() {
	document.write("I'm juggling..." + count + "<br>" + "balls" + "<br>");
}
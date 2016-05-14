var fiat = {
	make: "Fiat",
	model: "500",
	year: 1957,
	color: "Medium Blue",
	passengers: 2,
	convertible: false,
	mileage: 88000,
	started: false,
	fuel: 0,
	start: function() {
		if (this.fuel == 0){
			alert("Hey! you need to add fuel first.");
		} else {
			this.started = true;
		}
	},
	stop: function() {
		this.started = false;
	}, 
	drive: function() {
		if (this.started) {
			if (this.fuel > 0){
				alert(this.make + " " + this.model + " goes Zoom zoom!");
				this.fuel = this.fuel - 1;
			} else {
				alert("Uh oh, out of fuel.");
				this.stop();
			}
		} else {
			alert("The car is on empty, fill up befoure starting!");
			
		}
	},
	addFuel: function(amount) {
		this.fuel = this.fuel + amount;
	}
};
fiat.start();
fiat.drive();
fiat.addFuel(2);
fiat.start();
fiat.drive();
fiat.drive();
fiat.drive();
fiat.stop();
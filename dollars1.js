function rentalCarCost(d) {
	// Your solution here
	var day = "";
	if (d >= 7) {
		return day = (d * 40) - 50;
	} else if (d >= 3) {
		return day = (d * 40) - 20;
	} else {
		return day = 40 * d;
	}
}
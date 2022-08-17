function repeatStr(n, s) {
	if (n > 0)
		return s.repeat(n);
	else { return ''; }
}
console.log(repeatStr(3, "Hello"));
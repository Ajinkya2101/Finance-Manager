function calculate() {
	var principal = parseFloat(document.getElementById("principal").value);
	var rate = parseFloat(document.getElementById("rate").value);
	var term = parseFloat(document.getElementById("term").value);
	var interest = (principal * rate * term) / 100;
	var maturity = principal + interest;
	document.getElementById("result").value = maturity.toFixed(2);
  }
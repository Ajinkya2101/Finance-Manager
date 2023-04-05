const interestForm = document.getElementById('interest-form');
const outputBody = document.getElementById('output-body');

interestForm.addEventListener('submit', function(e) {
	e.preventDefault();
	outputBody.innerHTML = '';

	const principal = Number(document.getElementById('principal').value);
	const rate = Number(document.getElementById('rate').value);
	const time = Number(document.getElementById('time').value);
	const type = document.getElementById('type').value;

	let interest, endingAmount;
	if (type === 'simple') {
		interest = principal * rate * time / 100;
		endingAmount = principal + interest;
		outputBody.innerHTML = `
			<tr>
				<td>1</td>
				<td>${principal.toFixed(2)}</td>
				<td>${interest.toFixed(2)}</td>
				<td>${endingAmount.toFixed(2)}</td>
			</tr>
			<tr>
				<td>Total</td>
				<td>${principal.toFixed(2)}</td>
				<td>${interest.toFixed(2)}</td>
				<td>${endingAmount.toFixed(2)}</td>
			</tr>
		`;
	} else {
		interest = 0;
		endingAmount = principal;
		for (let i = 1; i <= time; i++) {
			interest = endingAmount * rate / 100;
			endingAmount += interest;
			outputBody.innerHTML += `
				<tr>
					<td>${i}</td>
					<td>${(endingAmount - interest).toFixed(2)}</td>
					<td>${interest.toFixed(2)}</td>
					<td>${endingAmount.toFixed(2)}</td>
				</tr>
			`;
		}
		outputBody.innerHTML += `
			<tr>
				<td>Total</td>
				<td>${principal.toFixed(2)}</td>
				<td>${(endingAmount - principal).toFixed(2)}</td>
				<td>${endingAmount.toFixed(2)}</td>
			</tr>
		`;
	}
});

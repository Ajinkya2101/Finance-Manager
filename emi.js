function calculateEMI() {
    // Get the loan amount, interest rate, and loan duration from the user
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);
    const loanDuration = parseFloat(document.getElementById('loanDuration').value);
  
    // Calculate the monthly interest rate
    const monthlyInterestRate = (interestRate / 100) / 12;
  
    // Calculate the number of monthly payments
    const numberOfPayments = loanDuration * 12;
  
    // Calculate the EMI
    const EMI = (loanAmount * monthlyInterestRate * (Math.pow(1 + monthlyInterestRate, numberOfPayments))) / (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
  
    // Display the EMI to the user
    document.getElementById('EMI').innerHTML = `EMI: ${EMI.toFixed(2)}`;
  
    // Calculate and display the payment schedule
    let tableRows = '';
    let balance = loanAmount;
    for (let i = 1; i <= numberOfPayments; i++) {
      // Calculate the interest and principal components of the payment
      const interest = balance * monthlyInterestRate;
      const principal = EMI - interest;
      
      // Calculate the new balance after the payment
      balance -= principal;
      
      // Add a row to the payment schedule table
      tableRows += `
        <tr>
          <td>${i}</td>
          <td>${EMI.toFixed(2)}</td>
          <td>${principal.toFixed(2)}</td>
          <td>${interest.toFixed(2)}</td>
          <td>${balance.toFixed(2)}</td>
        </tr>
      `;
    }
  
    // Display the payment schedule table to the user
    document.getElementById('schedule').innerHTML = `
      <table>
        <thead>
          <tr>
            <th>Payment No.</th>
            <th>EMI</th>
            <th>Principal</th>
            <th>Interest</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          ${tableRows}
        </tbody>
      </table>
    `;
  }
 
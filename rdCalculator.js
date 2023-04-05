function calculateRD() {
    let principal = parseInt(document.getElementById("principal").value);
    let interest = parseInt(document.getElementById("interest").value);
    let tenure = parseInt(document.getElementById("tenure").value);
    let monthlyDeposit = parseInt(document.getElementById("monthlyDeposit").value);
    
    let monthlyInterest = (interest / 12) / 100;
    let maturityValue = 0;
    
    for (let i = 1; i <= tenure; i++) {
      maturityValue += monthlyDeposit;
      maturityValue *= (1 + monthlyInterest);
    }
    
    maturityValue += principal;
    maturityValue = maturityValue.toFixed(2);
    
    let result = `Maturity Value: ${maturityValue}`;
    
    document.getElementById("result").innerHTML = result;
  }
  
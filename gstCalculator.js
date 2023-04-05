function calculateGST() {
    let amount = parseFloat(document.getElementById("amount").value);
    let gstPercent = parseFloat(document.getElementById("gstPercent").value);
  
    if (isNaN(amount) || isNaN(gstPercent)) {
      alert("Please enter valid input values.");
      return;
    }
  
    let cgst = (amount * gstPercent) / 200;
    let sgst = cgst;
    let gstAmount = cgst + sgst;
    let total = amount + gstAmount;
    let data = [cgst.toFixed(2), sgst.toFixed(2), gstAmount.toFixed(2)];
  
    let gstChart = new Chart(document.getElementById("myChart"), {
      type: "pie",
      data: {
        labels: ["CGST", "SGST", "GST"],
        datasets: [
          {
            label: "GST",
            data: data,
            backgroundColor: ["#007bff", "#dc3545", "#ffc107"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: "GST Chart",
          fontSize: 20,
          fontColor: "#333",
        },
        legend: {
          display: true,
          position: "bottom",
        },
      },
    });
  
    let resultText = `CGST: ${cgst.toFixed(2)} (${(cgst / total * 100).toFixed(2)}%)<br>
                       SGST: ${sgst.toFixed(2)} (${(sgst / total * 100).toFixed(2)}%)<br>
                       GST: ${gstPercent.toFixed(2)}% (${(gstPercent / 2).toFixed(2)}% each)<br>
                       Total: ${total.toFixed(2)}`;
    document.getElementById("result").innerHTML = resultText;
  }
  
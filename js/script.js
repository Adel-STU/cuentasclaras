document.getElementById('calculator-form').addEventListener('submit', function (e) {
    e.preventDefault();
    var income = parseFloat(document.getElementById('income').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var result = income - expenses;
  
    var resultText = document.getElementById('result-text');
    resultText.innerHTML = '<strong>Nota:</strong> Tener en cuenta que así no será la calculadora en el resultado final de proyecto<br><br>';
    resultText.innerHTML += 'Después de restar tus gastos mensuales a tu ingreso mensual, te queda un total de $' + result.toFixed(2);
  
    document.getElementById('result-section').style.display = 'block';
  });
  
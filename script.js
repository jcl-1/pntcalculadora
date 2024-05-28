function calculate() {
    const operation = document.getElementById('operation').value;
    const number1 = parseFloat(document.getElementById('number1').value);
    const number2 = parseFloat(document.getElementById('number2').value);
    let result;

    switch (operation) {
        case 'add':
            result = number1 + number2;
            break;
        case 'subtract':
            result = number1 - number2;
            break;
        case 'multiply':
            result = number1 * number2;
            break;
        case 'divide':
            result = number1 / number2;
            break;
        case 'power':
            result = Math.pow(number1, number2);
            break;
        case 'sqrt':
            if (isNaN(number1)) {
                result = "Por favor, insira um número válido no campo Número 1";
            } else {
                result = Math.sqrt(number1);
                document.getElementById('number2-group').style.display = 'none';
            }
            break;
        default:
            result = 'Operação inválida';
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}

function reset() {
    document.getElementById('operation').value = 'add';
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
    document.getElementById('result').textContent = '';
    document.getElementById('number2-group').style.display = 'block';
}

document.getElementById('operation').addEventListener('change', function() {
    if (this.value === 'sqrt') {
        document.getElementById('number2-group').style.display = 'none';
    } else {
        document.getElementById('number2-group').style.display = 'block';
    }
});


function realizarOperacao(num1, num2, operacao) {
    switch (operacao) {
        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return 'Erro: Divisão por zero';
            }
        default:
            return 'Erro: Operação inválida';
    }
}

function calculadora() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operacao = document.getElementById('operacao').value;
    const num2 = parseFloat(document.getElementById('num2').value);

    const resultado = realizarOperacao(num1, num2, operacao);

    document.getElementById('resultado').innerHTML = `resultado: ${num1} ${operacao} ${num2} = ${resultado}`;
}

// Adicionar evento ao botão calcular
document.getElementById('calcular').addEventListener('click', (e) => {
    e.preventDefault();
    calculadora();
});
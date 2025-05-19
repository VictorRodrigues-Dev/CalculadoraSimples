// Pega o campo de exibição da calculadora (o visor onde aparecem os números)
const display = document.getElementById("display");

// Seleciona todos os botões da calculadora com a classe .btn
const buttons = document.querySelectorAll(".btn");

// Variável que armazena os números e operadores digitados
let currentInput = "";

// Para cada botão da calculadora, adiciona um evento de clique
buttons.forEach(button => {
  button.addEventListener("click", () => {

    // Pega o valor do botão clicado (ex: "7", "+", "=" etc.)
    const value = button.getAttribute("data-value");

    // Se o botão for "C", limpa o visor e o conteúdo armazenado
    if (value === "C") {
      currentInput = "";
      display.value = "";
      return; // Sai da função aqui
    }

    // Se for "=", tenta calcular a expressão armazenada
    if (value === "=") {
      try {
        // Usa eval() para avaliar a expressão matemática
        const result = eval(currentInput);

        // Mostra o resultado no visor
        display.value = result;

        // Atualiza o conteúdo armazenado com o resultado (para continuar o cálculo)
        currentInput = result.toString();
      } catch (error) {
        // Se der erro (por exemplo, expressão inválida), mostra "Erro"
        display.value = "Erro";
        currentInput = "";
      }
      return; // Sai da função aqui também
    }

    // Para qualquer outro botão (números e operadores), adiciona o valor ao input
    currentInput += value;

    // Atualiza o visor com o conteúdo digitado até o momento
    display.value = currentInput;
  });
});
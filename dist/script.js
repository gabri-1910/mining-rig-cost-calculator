function Calcular() {
  // Primeiro passo é definir as variáveis e alocar os valores do input.
  var n1 = parseFloat(document.getElementById("valorRig").value);
  var n2 = parseFloat(document.getElementById("valorTotal").value);
  var n3 = parseFloat(document.getElementById("valorTotal").value);

  //Agora vamos calcular o quanto temos de pagar da conta de luz.

  var valorConvertido = document.getElementById("valorConvertido");
  var valorFinalConvertido = "O valor em real é: R$ " + (n1 / n2) * n3;
  valorConvertido.innerHTML = valorFinalConvertido;
}
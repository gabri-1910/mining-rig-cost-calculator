function Calcular() {
  // Primeiro passo é definir as variáveis e alocar os valores do input.
  var n1 = parseFloat(document.getElementById("notaBi1").value);
  var n2 = parseFloat(document.getElementById("notaBi2").value);
  var n3 = parseFloat(document.getElementById("notaBi3").value);
  var n4 = parseFloat(document.getElementById("notaBi4").value);

  var media = (n1 + n2 + n3 + n4) / 4;
  var notaFixada = media.toFixed(1);

  // Testando se os campos estao preenchidos e se a media é menor que 7
  if (
    document.getElementById("notaBi1") !== "" &&
    document.getElementById("notaBi2") !== "" &&
    document.getElementById("notaBi3") !== "" &&
    document.getElementById("notaBi4") !== "" &&
    notaFixada < 6
  ) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia = "Sua média foi de " + notaFixada + ". Você reprovou";
    elementoMedia.innerHTML = resultadoMedia;

  } else if (notaFixada > 6) {
    var elementoMedia = document.getElementById("resultado");
    var resultadoMedia =
      "Sua média foi de " + notaFixada + ". Você Foi Aprovado!";
    elementoMedia.innerHTML = resultadoMedia;

  } else {
    var elementoErro = document.getElementById("resultado");
    var erro = "Preencha todos os campos";
    elementoErro.innerHTML = erro;
  }
}

function calculate() {
  const peso = document.getElementById('peso').value;
  const altura = document.getElementById('altura').value / 100;
  const result = peso / (altura * altura);
  document.getElementById('resultado').value = result;
  colorOfLine(result)
}

function colorOfLine(imc) {

  document.getElementById('imc1').style.color = "#212529";
  document.getElementById('imc2').style.color = "#212529";
  document.getElementById('imc3').style.color = "#212529";
  document.getElementById('imc4').style.color = "#212529";
  document.getElementById('imc5').style.color = "#212529";
  document.getElementById('imc6').style.color = "#212529";
  if(imc < 18){
    document.getElementById("imc1").style.color = "green";
  }else if(imc >= 18 && imc < 25){
    document.getElementById("imc2").style.color = "green";
  }else if(imc >= 25 && imc < 30){
    document.getElementById("imc3").style.color = "green";
  }else if(imc >= 30 && imc < 35){
    document.getElementById("imc4").style.color = "green";
  }else if(imc >= 35 && imc < 40){
    document.getElementById("imc5").style.color = "green";
  }else if(imc > 40){
    document.getElementById("imc6").style.color = "green";
  }
}
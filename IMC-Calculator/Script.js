function calculate() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value / 100;
    const result = peso / (altura * altura);
    document.getElementById('resultado').value = result;
  }
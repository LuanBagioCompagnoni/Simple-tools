document.getElementById('formulario').addEventListener('submit', function(e) {
    e.preventDefault();
  
    var email = document.getElementById('email').value;
    var nome = document.getElementById('nome').value;
    var telefone = document.getElementById('telefone').value;
    var senha = document.getElementById('senha').value;
  
    var data = {
      email: email,
      nome: nome,
      telefone: telefone,
      senha: senha
    };
  
    var json = JSON.stringify(data, null, 2);
  
    document.getElementById('resultado').innerText = json;
  });
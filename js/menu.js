

var botaoAbrir = document.querySelector('.menu-abrir');
var botaoFechar = document.querySelector('.menu-fechar');


botaoAbrir.addEventListener('click', function (event) {
// botao remove a classe none
  document.documentElement.classList.add('menu-ativo');
  })

  botaoFechar.addEventListener('click', function () {
    // botao add a closse nome
    document.documentElement.classList.remove('menu-ativo')
  })

  document.documentElement.onclick = function(event) {

    if (event.target === document.documentElement) {
      // document.documentElement sempre retorna o html

        document.documentElement.classList.remove('menu-ativo');

      }
  };


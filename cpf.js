//Função para consumir API
function buscar() {
    //carrega o JSON e processa os dados
    fetch('https://raw.githubusercontent.com/asoferr/json1/refs/heads/main/cpf.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false;

        corpo.forEach(pessoa => {

        if (identificador == pessoa.cpf) {
            var link1 = `<a href="${pessoa.link}">Visite nosso site</a>`
            document.getElementById('nome').innerHTML = pessoa.nome;
            document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
            document.getElementById('cidade').innerHTML = pessoa.cidade;
            document.getElementById('pais').innerHTML = pessoa.pais;
            document.getElementById('imagem').innerHTML = pessoa.imagem;
            document.getElementById('link').innerHTML = link1;
        }  else {
            document.getElementById('erro').innerHTML = ""
            encontrado = true;
        }
            document.getElementById('erro').innerHTML = "Registro inválido";
    })
    if (!encontrado) {
        document.getElementById('erro').innerHTML
    }
        console.log(corpo)
    });
}
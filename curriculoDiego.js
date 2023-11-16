var data = new Date();
var ano = data.getFullYear();

function idade() {
    var idadeMax = document.getElementById('idade');

    idadeMax.innerText = ano - 1990;
}

tela = window.screen.width;

mais = document.getElementById('mais');
menos = document.getElementById('menos');
function telaMonitor() {
    if (tela >= 1000) {
        corpo = document.getElementById('corpo');
        perfil = document.getElementById('perfil');
        foto = document.getElementById('foto');
        dados = document.getElementById('dados')

        foto.style.margin = 'auto 0 auto auto'
        dados.style.margin = '10px  auto 10px 30px'

        corpo.style.width = "80%";
        corpo.style.margin = "auto";
        corpo.style.boxShadow = "#333 0 0 10px";

        perfil.style.backgroundSize = '100% auto'

    }
}
var texto = document.getElementById('texto' + item);
function abrir(item) {
    texto.style.height = '0'
    //  mais.style.display = 'none';
    //  menos.style.display = 'block'
}
function fechar(item) {


    texto.style.height = '0';
    // texto[item].style.overflow = 'hidden';
    // mais.style.display = 'block';
    //  menos.style.display = 'none'
}

function fecharPost(item) {

    document.getElementById('secao' + item);
    var titulo = document.createElement('h2');
    var paragrafo = document.createElement("p");

    var paragrafo = document.createElement("p");
    


    secao2.remove(titulo);
    secao2.remove(paragrafo);



}


function criarPost(item) {

    var sectionPost = document.getElementById('secao' + item);
    var titulo = document.createElement('h2');
    var paragrafo = document.createElement("p");

    var paragrafo = document.createElement("p");
    var lista = document.createElement('ul');
    var elementList0 = document.createElement('li');
    var elementList1 = document.createElement('li');
    var elementList2 = document.createElement('li');

    switch (sectionPost) {
        case secao2:

            titulo.append('Objetivo de Carreira');
            paragrafo.append('Com grande experiência como designer gráfico, procuro me desafiar em uma nova jornada como programador, cada dia busco mais conhecimento em aprendizado com cursos e pesquisas, tenho colocado sempre em prática tudo aquilo que venho aprendendo. Desejo contribuir com bons resultados, bem como desenvolver habilidades e crescer profissionalmente');

            secao2.appendChild(titulo);
            secao2.appendChild(paragrafo);

            break;

        case secao3:
            titulo.append('Histórico Profissional');
            paragrafo.append('Realcafé solúvel do Brasil - (2014 até a presente data)');

            elementList0.append('Operador de painel (2017 a 2023)');
            elementList1.append('Operador de produção (2015 a 2017)');
            elementList2.append('Ajudante de produção (2014 a 2015)');

            lista.appendChild(elementList0);
            lista.appendChild(elementList1);
            lista.appendChild(elementList2);


            secao2.appendChild(titulo);
            secao3.appendChild(paragrafo);
            secao3.appendChild(lista);



            break;
        case secao4:
            alert('4');
            break;
        case secao5:
            alert('5');
            break;
        case secao6:
            alert('6');
            break;
    }

    //if(sectionPost == "secao2"){
    // alert('oi')
    // }



    function enviar() {
        var formulario = document.getElementById('formulario');
        var nome2 = formulario.nome.value;
        var paragrafo = document.createElement("p");
        // crio o elemento <p> 
        var texto = document.createTextNode(nome2);
        // defino o texto 
        paragrafo.appendChild(texto);
        // insiro o texto no elemento <p> 
        document.body.appendChild(paragrafo);
        // insiro na página 
    }
}

/***************************
* CATÁLOGO
*/

function janelaCatal (index) {
    var prodCatal = [
                    ['../img/NarShipB1T01A300.jpg',     'R$ 60,00' ],
                    ['../img/NarShipB2T01A300.jpg',     'R$ 60,00' ],
                    ['../img/AOT1-4A300.jpg',           'R$ 130,00'],
                    ['../img/AOT5-8A300.jpg',           'R$ 130,00'],
                    ['../img/NarutoBoxPart1A300.jpg',   'R$ 600,00'],
                    ['../img/RyukFigA300.jpg',          'R$ 250,00']
];

    document.getElementById("janela").innerHTML = "<img src="+prodCatal[index][0]+">";
    document.getElementById("precoJanel").innerHTML = "Preço: <span>"+prodCatal[index][1]+"</span>";
};

/***************************
* COMPRAS
*/

    //validando tamanho e caracteres
function validarCPF(cpf){
    if(cpf.value.length != 11){
        alert("CPF tem de ter 11 dígitos");
        return;
    }
    else if(cpf.value.length == 11){
        for (c = 0; c < cpf.value.length; c++){
            if (!(cpf.value[c] >= '0' && cpf.value[c] <= '9')){
                alert('CPF só pode ter dígitos. Caracter "' + cpf.value[c] + '" inválido');
                return;
            };
        };
    };

    //validando os digitos do cpf
function calculaDV(num) {
    var resto = 0, 
        soma  = 0;

    for (i = 2; i < 11; i++) {
        soma = soma + ((num % 10) * i);
        num = parseInt(num / 10);
    }
    resto = (soma % 11);
    return (resto > 1) ? (11 -resto) : 0;
};
    var digitosCPF = cpf.value.slice(-2, cpf.value.length);
    var identCPF = cpf.value.slice(0, 9); 

    primeiro_digito = calculaDV(identCPF)
    segundo_digito  = calculaDV(identCPF * 10 + primeiro_digito)

    if (digitosCPF[0] != primeiro_digito || digitosCPF[1] != segundo_digito) {
        alert("Digitos verificadores inválidos!");
            return; 
    };
};

    //fazendo lista de compras  
function listaCompra(){

    var lista = document.getElementById("Produtos");
    var produto = lista.value;

    var listaProd = {   'Death Note - DVD - Completo'   :'85.00',
                        'Naruto Shippuden T01 Box 01'   :'60.00',
                        'Naruto Shippuden T01 Box 02'   :'60.00',
                        'Naruto Gold - 55 Vol.'         :'1000.00',
                        'Attack on Titan - Vol 1-4'     :'130.00',
                        'Attack on Titan - Vol 5-8'     :'130.00',
                        'Naruto Box P01 Vol 1-27'       :'600.00',
                        'Naruto Shippuden - PVC'        :'210.00',
                        'Ryuk - Death Note - PVC'       :'250.00',
    };

    if(produto == "0"){
        alert("Nenhum produto selecionado");
    }
    else{
        produtoTotal =  document.getElementById("listaPedidos");
        valor        =  document.getElementById("valorTotal");
 
        produtoTotal.innerHTML += lista.options[produto].innerHTML+"\n";  
        
        if (valor.value == "") {
            valor.value = parseFloat(listaProd[lista.options[produto].innerHTML]).toFixed(2);
        }
        else {
            valor.value = valor.value = (parseFloat(valor.value) + parseFloat(listaProd[lista.options[produto].innerHTML])).toFixed(2);
       };       
    };
};

    //limpando tudo
function limpar()
{
   document.getElementById("listaPedidos", "valorTotal").innerHTML="";  
} 


  



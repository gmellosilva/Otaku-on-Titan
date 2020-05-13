/***************************
* DESTAQUES
*/


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

/*calculando digitos de verificação*/


"use strict";
console.log('----------- Exercício 1 -----------');
console.log(atividade1());
console.log('----------- Exercício 2 -----------');
console.log(atividade2());
console.log('----------- Exercício 3 -----------');
console.log(atividade3());
function atividade1() {
    const camisas = [
        {
            id: 1,
            modelo: "blusa do naruto",
            marca: "lacosta",
            categoria: "blusa",
        },
        {
            id: 2,
            modelo: "bermuda do naruto",
            marca: "lacosta",
            categoria: "bermuda",
        },
        {
            id: 3,
            modelo: "bandana do naruto",
            marca: "lacosta",
            categoria: "acessorios",
        },
    ];
    let camisasFiltradas = getFilterCamisas('bermuda', camisas);
    return camisasFiltradas;
    function getFilterCamisas(categoria, camisas) {
        return camisas.filter(camisa => camisa.categoria == categoria);
    }
}
function atividade2() {
    const numeros = new Array(27).fill(0).map((element, index) => { return index + 1; });
    let auxiliar = [[]];
    let cont = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (auxiliar[cont].length == 3) {
            cont++;
            auxiliar.push([]);
        }
        auxiliar[cont].push(numeros[i]);
    }
    return auxiliar;
}
function atividade3() {
    const numeros = atividade2();
    let auxiliar = [];
    for (let i = 0; i < numeros.length; i++) {
        auxiliar.push(numeros[i].reduce((acc, value) => acc + value));
    }
    return auxiliar;
}

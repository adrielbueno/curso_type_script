"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const inputCep = document.querySelector("#inputCep");
const buttonCep = document.querySelector("#buttonCep");
buttonCep === null || buttonCep === void 0 ? void 0 : buttonCep.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    if (!inputCep) {
        return false;
    }
    const inputCepValue = inputCep.value;
    let dadosCep = yield buscarCep(inputCepValue);
    renderDadosCep(dadosCep);
}));
function buscarCep(cep) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const request = yield fetch(`https://viacep.com.br/ws/${cep}/json/`);
            const dados = yield request.json();
            console.log(dados);
            return dados;
        }
        catch (e) {
            console.log('erro');
        }
    });
}
function renderDadosCep(dadosCep) {
    const divDadosCep = document.querySelector("#divDadosCep");
    if (divDadosCep) {
        divDadosCep.innerHTML += `
      <label>Dados</label> <br>
      <label>Cep: ${dadosCep.cep}</label><br>
      <label>Logradouro: ${dadosCep.logradouro}</label><br>
      <label>Complemento: ${dadosCep.complemento}</label><br>
      <label>Bairro: ${dadosCep.bairro}</label><br>
      <label>Localidade: ${dadosCep.localidade}</label><br>
    `;
    }
}

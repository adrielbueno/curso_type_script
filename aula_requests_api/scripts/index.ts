const inputCep  = document.querySelector("#inputCep");
const buttonCep = document.querySelector("#buttonCep");

buttonCep?.addEventListener("click", async () => {
  if(!inputCep){
    return false;
  }
  
  const inputCepValue = (inputCep as HTMLInputElement).value;

  let dadosCep = await buscarCep(inputCepValue);

  renderDadosCep(dadosCep);

});


async function buscarCep(cep: string) {
  try {
    const request = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const dados = await request.json();
    console.log(dados);

    return dados;
  } catch (e) {console.log('erro');}
}

type DadosCep = {
  cep: string,
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string
}

function renderDadosCep(dadosCep: DadosCep){
  const divDadosCep = document.querySelector("#divDadosCep");

  if(divDadosCep){
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

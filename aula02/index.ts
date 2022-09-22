
console.log('----------- Exercício 1 -----------');
console.log(atividade1());
console.log('----------- Exercício 2 -----------');
console.log(atividade2());
console.log('----------- Exercício 3 -----------');
console.log(atividade3());


function atividade1(): object {
  type Camisa = {
    id: number,
    modelo: string,
    marca: string,
    categoria: string
  }[];

  const camisas:Camisa = [
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


  function getFilterCamisas(categoria: string, camisas: Camisa): Camisa {
    return camisas.filter(camisa => camisa.categoria == categoria);
  }
}

function atividade2(): number[][]{
  const numeros: number[] = new Array(27).fill(0).map((element,index) => {return index +1}); 
 
  let auxiliar: number[][] = [[]];
  let cont = 0;

  for(let i = 0; i < numeros.length; i++) {
    if(auxiliar[cont].length == 3){
      cont++;
      auxiliar.push([]);
    }

    auxiliar[cont].push(numeros[i]);
  }
  return auxiliar;
}

function atividade3(): number[]{
  const numeros: number[][] = atividade2();

  let auxiliar: number[] = [];

  for(let i = 0; i < numeros.length; i++) {    
    auxiliar.push(numeros[i].reduce((acc, value) => acc + value));
  }
  return auxiliar;
}
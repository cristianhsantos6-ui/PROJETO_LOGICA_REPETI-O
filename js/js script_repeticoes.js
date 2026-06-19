//ESTRUTURA DE REPETIÇÃO FOR 
const divfor = document.querySelector('#div-for')

for(i = 0;i < 10; i++){
  console.log(i, 'Amor')
  divfor.innerHTML += `${i}- Amor <br>`
}
//CONTADOR/ACUMULADOR
const inputNum = document.querySelector('#num')
const btnNum = document.querySelector('#num')
const divContAcum = document.querySelector('#div-cont-acum')

let cont = 0
let acum = 0.0

btnNum.addEventListener('click', (evt)=>{
  let numDigitado = Number(inputNum.value)

  cont++
  acum += numDigitado

  divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br>
  A SOMA DOS NÚMEROS É: ${acum}`

  inputNum.value = ''
  
})

//CONTROLANDO FOR
const inputFrase = document.querySelector('#frase')
const inputNumRepeticao = document.querySelector('#num-repeticao')
const btnFrase = document.querySelector('#btn-frase')
const divFrase = document.querySelector('#div-frase')

btnFrase.addEventListener('click', (evt) => {
  let numRepeti = Number(inputNumRepeticao.value)
  let frase = inputFrase.value

  for (i = 0; i < numRepeti; i++){
    divFrase.innerHTML += `${i + 1} - ${frase} <br>`
  }
})


//COLEÇÃO DE DADOS - ARRAY
const presentes = ['Bicicleta', 'Celular', 'Camisa do coringão', 'Doleira', 'Tênis adidas']

const divArray = document.querySelector('#div-array')

  //divArray.innerHTML = presentes[6]

  for(i = 0;i < 5;i++ ){
    divArray.innerHTML += `${presentes[i]} <br>`
  }

  //FOR IN 
  const divForIn = document.querySelector('#div-forin')

  for(let posicao in presentes){
    divForIn.innerHTML += `${presentes[posicao]} <br>`
  }

  //FOR OF
  const divForOf = document.querySelector('#div-forof')

  for (let elemento of presentes){
    divForOf.innerHTML += `${elemento} <br>`
  }

  //FOREACH
  const divForeach = document.querySelector('#div-foreach')

  div.forEach((elemento, i)=>{
      divForeach.innerHTML += `${posicao + 1} - ${elemento} <br>`
  })

  //COLEÇÃO DE OBJETOS LITERAIS - ARRAY
const pessoas = [
  {nome: 'Maria Flor', idade: 25, renda: 8500},
  {nome: 'Joerdson Souza',idade: 75, renda: 5000},
  {nome: 'Taoca', idade: 28, renda: 500},
  {nome: 'Chicó', idade: 36, renda: 100},
  {nome: 'João Grilo', idade: 32, renda: 80},
]

//MANIPULANDO
//ADICIONAR ELEMENTOS NO ARRAY
pessoas.push({nome: 'Magnó', idade: 32, renda: 3500})
pessoas.unshift({nome: 'Joerdison', idade: 36, renda: 1000000})
//SPLICE PARA ADICIONAR EM UMA POSIÇÃO SEM EXCLUIR UM ELEMENTO
pessoas.splice(3,0,{nome: 'Extraterreste', idade: 250,
renda: 0.50})

//SPLICE EXCLUIR UMA POSIÇÃO E NESSE EXEMPLO EXCLUIR MAIS doIS ELEMENTOS A PARTIR DA POSIÇÃO(INDICE) INFORMADO
//pessoas.splice(1,0)

//SPLICE EXCLUIR DOIS ELEMENTOS A PARTIR DA POSIÇÃO(INDICE) INFORMADA
pessoas.splice(2,2)

//EXCLUIR O ÚLTIMO ELEMENTO DO ARRAY
pessoas.splice.prototype()

//EXIBIR A QUANTIDADE DE ELEMENTOS EM UM ARRAY
console.log('TOTAL DE ELEMENTOS NO ARRAY pessoas ===>')

//LISTA DE OBJETOS LITERAL PELO FOR
const divListaObjFor = document.querySelector('#div-listaobj-for')

for(i = 0; i < pessoas.length;i++){
  divListaObjFor.innerHTML += `${pessoas[i].nome}, ${pessoa[i].
  idade} R$ ${pessoa[i].renda.toFixed(2).replace('.', ',')} <br>`
}


//LISTA DE OBJETOS LITERAL PELO FOR IN 
  const divListaObjForIn = document.querySelector
  ('#div-listaobj-forin')

  for(let indice in pessoas){
      divListaObjForIn.innerHTML += `${indice} - ${pessoas
    [indice].nome}, ${pessoas[indice].idade}, R$ ${pessoas
    [idice].renda.toFixed(2).replace('.', ',')} <br>`
  }

  //LISTA DE OBJETOS LITERAL PELO FOR/OF
  const divListaForOf = document.querySelector
  ('#div-listaobj-forof')

  let contForOf = 0

  for(let elem of pessoas){
    contForOF++

    divListaForOf.innerHTML += `${contForOf} -${elem.nome}, $
    {elem.idade}, R$ ${elem.renda.toFixed(2).replace('.', ',')} <br>`
  }

   //LISTA DE OBJETOS LITERAL PELO FOREACH
   const divListaForeach = document.querySelector
   ('#div-lista-roreach')

   pessoas.forEach((elem, i)=>{
    divListaForeach.innerHTML += `${i}, ${elem.nome}, $
    {elem.idade} R$ ${elem.renda.toFixed(2).replace('.', ',')} 
    <br>`
   })
   



   
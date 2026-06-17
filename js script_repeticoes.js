//ESTRUTURA DE REPETIÇÃO FOR
  const divfor = document.querySelector('#div-for')

  for(i = 0;i < 10; i++){
    console.log(i, 'Amor') 
    divfor.innerHTML += `${i} - Amor <br>`
  }

  //CONTADOR/ACUMULADOR
  const inputNum = document.querySelector('#num')
  const btNum = document.querySelector('#num')
  const divContAcum = document.querySelector('#div-cont-acum')

  let cont = 0
  let acum = 0.0

  btnNUm.addEventlistener('click', (evt)=>{
    let numDigitado = Number(inputNum.value)

    cont++
    acum += numDigitado

    divContAcum.innerHTML = `TOTAL DE NÚMERO DIGITADO É: ${cont} <br>
    A SOMA DOS NÚMEROS É:{acum}`

    inputNum.valeu = ''
    
  })

  //CONTROLANDO FOR
  const inputFrase = document.querySelector('#frase')
  const inputNumRepeticao = document.querySelector('#num-repeticao')
  const btnFrase = document.querySelector('#btn-frase')
  const divFrase = document.querySelector('#div-frase')

  

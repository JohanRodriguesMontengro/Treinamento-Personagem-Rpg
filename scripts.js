let Continuar = true

do {
  let EscolherElemento = true
  let NomePersonagem = prompt(`Informe o nome do personagem`)
  let Ataque = 0
  let Elemento = ``
  let Defesa = 0
  let NivelPersonagem = 0
  let Resetar = 0
  while (EscolherElemento === true) {
    Elemento = prompt(`Escolha seu elemento
     1- Fogo
     2- Água
     3- Vento
     4- Terra`)
    
    if (isNaN(Elemento) || Elemento > 4 || Elemento < 1) {
      alert(`Digite somente números entre 1 a 4`)
    } else {
      Elemento = parseInt(Elemento)
      EscolherElemento = false
    }
  }
  let PainelVerificador = true

  while (PainelVerificador === true) {
    let PainelDeControle = prompt(`
  1- Treinamento
  2- Elemento
  3- Status
  4- Sair
  5- Resetar
  Nome: ${NomePersonagem}
  Elemento: ${Elemento}
  Nível: ${NivelPersonagem}
  Resets: ${Resetar}`)
  PainelDeControle = parseInt(PainelDeControle)

    if (isNaN(PainelDeControle) || PainelDeControle <= 0 || PainelDeControle >= 6) {
      alert(`Digite somente números entre 1 a 5`)
    }
    else if (PainelDeControle === 1) {
      PainelDeTreinamento = prompt(`
      1- Academia
      2- 
      3- 
      4- 
      5- 
      6- Monte Everest
      7- 
      8- Estação Espacial Internacional
      9- Vácuo Do Espaço
      10- 
      11- 
      12- Ton 618
      13- Sobre os locais`)
    }
  }
}while(Continuar === true)
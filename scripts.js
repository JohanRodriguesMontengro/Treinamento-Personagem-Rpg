let Continuar = true

do {
  let EscolherElemento = true
  let NomePersonagem = prompt(`Informe o nome do personagem`)
  let Ataque = 0
  let Elemento = ``
  let Defesa = 0
  let NivelPersonagem = 0
  let Reset = 0
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
  5- Reset
  Nome: ${NomePersonagem}
  Elemento: ${Elemento}
  Nível: ${NivelPersonagem}
  Resets: ${Reset}`)
  PainelDeControle = parseInt(PainelDeControle)

    if (isNaN(PainelDeControle) || PainelDeControle <= 0 || PainelDeControle >= 6) {
      alert(`Digite somente números entre 1 a 5`)
    }
    else if (PainelDeControle === 1) {
      let Repetidor = true
      let PainelDeTreinamento = ``
      do {
        PainelDeTreinamento = prompt(`
        1- Academia (Nivel Requirido: 0)
        2- Cachoeira Do Sul (Nivel Requirido: 15)
        3- Neuschwanstein (Nivel Requirido: 163)
        4- Fukushima (Nivel Requirido: 534)
        5- Fossa Das Marianas (Nivel Requirido: 4.592)
        6- Monte Everest (Nivel Requirido: 8.849)
        7- Krakatoa (Nivel Requirido: 15.867)
        8- Orbita Da Terra (Nivel Requirido: 35.795)
        9- Estação Espacial Internacional (Nivel Requirido: 78.583)
        10- Vácuo Do Espaço (Nivel Requirido: 278.945)
        11- Lua Terrestre(Nivel Requirido: 608.842)
        12- Sol (Nivel Requirido: 1.598.378)
        13- Fora Do Sistema Solar (Nivel Requirido: 14.759.645)
        14- Fora Da Via Láctea (Nivel Requirido: 329.574.297)
        15- Sobre os locais
        Nivel Atual: ${NivelPersonagem}`)
  
        if (isNaN(PainelDeTreinamento) || PainelDeTreinamento >= 16 || PainelDeTreinamento <= 0) {
          alert(`Digite somente números entre 1 a 15`)
        }
        else if (PainelDeTreinamento === 1) {
          alert(`Você ficou treinando na academia durante 5 horas
          Você evoluiu 1 nível`)
          NivelPersonagem += 1
        }
        else if (PainelDeTreinamento === 2) {
          alert(`Você ficou treinando na cachoeira do sul durante 6 horas
          Você evolui 6 níveis`)
          NivelPersonagem += 6
        }
        else if (PainelDeTreinamento === 3) {
          alert(`Você ficou treinando na cahoeira do sul durante 6 horas
          Você evolui 6 níveis`)
          NivelPersonagem += 6
        }
        else if (PainelDeTreinamento === 4) {
          alert(`Você ficou treinando na cahoeira do sul durante 6 horas
          Você evolui 6 níveis`)
          NivelPersonagem += 6
        }
        else if (PainelDeTreinamento === 5) {
          alert(`Você ficou treinando na cahoeira do sul durante 6 horas
          Você evolui 6 níveis`)
          NivelPersonagem += 6
        }
      }while(Repetidor === true)
      
    }
  }
}while(Continuar === true)
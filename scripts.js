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
          alert(`Você ficou treinando na Academia durante 5 horas
          Você evoluiu 2 nível`)
          NivelPersonagem += 2
        }
        else if (PainelDeTreinamento === 2) {
          alert(`Você ficou treinando na Cachoeira Do Sul durante 6 horas
          Você evolui 16 níveis`)
          NivelPersonagem += 16
        }
        else if (PainelDeTreinamento === 3) {
          alert(`Você ficou treinando em Neuschwanstein durante 3 horas
          Você evolui 51 níveis`)
          NivelPersonagem += 51
        }
        else if (PainelDeTreinamento === 4) {
          alert(`Você ficou treinando em Fukushima durante 6 horas
          Você evolui 93 níveis`)
          NivelPersonagem += 93
        }
        else if (PainelDeTreinamento === 5) {
          alert(`Você ficou treinando na Fossa Das Marianas durante 6 horas
          Você evolui 126 níveis`)
          NivelPersonagem += 126
        }
        else if (PainelDeTreinamento === 6) {
          alert(`Você ficou treinando no Monte Everest durante 2 horas
          Você evolui 379 níveis`)
          NivelPersonagem += 379
        }
        else if (PainelDeTreinamento === 7) {
          alert(`Você ficou treinando em Krakatoa durante 1 horas
          Você evolui 731 níveis`)
          NivelPersonagem += 731
        }
        else if (PainelDeTreinamento === 8) {
          alert(`Você ficou treinando na Orbita Da Terra durante 30 Minutos
          Você evolui 1.893 níveis`)
          NivelPersonagem += 1893
        }
        else if (PainelDeTreinamento === 9) {
          alert(`Você ficou treinando na Estação Espacial Internacional durante 5 horas
          Você evolui 3.126 níveis`)
          NivelPersonagem += 3126
        }
        else if (PainelDeTreinamento === 10) {
          alert(`Você ficou treinando no Vácuo Do Espaço durante 2 horas
          Você evolui 8.542 níveis`)
          NivelPersonagem += 8542
        }
        else if (PainelDeTreinamento === 11) {
          alert(`Você ficou treinando na Lua Terrestre durante 6 horas
          Você evolui 18.479 níveis`)
          NivelPersonagem += 18479
        }
        else if (PainelDeTreinamento === 12) {
          alert(`Você ficou treinando no Sol durante 1 horas
          Você evolui 81.371 níveis`)
          NivelPersonagem += 81371
        }
        else if (PainelDeTreinamento === 13) {
          alert(`Você ficou treinando Fora Do Sistema Solar durante 30 Minutos
          Você evolui 321.673 níveis`)
          NivelPersonagem += 321673
        }
        else if (PainelDeTreinamento === 14) {
          alert(`Você ficou treinando Fora Da Via Láctea durante 6 horas
          Você evolui 1.845.176 níveis`)
          NivelPersonagem += 1845176
        }
      }while(Repetidor === true)
      
    }
  }
}while(Continuar === true)
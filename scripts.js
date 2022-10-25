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
        2- Cachoeira (Nivel Requirido: 15)
        3- Castelo Antigo (Nivel Requirido: 60)
        4- Fukushima (Nivel Requirido: 500)
        5- Fossa Das Marianas (Nivel Requirido: 4.000)
        6- Monte Everest (Nivel Requirido: 8.849)
        7- Krakatoa (Nivel Requirido: )
        8- Orbita Da Terra (Nivel Requirido:)
        9- Estação Espacial Internacional (Nivel Requirido:)
        10- Vácuo Do Espaço (Nivel Requirido:)
        11- Lua (Nivel Requirido:)
        12- Sol (Nivel Requirido:)
        13- Fora Do Sistema Solar (Nivel Requirido:)
        14- Fora Da Via Láctea (Nivel Requirido:)
        15- Sobre os locais (Nivel Requirido:)
        Nivel Atual: ${NivelPersonagem}`)
  
        if (isNaN(PainelDeTreinamento) || PainelDeTreinamento >= 16 || PainelDeTreinamento <= 0) {
          alert(`Digite somente números entre 1 a 16`)
        }
        else if (PainelDeTreinamento === 1) {

        }
      }while(Repetidor === true)
      
    }
  }
}while(Continuar === true)
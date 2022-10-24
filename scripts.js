let Continuar = true

do {
  let EscolherElemento = true
  let NomePersonagem = prompt(`Informe o nome do personagem`)
  let Ataque = 0
  let Elemento = ``
  let Defesa = 0
  let NivelPersonagem = 0
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
  Nome: ${NomePersonagem}
  Elemento: ${Elemento}
  Nível: ${NivelPersonagem}`)
  
  
    
    
    
    
    if (isNaN(PainelDeControle) || PainelDeControle < 1 || PainelDeControle > 3) {
      
    }
  }
}while(Continuar === true)
let Continuar = true;

do {
  let EscolherElemento = true;
  let NomePersonagem = prompt(`Informe o nome do personagem`);
  let Ataque = 0;
  let Elemento = ``;
  let Defesa = 0;
  let NivelPersonagem = 0;
  let Reset = 0;
  let PoderEscolhido = ``;
  let PoderEspiritual = 0;
  while (EscolherElemento === true) {
    Elemento = prompt(`Escolha seu elemento
     1- Fogo
     2- Água
     3- Vento
     4- Terra`);

    if (isNaN(Elemento) || Elemento > 4 || Elemento < 1) {
      alert(`Digite somente números entre 1 a 4`);
    } else {
      Elemento = parseInt(Elemento);

      if (Elemento === 1) {
        Elemento = `Fogo`;
      } else if (Elemento === 2) {
        Elemento = `Água`;
      } else if (Elemento === 3) {
        Elemento = `Vento`;
      } else {
        Elemento = `Terra`;
      }
      EscolherElemento = false;
    }
  }
  let PainelVerificador = true;

  while (PainelVerificador === true) {
    let PainelDeControle = prompt(`
  1- Treinamento
  2- Elemento
  3- Status
  4- Reset
  5- Sair
  Nome: ${NomePersonagem}
  Elemento: ${Elemento}
  Nível: ${NivelPersonagem}
  Resets: ${Reset}`);
    PainelDeControle = parseInt(PainelDeControle);

    if (
      isNaN(PainelDeControle) ||
      PainelDeControle <= 0 ||
      PainelDeControle >= 6
    ) {
      alert(`Digite somente números entre 1 a 5`);
    } else if (PainelDeControle === 1) {
      let Repetidor = true;
      let PainelDeTreinamento = ``;
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
        16- Voltar
        Nivel Atual: ${NivelPersonagem}`);
        PainelDeTreinamento = parseInt(PainelDeTreinamento);
        if (
          isNaN(PainelDeTreinamento) ||
          PainelDeTreinamento.length === 0 ||
          PainelDeTreinamento >= 16 ||
          PainelDeTreinamento <= 0
        ) {
          alert(`Digite somente números entre 1 a 15`);
        }
        if (PainelDeTreinamento === 1 && NivelPersonagem >= 0) {
          alert(`Você ficou treinando na Academia durante 5 horas
          Você evoluiu 2 níveis`);
          NivelPersonagem += 2;
        }
        if (PainelDeTreinamento === 2 && NivelPersonagem >= 15) {
          alert(`Você ficou treinando na Cachoeira Do Sul durante 6 horas
          Você evolui 16 níveis`);
          NivelPersonagem += 16;
        }
        if (PainelDeTreinamento === 3 && NivelPersonagem >= 163) {
          alert(`Você ficou treinando em Neuschwanstein durante 3 horas
          Você evolui 51 níveis`);
          NivelPersonagem += 51;
        }
        if (PainelDeTreinamento === 4 && NivelPersonagem >= 534) {
          alert(`Você ficou treinando em Fukushima durante 6 horas
          Você evolui 93 níveis`);
          NivelPersonagem += 93;
        }
        if (PainelDeTreinamento === 5 && NivelPersonagem >= 4592) {
          alert(`Você ficou treinando na Fossa Das Marianas durante 6 horas
          Você evolui 126 níveis`);
          NivelPersonagem += 126;
        }
        if (PainelDeTreinamento === 6 && NivelPersonagem >= 8849) {
          alert(`Você ficou treinando no Monte Everest durante 2 horas
          Você evolui 379 níveis`);
          NivelPersonagem += 379;
        }
        if (PainelDeTreinamento === 7 && NivelPersonagem >= 15867) {
          alert(`Você ficou treinando em Krakatoa durante 1 horas
          Você evolui 731 níveis`);
          NivelPersonagem += 731;
        }
        if (PainelDeTreinamento === 8 && NivelPersonagem >= 35795) {
          alert(`Você ficou treinando na Orbita Da Terra durante 30 Minutos
          Você evolui 1.893 níveis`);
          NivelPersonagem += 1893;
        }
        if (PainelDeTreinamento === 9 && NivelPersonagem >= 78583) {
          alert(`Você ficou treinando na Estação Espacial Internacional durante 5 horas
          Você evolui 3.126 níveis`);
          NivelPersonagem += 3126;
        }
        if (PainelDeTreinamento === 10 && NivelPersonagem >= 278945) {
          alert(`Você ficou treinando no Vácuo Do Espaço durante 2 horas
          Você evolui 8.542 níveis`);
          NivelPersonagem += 8542;
        }
        if (PainelDeTreinamento === 11 && NivelPersonagem >= 608842) {
          alert(`Você ficou treinando na Lua Terrestre durante 6 horas
          Você evolui 18.479 níveis`);
          NivelPersonagem += 18479;
        }
        if (PainelDeTreinamento === 12 && NivelPersonagem >= 1598378) {
          alert(`Você ficou treinando no Sol durante 1 horas
          Você evolui 281.371 níveis`);
          NivelPersonagem += 281371;
        }
        if (PainelDeTreinamento === 13 && NivelPersonagem >= 14759645) {
          alert(`Você ficou treinando Fora Do Sistema Solar durante 30 Minutos
          Você evolui 9.421.673 níveis`);
          NivelPersonagem += 9421673;
        }
        if (PainelDeTreinamento === 14 && NivelPersonagem >= 329574297) {
          alert(`Você ficou treinando Fora Da Via Láctea durante 6 horas
          Você evolui 41.845.176 níveis`);
          NivelPersonagem += 41845176;
        }
        if (PainelDeTreinamento === 15) {
          let PainelDeTreinamentoSobre = ``;
          let RepetidorSobre = true;

          do {
            PainelDeTreinamentoSobre = prompt(`Saiba mais sobre cada área de treinamento!
            1- Academia
              2- Cachoeira Do Sul
              3- Neuschwanstein
              4- Fukushima
              5- Fossa Das Marianas
              6- Monte Everest
              7- Krakatoa
              8- Orbita Da Terra
              9- Estação Espacial Internacional
              10- Vácuo Do Espaço
              11- Lua Terrestre
              12- Sol
              13- Fora Do Sistema Solar
              14- Fora Da Via Láctea
              15- Sobre os locais`);
            PainelDeTreinamentoSobre = parseInt(PainelDeTreinamentoSobre);
            if (PainelDeTreinamentoSobre === 1) {
              alert(
                `O termo academia se refere aos espaços principalmente criados para realizar diversos tipos de atividade física. Hoje em dia, a palavra academia é utilizada para clubes ou centros esportivos onde é necessário pagar uma importância para poder ter acesso a vários lugares de exercícios.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 2) {
              alert(
                `Cachoeira do Sul é um município brasileiro do estado do Rio Grande do Sul, emancipado de Rio Pardo e instalado em 1820. A origem de seu nome se deve a uma antiga cachoeira existente no Rio Jacuí, porém em seu lugar foi construída a Ponte do Fandango.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 3) {
              alert(
                `O Castelo de Neuschwanstein é um palácio alemão construído na segunda metade do século XIX, perto das cidades de Hohenschwangau e Füssen, no sudoeste da Baviera, a escassas dezenas de quilômetros da fronteira com a Áustria.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 4) {
              alert(
                `Acidente nuclear de Fukushima Daiichi foi um desastre nuclear ocorrido na Central Nuclear de Fukushima I em 11 de março de 2011, causado pelo derretimento de três dos seis reatores nucleares da usina. A falha ocorreu quando a usina foi atingida por um tsunami provocado por um maremoto de magnitude 8,7.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 5) {
              alert(
                `A Fossa das Marianas é o local mais profundo dos oceanos, atingindo uma profundidade de 10 984 metros. Localiza-se no oceano Pacífico, a leste das ilhas Marianas, na fronteira convergente entre as placas tectônicas do Oceano Pacífico e das Filipinas.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 6) {
              alert(
                `O monte Everest ou, na sua forma portuguesa, Evereste, também conhecido no Nepal como Sagarmāthā, no Tibete como Chomolungma e Zhūmùlǎngmǎ Fēng em chinês, é a montanha de maior altitude da Terra. Seu pico está a 8 848,86 metros acima do nível do mar, na subcordilheira Mahalangur Himal dos Himalaias.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 7) {
              alert(
                `Krakatoa ou Cracatoa é uma ilha vulcânica situada no estreito de Sunda entre as ilhas de Java e Sumatra, na província indonésia de Lampung.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 8) {
              alert(
                `A translação da Terra é o movimento que a Terra realiza ao redor do Sol a uma distância aproximada de 1 unidade astronômica, ou 149 597 870 700 metros. Uma translação completa ao redor do Sol leva 1 ano sideral ou 365,256363 dias solares a uma velocidade orbital média de 29,78 km/s.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 9) {
              alert(
                `Estação Espacial Internacional é um laboratório espacial completamente concluído, cuja montagem em órbita começou em 1998 e terminou oficialmente em 8 de julho de 2011 na missão STS-135, com o ônibus espacial Atlantis`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 10) {
              alert(
                `Vácuo é geralmente definido como espaço vazio, ou espaço absolutamente desprovido de matéria. No meio industrial vácuo é considerado um espaço parcialmente esvaziado (até o mais alto grau possível), através de meios artificiais, como por uma bomba de ar.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 11) {
              alert(
                `Lua é o único satélite natural da Terra e o quinto maior do Sistema Solar. Ela se formou, há aproximadamente 4,5 bilhões de anos, do impacto de um grande corpo celeste com o planeta, e desde então realiza a sua órbita ao redor dele e também do Sol.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 12) {
              alert(
                `O Sol é a estrela central do Sistema Solar. Todos os outros corpos do Sistema Solar, como planetas, planetas anões, asteroides, cometas e poeira, bem como todos os satélites associados a estes corpos, giram ao seu redor.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 13) {
              alert(
                `Um exoplaneta ou planeta extrassolar é um planeta fora do Sistema Solar. A primeira evidência possível de um exoplaneta foi observada em 1917, mas não foi reconhecida como tal. A primeira confirmação da detecção ocorreu em 1992. Um planeta diferente, detectado inicialmente em 1988, foi confirmado em 2003.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            } else if (PainelDeTreinamentoSobre === 14) {
              alert(
                `As galáxias são conjuntos de estrelas, poeira, gases e matéria escura que formam o Universo. Elas podem ser elípticas, espirais, como a Via Láctea, ou possuir forma irregular. Galáxia do Triângulo ou Messier 33. As galáxias são sistemas formados por milhares a trilhões de estrelas, poeira, gases e matéria escura.`
              );
              RepetidorSobre = confirm(
                `Deseja saber mais sobre as áreas de treinamentos?`
              );
            }
            if (PainelDeTreinamento === 16) {
              Repetidor = false;
              alert(`Voltando...`);
            }
          } while (RepetidorSobre === true);
        }
      } while (Repetidor === true);
    } else if (PainelDeControle === 2) {
      if (Elemento === `Fogo`) {
        let ClasseEscolhida = ``;
        let ClasseRepetidora = true;

        do {
          ClasseEscolhida = prompt(`Escolha sua classe
          1- Ofensiva
          2- Defensiva
          3- Equilíbrio
          4- Ver Sobre As Classes`);

          ClasseEscolhida = parseInt(ClasseEscolhida);

          if (
            isNaN(ClasseEscolhida) ||
            ClasseEscolhida >= 5 ||
            ClasseEscolhida <= 0
          ) {
            alert(`Digite somente números de 1 a 4`);
          }

          switch (ClasseEscolhida) {
            case 1:
              let ClasseOfensiva = ``;
              let NomeDesconhecido = `???`;
              let PoderRepetidor = true;

              do {
                ClasseOfensiva = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50)
                2- Adaptação Aquática (Nível Requirido: 250)
                3- Amplificação De Água (Nível Requirido: 2.500)
                4- Andar Sobre a Água (Nível Requirido: 7.500)
                5- Solidificação De Água (Nível Requirido: 45.000)
                6- Manipulação Completa Sobre a Água (Nível Requirido: 150.000)
                7- Treinamento
                8- Ver Sobre Habilidades`);
                ClasseOfensiva = parseInt(ClasseOfensiva);
                if (
                  isNaN(ClasseOfensiva) ||
                  ClasseOfensiva >= 9 ||
                  ClasseOfensiva <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseOfensiva === 7) {
                  let RepetidorTreinamentoPoder = true;

                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                    1- Chuveiro (Nivel Requirido: 0)
                    2- Piscina (Nivel Requirido: 30)
                    3- Cachoeira (Nivel Requirido: 370)
                    4- Rio (Nivel Requirido: 3.890)
                    5- Oceano (Nivel Requirido: 14.980)
                    6- ${NomeDesconhecido} (Nivel Requirido: 54.769
                    7- Voltar
                    Poder Espiritual: ${PoderEspiritual}`);

                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 6`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                      Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      alert(`Você treinou seu poder de água dentro de uma Piscina
                      Você upou 62 níveis`);
                      PoderEspiritual += 62;
                    } else if (PoderEscolhido === 3) {
                      alert(`Você treinou seu poder de água dentro de uma Cachoeira
                      Você upou 367 níveis`);
                      PoderEspiritual += 367;
                    } else if (PoderEscolhido === 4) {
                      alert(`Você treinou seu poder de água dentro de um Rio
                      Você upou 1.479 níveis`);
                      PoderEspiritual += 1479;
                    } else if (PoderEscolhido === 5) {
                      alert(`Você treinou seu poder de água dentro de um Oceano
                      Você upou 7.937 níveis`);
                      PoderEspiritual += 7937;
                    } else if (PoderEscolhido === 6) {
                      alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                      Você upou 31.897 níveis`);
                      PoderEspiritual += 31897;
                      NomeDesconhecido = `Fonte De Poder Aquático`;
                    }
                    else if (PoderEscolhido === 7) { 
                      RepetidorTreinamentoPoder = false
                      alert(`Voltando...`)
                     }
                  } while (RepetidorTreinamentoPoder === true);
                }
              } while (PoderRepetidor === true);
          }
        } while (ClasseRepetidora === true);
      } else if (Elemento === `Água`) {
      } else if (Elemento === `Vento`) {
      } else if (Elemento === `Terra`) {
      }
    }
  }
} while (Continuar === true);

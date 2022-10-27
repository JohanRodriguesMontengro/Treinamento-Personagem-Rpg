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
  let habilidadeCuriosidade = false;
  let Classes = ``;
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
      let Bloqueadores = {
        BloqueadorNome1: `Bloqueado`,
        BloqueadorNome2: `Bloqueado`,
        BloqueadorNome3: `Bloqueado`,
        BloqueadorNome4: `Bloqueado`,
        BloqueadorNome5: `Bloqueado`,
        BloqueadorNome6: `Bloqueado`,
        BloqueadorNome7: `Bloqueado`,
        BloqueadorNome8: `Bloqueado`,
        BloqueadorNome9: `Bloqueado`,
        BloqueadorNome10: `Bloqueado`,
        BloqueadorNome11: `Bloqueado`,
        BloqueadorNome12: `Bloqueado`,
        BloqueadorNome13: `Bloqueado`
      };
      do {
        PainelDeTreinamento = prompt(`
        1- Academia (Nivel Requirido: 0)
        2- Cachoeira Do Sul (Nivel Requirido: 15 (${Bloqueadores.BloqueadorNome1}))
        3- Neuschwanstein (Nivel Requirido: 163 (${Bloqueadores.BloqueadorNome2}))
        4- Fukushima (Nivel Requirido: 534 (${Bloqueadores.BloqueadorNome3}))
        5- Fossa Das Marianas (Nivel Requirido: 4.592 (${Bloqueadores.BloqueadorNome4}))
        6- Monte Everest (Nivel Requirido: 8.849 (${Bloqueadores.BloqueadorNome5}))
        7- Krakatoa (Nivel Requirido: 15.867 (${Bloqueadores.BloqueadorNome6}))
        8- Orbita Da Terra (Nivel Requirido: 35.795 (${Bloqueadores.BloqueadorNome7}))
        9- Estação Espacial Internacional (Nivel Requirido: 78.583 (${Bloqueadores.BloqueadorNome8}))
        10- Vácuo Do Espaço (Nivel Requirido: 278.945 (${Bloqueadores.BloqueadorNome9}))
        11- Lua Terrestre(Nivel Requirido: 608.842 (${Bloqueadores.BloqueadorNome10}))
        12- Sol (Nivel Requirido: 1.598.378 (${Bloqueadores.BloqueadorNome11}))
        13- Fora Do Sistema Solar (Nivel Requirido: 14.759.645 (${Bloqueadores.BloqueadorNome12}))
        14- Fora Da Via Láctea (Nivel Requirido: 329.574.297 (${Bloqueadores.BloqueadorNome13}))
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
        if (PainelDeTreinamento === 2) {
          if (NivelPersonagem >= 15) {
            alert(`Você ficou treinando na Cachoeira Do Sul durante 6 horas
          Você evolui 16 níveis`);
            NivelPersonagem += 16;
            Bloqueadores.BloqueadorNome1 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 3) {
          if (NivelPersonagem >= 163) {
            alert(`Você ficou treinando em Neuschwanstein durante 3 horas
          Você evolui 51 níveis`);
            NivelPersonagem += 51;
            Bloqueadores.BloqueadorNome2 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 4) {
          if (NivelPersonagem >= 534) {
            alert(`Você ficou treinando em Fukushima durante 6 horas
          Você evolui 93 níveis`);
            NivelPersonagem += 93;
            Bloqueadores.BloqueadorNome3 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 5) {
          if (NivelPersonagem >= 4592) {
            alert(`Você ficou treinando na Fossa Das Marianas durante 6 horas
          Você evolui 126 níveis`);
            NivelPersonagem += 126;
            Bloqueadores.BloqueadorNome4 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 6) {
          if (NivelPersonagem >= 8849) {
            alert(`Você ficou treinando no Monte Everest durante 2 horas
          Você evolui 379 níveis`);
            NivelPersonagem += 379;
            Bloqueadores.BloqueadorNome5 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 7) {
          if (NivelPersonagem >= 15867) {
            alert(`Você ficou treinando em Krakatoa durante 1 horas
          Você evolui 731 níveis`);
            NivelPersonagem += 731;
            Bloqueadores.BloqueadorNome6 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 8) {
          if (NivelPersonagem >= 35795) {
            alert(`Você ficou treinando na Orbita Da Terra durante 30 Minutos
          Você evolui 1.893 níveis`);
            NivelPersonagem += 1893;
            Bloqueadores.BloqueadorNome7 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 9) {
          if (NivelPersonagem >= 78583) {
            alert(`Você ficou treinando na Estação Espacial Internacional durante 5 horas
          Você evolui 3.126 níveis`);
            NivelPersonagem += 3126;
            Bloqueadores.BloqueadorNome8 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 10) {
          if (NivelPersonagem >= 278945) {
            alert(`Você ficou treinando no Vácuo Do Espaço durante 2 horas
          Você evolui 8.542 níveis`);
            NivelPersonagem += 8542;
            Bloqueadores.BloqueadorNome9 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 11) {
          if (NivelPersonagem >= 608842) {
            alert(`Você ficou treinando na Lua Terrestre durante 6 horas
          Você evolui 18.479 níveis`);
            NivelPersonagem += 18479;
            Bloqueadores.BloqueadorNome10 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 12) {
          if (NivelPersonagem >= 1598378) {
            alert(`Você ficou treinando no Sol durante 1 horas
          Você evolui 281.371 níveis`);
            NivelPersonagem += 281371;
            Bloqueadores.BloqueadorNome11 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 13) {
          if (NivelPersonagem >= 14759645) {
            alert(`Você ficou treinando Fora Do Sistema Solar durante 30 Minutos
          Você evolui 9.421.673 níveis`);
            NivelPersonagem += 9421673;
            Bloqueadores.BloqueadorNome12 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
        }
        if (PainelDeTreinamento === 14) {
          if (NivelPersonagem >= 329574297) {
            alert(`Você ficou treinando Fora Da Via Láctea durante 6 horas
          Você evolui 41.845.176 níveis`);
            NivelPersonagem += 41845176;
            Bloqueadores.BloqueadorNome13 = `Desbloqueado`;
          } else {
            alert(`Seu nível não é suficiente para esse tipo de treinamento
            Seu nível atual é de: ${NivelPersonagem}`);
          }
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
      if (Elemento === `Água`) {
        let ClasseEscolhida = ``;
        let ClasseRepetidora = true;
        let Bloqueadores = {
          BloqueadorEspiritual1: `Bloqueado`,
          BloqueadorEspiritual2: `Bloqueado`,
          BloqueadorEspiritual3: `Bloqueado`,
          BloqueadorEspiritual4: `Bloqueado`,
          BloqueadorEspiritual5: `Bloqueado`,
          BloqueadorEspiritual6: `Bloqueado`
        };

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
              let ClasseOfensiva = `.`;
              let NomeDesconhecido = `???`;
              let PoderRepetidor = true;

              do {
                ClasseOfensiva = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${Bloqueadores.BloqueadorEspiritual1}))
                2- Adaptação Aquática (Nível Requirido: 250 (${Bloqueadores.BloqueadorEspiritual2}))
                3- Amplificação De Água (Nível Requirido: 2.500 (${Bloqueadores.BloqueadorEspiritual3}))
                4- Andar Sobre a Água (Nível Requirido: 7.500 (${Bloqueadores.BloqueadorEspiritual4}))
                5- Solidificação De Água (Nível Requirido: 45.000 (${Bloqueadores.BloqueadorEspiritual5}))
                6- ${NomeDesconhecido} (Nível Requirido: 150.000 (${Bloqueadores.BloqueadorEspiritual6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseOfensiva = parseInt(ClasseOfensiva);
                if (
                  isNaN(ClasseOfensiva) ||
                  ClasseOfensiva >= 9 ||
                  ClasseOfensiva <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseOfensiva === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual1 = `Desbloqueado`;
                  }
                } else if (ClasseOfensiva === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Adaptação Aquática foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual2 = `Desbloqueado`;
                  }
                } else if (ClasseOfensiva === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Amplificação De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual3 = `Desbloqueado`;
                  }
                } else if (ClasseOfensiva === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Andar Sobre a Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual4 = `Desbloqueado`;
                  }
                } else if (ClasseOfensiva === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(
                      `A habilidade Solidificação De Água foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual5 = `Desbloqueado`;
                  }
                } else if (ClasseOfensiva === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Manipulação Completa Sobre a Água foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual6 = `Desbloqueado`;
                    NomeDesconhecido = `Manipulação Completa Sobre a Água`;
                  }
                } else if (ClasseOfensiva === 7) {
                  let RepetidorTreinamentoPoder = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoder = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoder === true);
                }
              } while (PoderRepetidor === true);
              break;
            case 2:
              let ClasseDefensiva = `.`;
              let NomeDesconhecidoDefensiva = `???`;
              let PoderRepetidorDefensiva = true;

              do {
                ClasseDefensiva = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${Bloqueadores.BloqueadorEspiritual1}))
                2- Defesa Aquacinética (Nível Requirido: 250 (${Bloqueadores.BloqueadorEspiritual2}))
                3- Defesa Hidrocinética (Nível Requirido: 2.500 (${Bloqueadores.BloqueadorEspiritual3}))
                4- Exoesqueleto De Água (Nível Requirido: 7.500 (${Bloqueadores.BloqueadorEspiritual4}))
                5- Andar Sobre As Águas (Nível Requirido: 45.000 (${Bloqueadores.BloqueadorEspiritual5}))
                6- ${NomeDesconhecidoDefensiva} (Nível Requirido: 150.000 (${Bloqueadores.BloqueadorEspiritual6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseDefensiva = parseInt(ClasseDefensiva);
                if (
                  isNaN(ClasseDefensiva) ||
                  ClasseDefensiva >= 9 ||
                  ClasseDefensiva <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseDefensiva === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual1 = `Desbloqueado`;
                  }
                } else if (ClasseDefensiva === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Defesa Aquacinética foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual2 = `Desbloqueado`;
                  }
                } else if (ClasseDefensiva === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Defesa Hidrocinética foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual3 = `Desbloqueado`;
                  }
                } else if (ClasseDefensiva === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Exoesqueleto De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual4 = `Desbloqueado`;
                  }
                } else if (ClasseDefensiva === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(`A habilidade Andar Sobre As Águas foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual5 = `Desbloqueado`;
                  }
                } else if (ClasseDefensiva === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Criação Divina da Parede Aquática foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual6 = `Desbloqueado`;
                    NomeDesconhecidoDefensiva = `Criação Divina da Parede Aquática`;
                  }
                } else if (ClasseDefensiva === 7) {
                  let RepetidorTreinamentoPoderDefensiva = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoderDefensiva = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoderDefensiva === true);
                }
              } while (PoderRepetidorDefensiva === true);
              break;
            case 3:
              let ClasseEquilibrada = `.`;
              let NomeDesconhecidoEquilibrada = `???`;
              let PoderRepetidorEquilibrada = true;

              do {
                ClasseEquilibrada = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${Bloqueadores.BloqueadorEspiritual1}))
                2- Defesa Aquacinética (Nível Requirido: 250 (${Bloqueadores.BloqueadorEspiritual2}))
                3- Amplificação De Água (Nível Requirido: 2.500 (${Bloqueadores.BloqueadorEspiritual3}))
                4- Exoesqueleto De Água (Nível Requirido: 7.500 (${Bloqueadores.BloqueadorEspiritual4}))
                5- Solidificação De Água (Nível Requirido: 45.000 (${Bloqueadores.BloqueadorEspiritual5}))
                6- ${NomeDesconhecidoEquilibrada} (Nível Requirido: 150.000 (${Bloqueadores.BloqueadorEspiritual6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseEquilibrada = parseInt(ClasseEquilibrada);
                if (
                  isNaN(ClasseEquilibrada) ||
                  ClasseEquilibrada >= 9 ||
                  ClasseEquilibrada <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseEquilibrada === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual1 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Defesa Aquacinética foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual2 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Amplificação De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual3 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Exoesqueleto De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual4 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(
                      `A habilidade Solidificação De Água foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual5 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Ataque Supremo Do Rei Dos Mares foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual6 = `Desbloqueado`;
                    NomeDesconhecidoEquilibrada = `Ataque Supremo Do Rei Dos Mares`;
                  }
                } else if (ClasseEquilibrada === 7) {
                  let RepetidorTreinamentoPoderEquilibrada = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoderEquilibrada = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoderEquilibrada === true);
                }
              } while (PoderRepetidorEquilibrada === true);
              break;
            case 4:
              Classes = ``;
              let ClassesRepetidor = true;
              let InformacoesClasses = ``;
              let HabilidadeDesconhecida;
              do {
                let Classes = prompt(`Qual classe gostaria de saber sobre?
                1- Ofensiva
                2- Defensiva
                3- Equilíbrio
                4- Voltar`);

                if (isNaN(Classes) || Classes >= 5 || Classes <= 0) {
                  alert(`Digite somente números entre 1 a 4`);
                } else if (Classes === 1) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                  1- Hálito De Água (Nível Requirido: 50)
                2- Adaptação Aquática (Nível Requirido: 250)
                3- Amplificação De Água (Nível Requirido: 2.500)
                4- Andar Sobre a Água (Nível Requirido: 7.500)
                5- Solidificação De Água (Nível Requirido: 45.000)
                6- ${HabilidadeDesconhecida} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de sobreviver plenamente e ter sua fisiologia adaptada a ambientes subaquáticos, sendo capaz de permanecer submerso tão confortavelmente quanto qualquer ser marinho, com capacidades como a de respirar debaixo d'água, nadar a velocidades maiores que a de um ser humano comum e até mesmo resistir à alta pressão submarina e a águas em temperaturas extremas. Além disso, ele possui sentidos perfeitamente funcionais, sem que a distorção da água os atrapalhe, podendo, por exemplo, ignorar impurezas que normalmente reduziriam sua visibilidade.O usuário tem o poder de aumentar as quantidades da água e todos os poderes e aspectos relacionados ao elemento água, potenciando ao ponto de causar grandes barreiras de água, ondas, correntes de água, etc.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O  usuário tem o poder de aumentar as quantidades da água e todos os poderes e aspectos relacionados ao elemento água, potenciando ao ponto de causar grandes barreiras de água, ondas, correntes de água, etc.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `de andar na superfície da água. Pode ser obtida pela Super Velocidade. O usuário é capaz de andar, correr e ficar parado na superfície da água, o fazendo como se a mesma estivesse em estado`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(
                        `O usuário é capaz de solidificar a água como uma rocha extremamente resistente`
                      );
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 2) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                    1- Hálito De Água (Nível Requirido: 50)
                    2- Defesa Aquacinética (Nível Requirido: 250)
                    3- Defesa Hidrocinética (Nível Requirido: 2.500)
                    4- Exoesqueleto De Água (Nível Requirido: 7.500)
                    5- Andar Sobre As Águas (Nível Requirido: 45.000)
                    6- ${NomeDesconhecidoDefensiva} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `O usuário possui a capacidade de formar uma espécie de armadura feita de água à volta do próprio corpo para proteção ou para melhorar a condição física. Com treino, o usuário pode manipular a armadura para formar construtos ou usá-la para teletransporte.`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(`O usuário é capaz de andar, correr e ficar parado na superfície da água, o fazendo como se a mesma estivesse em estado sólido.

                      A caminhada pela superfície hídrica pode ser obtida também quando se atinge altas velocidades. Por isso, quando estes tipos de usuários a utilizam não podem diminuir sua velocidade ou parar de correr.`);
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 3) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                    1- Hálito De Água (Nível Requirido: 50)
                2- Defesa Aquacinética (Nível Requirido: 250)
                3- Amplificação De Água (Nível Requirido: 2.500)
                4- Exoesqueleto De Água (Nível Requirido: 7.500)
                5- Solidificação De Água (Nível Requirido: 45.000)
                6- ${NomeDesconhecidoEquilibrada} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `O usuário possui a capacidade de formar uma espécie de armadura feita de água à volta do próprio corpo para proteção ou para melhorar a condição física. Com treino, o usuário pode manipular a armadura para formar construtos ou usá-la para teletransporte.`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(
                        `O usuário é capaz de solidificar a água como uma rocha extremamente resistente`
                      );
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 4) {
                  alert(`Voltando...`);
                  ClassesRepetidor = false;
                }
              } while (ClassesRepetidor === true);
          }
        } while (ClasseRepetidora === true);
      } else if (Elemento === `Fogo`) {
        let ClasseEscolhidaFogo = ``;
        let ClasseRepetidoraFogo = true;
        let BloqueadoresFogo = {
          BloqueadorEspiritualFogo1: `Bloqueado`,
          BloqueadorEspiritualFogo2: `Bloqueado`,
          BloqueadorEspiritualFogo3: `Bloqueado`,
          BloqueadorEspiritualFogo4: `Bloqueado`,
          BloqueadorEspiritualFogo5: `Bloqueado`,
          BloqueadorEspiritualFogo6: `Bloqueado`
        };

        do {
          ClasseEscolhidaFogo = prompt(`Escolha sua classe
          1- Ofensiva
          2- Defensiva
          3- Equilíbrio
          4- Ver Sobre As Classes`);

          ClasseEscolhidaFogo = parseInt(ClasseEscolhidaFogo);

          if (
            isNaN(ClasseEscolhidaFogo) ||
            ClasseEscolhidaFogo >= 5 ||
            ClasseEscolhidaFogo <= 0
          ) {
            alert(`Digite somente números de 1 a 4`);
          }

          switch (ClasseEscolhidaFogo) {
            case 1:
              let ClasseOfensivaFogo = `.`;
              let NomeDesconhecidoFogo = `???`;
              let PoderRepetidorFogo = true;

              do {
                ClasseOfensivaFogo = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${Bloqueadores.BloqueadorEspiritual1}))
                2- Adaptação Aquática (Nível Requirido: 250 (${Bloqueadores.BloqueadorEspiritual2}))
                3- Amplificação De Água (Nível Requirido: 2.500 (${Bloqueadores.BloqueadorEspiritual3}))
                4- Andar Sobre a Água (Nível Requirido: 7.500 (${Bloqueadores.BloqueadorEspiritual4}))
                5- Solidificação De Água (Nível Requirido: 45.000 (${Bloqueadores.BloqueadorEspiritual5}))
                6- ${NomeDesconhecidoFogo} (Nível Requirido: 150.000 (${Bloqueadores.BloqueadorEspiritual6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseOfensivaFogo = parseInt(ClasseOfensivaFogo);
                if (
                  isNaN(ClasseOfensivaFogo) ||
                  ClasseOfensivaFogo >= 9 ||
                  ClasseOfensivaFogo <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseOfensivaFogo === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual1 = `Desbloqueado`;
                  }
                } else if (ClasseOfensivaFogo === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Adaptação Aquática foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual2 = `Desbloqueado`;
                  }
                } else if (ClasseOfensivaFogo === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Amplificação De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual3 = `Desbloqueado`;
                  }
                } else if (ClasseOfensivaFogo === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Andar Sobre a Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual4 = `Desbloqueado`;
                  }
                } else if (ClasseOfensivaFogo === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(
                      `A habilidade Solidificação De Água foi desbloqueada`
                    );
                    BloqueadoresFogo.BloqueadorEspiritualFogo5 = `Desbloqueado`;
                  }
                } else if (ClasseOfensivaFogo === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Manipulação Completa Sobre a Água foi desbloqueada`
                    );
                    BloqueadoresFogo.BloqueadorEspiritualFogo6 = `Desbloqueado`;
                    NomeDesconhecidoFogo = `Manipulação Completa Sobre a Água`;
                  }
                } else if (ClasseOfensivaFogo === 7) {
                  let RepetidorTreinamentoPoderFogo = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoder = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoderFogo === true);
                }
              } while (PoderRepetidorFogo === true);
              break;
            case 2:
              let ClasseDefensivaFogo = `.`;
              let NomeDesconhecidoDefensivaFogo = `???`;
              let PoderRepetidorDefensivaFogo = true;

              do {
                ClasseDefensivaFogo = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${BloqueadoresFogo.BloqueadorEspiritualFogo1}))
                2- Defesa Aquacinética (Nível Requirido: 250 (${BloqueadoresFogo.BloqueadorEspiritualFogo2}))
                3- Defesa Hidrocinética (Nível Requirido: 2.500 (${BloqueadoresFogo.BloqueadorEspiritualFogo3}))
                4- Exoesqueleto De Água (Nível Requirido: 7.500 (${BloqueadoresFogo.BloqueadorEspiritualFogo4}))
                5- Andar Sobre As Águas (Nível Requirido: 45.000 (${BloqueadoresFogo.BloqueadorEspiritualFogo5}))
                6- ${NomeDesconhecidoDefensivaFogo} (Nível Requirido: 150.000 (${BloqueadoresFogo.BloqueadorEspiritualFogo6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseDefensivaFogo = parseInt(ClasseDefensivaFogo);
                if (
                  isNaN(ClasseDefensivaFogo) ||
                  ClasseDefensivaFogo >= 9 ||
                  ClasseDefensivaFogo <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseDefensivaFogo === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    BloqueadoresFogo.BloqueadorEspiritualFogo1 = `Desbloqueado`;
                  }
                } else if (ClasseDefensivaFogo === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Defesa Aquacinética foi desbloqueada`);
                    BloqueadoresFogo.BloqueadorEspiritualFogo2 = `Desbloqueado`;
                  }
                } else if (ClasseDefensivaFogo === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Defesa Hidrocinética foi desbloqueada`);
                    BloqueadoresFogo.BloqueadorEspiritualFogo3 = `Desbloqueado`;
                  }
                } else if (ClasseDefensivaFogo === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Exoesqueleto De Água foi desbloqueada`);
                    BloqueadoresFogo.BloqueadorEspiritualFogo4 = `Desbloqueado`;
                  }
                } else if (ClasseDefensivaFogo === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(`A habilidade Andar Sobre As Águas foi desbloqueada`);
                    BloqueadoresFogo.BloqueadorEspiritualFogo5 = `Desbloqueado`;
                  }
                } else if (ClasseDefensivaFogo === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Criação Divina da Parede Aquática foi desbloqueada`
                    );
                    BloqueadoresFogo.BloqueadorEspiritualFogo6 = `Desbloqueado`;
                    NomeDesconhecidoDefensivaFogo = `Criação Divina da Parede Aquática`;
                  }
                } else if (ClasseDefensivaFogo === 7) {
                  let RepetidorTreinamentoPoderDefensivaFogo = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoderDefensivaFogo = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoderDefensivaFogo === true);
                }
              } while (PoderRepetidorDefensivaFogo === true);
              break;
            case 3:
              let ClasseEquilibrada = `.`;
              let NomeDesconhecidoEquilibrada = `???`;
              let PoderRepetidorEquilibrada = true;

              do {
                ClasseEquilibrada = prompt(`Desbloqueie ataques de água
                1- Hálito De Água (Nível Requirido: 50 (${BloqueadoresFogo.BloqueadorEspiritualFogo1}))
                2- Defesa Aquacinética (Nível Requirido: 250 (${BloqueadoresFogo.BloqueadorEspiritualFogo2}))
                3- Amplificação De Água (Nível Requirido: 2.500 (${BloqueadoresFogo.BloqueadorEspiritualFogo3}))
                4- Exoesqueleto De Água (Nível Requirido: 7.500 (${BloqueadoresFogo.BloqueadorEspiritualFogo4}))
                5- Solidificação De Água (Nível Requirido: 45.000 (${BloqueadoresFogo.BloqueadorEspiritualFogo5}))
                6- ${NomeDesconhecidoEquilibrada} (Nível Requirido: 150.000 (${BloqueadoresFogo.BloqueadorEspiritualFogo6}))
                7- Treinamento
                8- Ver Sobre as Habilidades
                Poder Espiritual: ${PoderEspiritual}`);
                ClasseEquilibrada = parseInt(ClasseEquilibrada);
                if (
                  isNaN(ClasseEquilibrada) ||
                  ClasseEquilibrada >= 9 ||
                  ClasseEquilibrada <= 0
                ) {
                  alert(`Digite somente números de 1 a 8`);
                } else if (ClasseEquilibrada === 1) {
                  if (PoderEspiritual >= 50) {
                    alert(`A habilidade Hálito De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual1 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 2) {
                  if (PoderEspiritual >= 250) {
                    alert(`A habilidade Defesa Aquacinética foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual2 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 3) {
                  if (PoderEspiritual >= 2500) {
                    alert(`A habilidade Amplificação De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual3 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 4) {
                  if (PoderEspiritual >= 7500) {
                    alert(`A habilidade Exoesqueleto De Água foi desbloqueada`);
                    Bloqueadores.BloqueadorEspiritual4 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 5) {
                  if (PoderEspiritual >= 45000) {
                    alert(
                      `A habilidade Solidificação De Água foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual5 = `Desbloqueado`;
                  }
                } else if (ClasseEquilibrada === 6) {
                  if (PoderEspiritual >= 150000) {
                    alert(
                      `A habilidade Ataque Supremo Do Rei Dos Mares foi desbloqueada`
                    );
                    Bloqueadores.BloqueadorEspiritual6 = `Desbloqueado`;
                    NomeDesconhecidoEquilibrada = `Ataque Supremo Do Rei Dos Mares`;
                  }
                } else if (ClasseEquilibrada === 7) {
                  let RepetidorTreinamentoPoderEquilibrada = true;
                  do {
                    PoderEscolhido = prompt(`Escolha seu local de treinamento
                  1- Chuveiro (Nivel Requirido: 0)
                  2- Piscina (Nivel Requirido: 30)
                  3- Cachoeira (Nivel Requirido: 370)
                  4- Rio (Nivel Requirido: 3.890)
                  5- Oceano (Nivel Requirido: 14.980)
                  6- Fonte De Poder Aquático (Nivel Requirido: 54.769)
                  7- Voltar
                  Poder Espiritual: ${PoderEspiritual}`);
                    PoderEscolhido = parseInt(PoderEscolhido);
                    if (
                      isNaN(PoderEscolhido) ||
                      PoderEscolhido >= 8 ||
                      PoderEscolhido <= 0
                    ) {
                      alert(`Digite somente números de 1 a 7`);
                    }
                    if (PoderEscolhido === 1) {
                      alert(`Você treinou seu poder de água debaixo do Chuveiro
                    Você upou 3 níveis`);
                      PoderEspiritual += 3;
                    } else if (PoderEscolhido === 2) {
                      if (PoderEspiritual >= 30) {
                        alert(`Você treinou seu poder de água dentro de uma Piscina
                    Você upou 62 níveis`);
                        PoderEspiritual += 62;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 3) {
                      if (PoderEspiritual >= 370) {
                        alert(`Você treinou seu poder de água dentro de uma Cachoeira
                    Você upou 367 níveis`);
                        PoderEspiritual += 367;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 4) {
                      if (PoderEspiritual >= 3890) {
                        alert(`Você treinou seu poder de água dentro de um Rio
                    Você upou 1.479 níveis`);
                        PoderEspiritual += 1479;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 5) {
                      if (PoderEspiritual >= 14980) {
                        alert(`Você treinou seu poder de água dentro de um Oceano
                    Você upou 7.937 níveis`);
                        PoderEspiritual += 7937;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 6) {
                      if (PoderEspiritual >= 54769) {
                        alert(`Você treinou seu poder de água dentro da Fonte De Poder Aquático
                    Você upou 31.897 níveis`);
                        PoderEspiritual += 31897;
                      } else {
                        alert(`Nível insuficiente`);
                      }
                    } else if (PoderEscolhido === 7) {
                      RepetidorTreinamentoPoderEquilibrada = false;
                      alert(`Voltando...`);
                    }
                  } while (RepetidorTreinamentoPoderEquilibrada === true);
                }
              } while (PoderRepetidorEquilibrada === true);
              break;
            case 4:
              Classes = ``;
              let ClassesRepetidor = true;
              let InformacoesClasses = ``;
              let HabilidadeDesconhecida;
              do {
                let Classes = prompt(`Qual classe gostaria de saber sobre?
                1- Ofensiva
                2- Defensiva
                3- Equilíbrio
                4- Voltar`);

                if (isNaN(Classes) || Classes >= 5 || Classes <= 0) {
                  alert(`Digite somente números entre 1 a 4`);
                } else if (Classes === 1) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                  1- Hálito De Água (Nível Requirido: 50)
                2- Adaptação Aquática (Nível Requirido: 250)
                3- Amplificação De Água (Nível Requirido: 2.500)
                4- Andar Sobre a Água (Nível Requirido: 7.500)
                5- Solidificação De Água (Nível Requirido: 45.000)
                6- ${HabilidadeDesconhecida} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de sobreviver plenamente e ter sua fisiologia adaptada a ambientes subaquáticos, sendo capaz de permanecer submerso tão confortavelmente quanto qualquer ser marinho, com capacidades como a de respirar debaixo d'água, nadar a velocidades maiores que a de um ser humano comum e até mesmo resistir à alta pressão submarina e a águas em temperaturas extremas. Além disso, ele possui sentidos perfeitamente funcionais, sem que a distorção da água os atrapalhe, podendo, por exemplo, ignorar impurezas que normalmente reduziriam sua visibilidade.O usuário tem o poder de aumentar as quantidades da água e todos os poderes e aspectos relacionados ao elemento água, potenciando ao ponto de causar grandes barreiras de água, ondas, correntes de água, etc.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O  usuário tem o poder de aumentar as quantidades da água e todos os poderes e aspectos relacionados ao elemento água, potenciando ao ponto de causar grandes barreiras de água, ondas, correntes de água, etc.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `de andar na superfície da água. Pode ser obtida pela Super Velocidade. O usuário é capaz de andar, correr e ficar parado na superfície da água, o fazendo como se a mesma estivesse em estado`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(
                        `O usuário é capaz de solidificar a água como uma rocha extremamente resistente`
                      );
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 2) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                    1- Hálito De Água (Nível Requirido: 50)
                    2- Defesa Aquacinética (Nível Requirido: 250)
                    3- Defesa Hidrocinética (Nível Requirido: 2.500)
                    4- Exoesqueleto De Água (Nível Requirido: 7.500)
                    5- Andar Sobre As Águas (Nível Requirido: 45.000)
                    6- ${NomeDesconhecidoDefensiva} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `O usuário possui a capacidade de formar uma espécie de armadura feita de água à volta do próprio corpo para proteção ou para melhorar a condição física. Com treino, o usuário pode manipular a armadura para formar construtos ou usá-la para teletransporte.`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(`O usuário é capaz de andar, correr e ficar parado na superfície da água, o fazendo como se a mesma estivesse em estado sólido.

                      A caminhada pela superfície hídrica pode ser obtida também quando se atinge altas velocidades. Por isso, quando estes tipos de usuários a utilizam não podem diminuir sua velocidade ou parar de correr.`);
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 3) {
                  let Repetidor = true;
                  do {
                    InformacoesClasses = prompt(`
                    1- Hálito De Água (Nível Requirido: 50)
                2- Defesa Aquacinética (Nível Requirido: 250)
                3- Amplificação De Água (Nível Requirido: 2.500)
                4- Exoesqueleto De Água (Nível Requirido: 7.500)
                5- Solidificação De Água (Nível Requirido: 45.000)
                6- ${NomeDesconhecidoEquilibrada} (Nível Requirido: 150.000)
                `);
                    InformacoesClasses = parseInt(InformacoesClasses);
                    if (
                      isNaN(InformacoesClasses) ||
                      InformacoesClasses >= 7 ||
                      InformacoesClasses <= 0
                    ) {
                      alert(`Digite somente números entre 1 a 6`);
                    } else if (InformacoesClasses === 1) {
                      alert(
                        `O usuário é capaz de gerar água dentro deles de uma maneira que lhes permita moldar a expiração do efeito. Essas formas podem incluir rajadas, correntes, esferas e até uma névoa da boca.`
                      );
                    } else if (InformacoesClasses === 2) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 3) {
                      alert(
                        `O usuário é capaz de moldar a água e se rodear com ela para se defender e/ou proteger outros indivíduos, criando escudos e barreiras capazes de bloquear os ataques de oponentes, como projéteis, golpes físicos e quase qualquer coisa perigosa que possa os atingir, durante as batalhas.`
                      );
                    } else if (InformacoesClasses === 4) {
                      alert(
                        `O usuário possui a capacidade de formar uma espécie de armadura feita de água à volta do próprio corpo para proteção ou para melhorar a condição física. Com treino, o usuário pode manipular a armadura para formar construtos ou usá-la para teletransporte.`
                      );
                    } else if (InformacoesClasses === 5) {
                      alert(
                        `O usuário é capaz de solidificar a água como uma rocha extremamente resistente`
                      );
                    } else if (InformacoesClasses === 6) {
                      alert(
                        `Essa habilidade é secreta, treine para ela ser descoberta`
                      );
                    }
                  } while (Repetidor === true);
                } else if (Classes === 4) {
                  alert(`Voltando...`);
                  ClassesRepetidor = false;
                }
              } while (ClassesRepetidor === true);
          }
        } while (ClasseRepetidoraFogo === true);
      } else if (Elemento === `Vento`) {
      } else if (Elemento === `Terra`) {
      }
    }
  }
} while (Continuar === true);

// Modificar as frases so Elemento Fogo!!
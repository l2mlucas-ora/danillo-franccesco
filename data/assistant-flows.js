/*
 * Roteiros do assistente de atendimento (sem IA).
 * Cada fluxo é uma lista de passos. Tipos de passo:
 *  - { say: "texto" }                         mensagem do assistente
 *  - { ask: "pergunta", key, options: [...] } resposta por botões
 *  - { ask: "pergunta", key, input: "placeholder", optional? } resposta digitada
 * No final, o assistente monta um resumo e oferece envio por WhatsApp ou e-mail.
 */
window.ASSISTANT = {
  whatsapp: "5511948000631",
  email: "med.producoes@hotmail.com",

  greeting: [
    "Olá! 🎬 Aqui é a equipe do Danillo Franccesco.",
    "Ator, diretor e produtor. Como podemos ajudar?"
  ],

  menu: [
    { id: "publicidade", label: "Publicidade / Marcas", highlight: true },
    { id: "projeto", label: "Projeto audiovisual" },
    { id: "governo", label: "Governo & Institucional" },
    { id: "imprensa", label: "Imprensa" },
    { id: "fa", label: "Sou fã" },
    { id: "faq", label: "Dúvidas rápidas" }
  ],

  flows: {
    publicidade: {
      title: "Publicidade / Marcas",
      steps: [
        { say: "Ótimo! Danillo atua na frente e atrás das câmeras: pode estrelar sua campanha e também dirigir e produzir a peça completa." },
        {
          ask: "Que tipo de ação você procura?",
          key: "Formato",
          options: [
            "Comercial (TV / digital)",
            "Publi no Instagram (Reels / Stories)",
            "Embaixador de marca",
            "Presença em evento",
            "Filme institucional",
            "Campanha completa (atuação + produção)"
          ]
        },
        { ask: "Qual é a empresa ou marca?", key: "Marca", input: "Nome da empresa / marca" },
        {
          ask: "Para quando seria?",
          key: "Prazo",
          options: ["Este mês", "Em 1 a 3 meses", "Acima de 3 meses", "Ainda não definido"]
        },
        {
          ask: "Qual a faixa de investimento prevista?",
          key: "Investimento",
          options: ["Até R$ 5 mil", "R$ 5 a 20 mil", "R$ 20 a 50 mil", "Acima de R$ 50 mil", "Prefiro conversar"]
        },
        { ask: "Conte em poucas palavras o objetivo da campanha.", key: "Objetivo", input: "Ex.: lançamento de produto, awareness…", optional: true },
        { ask: "Por fim, seu nome e cidade?", key: "Contato", input: "Nome — Cidade/UF" }
      ]
    },

    projeto: {
      title: "Projeto audiovisual",
      steps: [
        {
          ask: "Você procura o Danillo para qual função?",
          key: "Função",
          options: ["Ator", "Diretor", "Produtor", "Mais de uma"]
        },
        {
          ask: "Que tipo de obra?",
          key: "Obra",
          options: ["Longa-metragem", "Série / novela", "Curta", "Documentário", "Teatro", "Videoclipe"]
        },
        { ask: "Datas e local previstos?", key: "Datas e local", input: "Ex.: março/2027, São Paulo", optional: true },
        { ask: "Nome da produtora ou do projeto?", key: "Projeto", input: "Produtora / título provisório", optional: true },
        { ask: "Seu nome e função?", key: "Contato", input: "Nome — produtor(a), casting…" }
      ]
    },

    governo: {
      title: "Governo & Institucional",
      steps: [
        { say: "Danillo já produziu documentários e um longa sobre violência doméstica premiado no Brasil e no exterior. Temas sociais são parte do trabalho dele." },
        { ask: "Qual órgão, secretaria ou município?", key: "Órgão", input: "Ex.: Prefeitura de Extrema — Secretaria de Cultura" },
        {
          ask: "Qual o tipo de projeto?",
          key: "Projeto",
          options: [
            "Campanha educativa",
            "Documentário",
            "Filme institucional",
            "Evento / palestra",
            "Exibição de filme + debate",
            "Lei de incentivo / edital"
          ]
        },
        {
          ask: "Prazo previsto?",
          key: "Prazo",
          options: ["Até 1 mês", "1 a 3 meses", "Acima de 3 meses", "A definir"]
        },
        { ask: "Seu nome e cargo?", key: "Contato", input: "Nome — cargo" }
      ]
    },

    imprensa: {
      title: "Imprensa",
      steps: [
        { ask: "Qual o veículo?", key: "Veículo", input: "Jornal, portal, podcast, TV…" },
        {
          ask: "Qual o formato?",
          key: "Formato",
          options: ["Entrevista", "Matéria / perfil", "Participação em programa", "Podcast", "Outro"]
        },
        { ask: "Sobre qual pauta?", key: "Pauta", input: "Ex.: Não Peça Desculpas, Paulo o Apóstolo…" },
        { ask: "Prazo e seu nome?", key: "Contato", input: "Prazo — Nome" }
      ]
    },

    fa: {
      title: "Sou fã",
      steps: [
        { say: "Que bom ter você por aqui! 💛 O Danillo agradece todo o carinho." },
        {
          ask: "O que você gostaria?",
          key: "Pedido",
          options: ["Deixar um recado", "Saber onde assistir", "Seguir nas redes"]
        }
      ],
      branches: {
        "Deixar um recado": [
          { ask: "Escreva seu recado para o Danillo:", key: "Recado", input: "Sua mensagem" },
          { ask: "Seu nome e cidade?", key: "Contato", input: "Nome — Cidade", optional: true }
        ],
        "Saber onde assistir": [
          { say: "📺 Paulo, o Apóstolo: Record, Disney+ e Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (3ª temporada).\n🎬 Toda a filmografia está na seção Trabalhos deste site." },
          { end: "links" }
        ],
        "Seguir nas redes": [
          { say: "Siga @danillofranccesco no Instagram para bastidores e novidades!" },
          { end: "links" }
        ]
      }
    },

    faq: {
      title: "Dúvidas rápidas",
      steps: [
        {
          ask: "Escolha uma dúvida:",
          key: "Dúvida",
          options: ["Faz publi?", "Atende fora de SP/RJ?", "Onde assistir?", "Tem material de casting?"]
        }
      ],
      branches: {
        "Faz publi?": [
          { say: "Sim! Comerciais, publis no Instagram, eventos e embaixador de marca. E como diretor e produtor (MED Produções), pode entregar a peça pronta." },
          { goto: "publicidade", label: "Pedir orçamento de publicidade" }
        ],
        "Atende fora de SP/RJ?": [
          { say: "Sim. Danillo vive entre Rio de Janeiro e São Paulo, tem raízes em Extrema (MG) e atende projetos em todo o Brasil — e também no exterior (inglês fluente)." },
          { end: "menu" }
        ],
        "Onde assistir?": [
          { say: "📺 Paulo, o Apóstolo: Record, Disney+ e Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (3ª temporada)." },
          { end: "menu" }
        ],
        "Tem material de casting?": [
          { say: "Sim! A ficha técnica está na seção Casting deste site, e o perfil completo no Elenco Digital e no IMDb." },
          { end: "links" }
        ]
      }
    }
  }
};

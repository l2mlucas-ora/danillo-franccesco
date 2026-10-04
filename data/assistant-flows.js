/*
 * Roteiros do assistente de atendimento (sem IA), em PT / EN / ES.
 * Cada idioma tem: ui (textos fixos), greeting, menu e flows.
 * Tipos de passo:
 *  - { say: "texto" }                         mensagem do assistente
 *  - { ask: "pergunta", key, options: [...] } resposta por botões
 *  - { ask: "pergunta", key, input: "placeholder", optional? } resposta digitada
 *  - { end: "links" | "menu" }                encerra com atalhos
 *  - { goto: "fluxo", label }                 botão que leva a outro fluxo
 * "branches" continua o fluxo conforme a opção escolhida (a chave é o texto da opção).
 * No final, o assistente monta um resumo e oferece envio por WhatsApp ou e-mail.
 */
window.ASSISTANT = {
  whatsapp: "5511948000631",
  email: "med.producoes@hotmail.com",

  i18n: {
    /* ======================= PORTUGUÊS ======================= */
    pt: {
      ui: {
        fab: "Fale com a equipe",
        fabAria: "Abrir atendimento",
        title: "Equipe Danillo Franccesco",
        status: "Responde pelo WhatsApp",
        restart: "Recomeçar conversa",
        close: "Fechar atendimento",
        back: "Voltar ao menu",
        backReply: "Claro! Em que mais podemos ajudar?",
        skip: "Pular esta pergunta",
        typeHere: "Digite aqui",
        sendAnswer: "Enviar resposta",
        cont: "Continuar",
        summaryIntro: "Perfeito! Confira o resumo e envie para a equipe:",
        sendWa: "Enviar pelo WhatsApp",
        sendMail: "Enviar por e-mail",
        again: "Recomeçar",
        thanks: "Obrigado! 🎬 A equipe responde o mais breve possível.",
        instagram: "Instagram",
        seeWork: "Ver trabalhos",
        msgHello: "Olá! Vim pelo site do Danillo Franccesco.",
        msgSubject: "Assunto",
        mailSubject: "Site"
      },
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
            { ask: "Para quando seria?", key: "Prazo", options: ["Este mês", "Em 1 a 3 meses", "Acima de 3 meses", "Ainda não definido"] },
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
            { ask: "Você procura o Danillo para qual função?", key: "Função", options: ["Ator", "Diretor", "Produtor", "Mais de uma"] },
            { ask: "Que tipo de obra?", key: "Obra", options: ["Longa-metragem", "Série / novela", "Curta", "Documentário", "Teatro", "Videoclipe"] },
            { ask: "Datas e local previstos?", key: "Datas e local", input: "Ex.: março/2027, São Paulo", optional: true },
            { ask: "Nome da produtora ou do projeto?", key: "Projeto", input: "Produtora / título provisório", optional: true },
            { ask: "Seu nome e função?", key: "Contato", input: "Nome — produtor(a), casting…" }
          ]
        },
        governo: {
          title: "Governo & Institucional",
          steps: [
            { say: "Danillo realiza mostras de cinema a céu aberto, workshops de cinema desde 2013 e dirigiu Não Peça Desculpas, longa sobre violência contra a mulher exibido em festivais no Brasil e no exterior." },
            { ask: "Qual órgão, secretaria ou município?", key: "Órgão", input: "Ex.: Prefeitura de Extrema — Secretaria de Cultura" },
            {
              ask: "Qual o tipo de projeto?",
              key: "Projeto",
              options: ["Campanha educativa", "Documentário", "Filme institucional", "Mostra de cinema a céu aberto", "Workshop / oficina de cinema", "Exibição de filme + debate", "Lei de incentivo / edital"]
            },
            { ask: "Prazo previsto?", key: "Prazo", options: ["Até 1 mês", "1 a 3 meses", "Acima de 3 meses", "A definir"] },
            { ask: "Seu nome e cargo?", key: "Contato", input: "Nome — cargo" }
          ]
        },
        imprensa: {
          title: "Imprensa",
          steps: [
            { ask: "Qual o veículo?", key: "Veículo", input: "Jornal, portal, podcast, TV…" },
            { ask: "Qual o formato?", key: "Formato", options: ["Entrevista", "Matéria / perfil", "Participação em programa", "Podcast", "Outro"] },
            { ask: "Sobre qual pauta?", key: "Pauta", input: "Ex.: Não Peça Desculpas, Paulo o Apóstolo…" },
            { ask: "Prazo e seu nome?", key: "Contato", input: "Prazo — Nome" }
          ]
        },
        fa: {
          title: "Sou fã",
          steps: [
            { say: "Que bom ter você por aqui! 💛 O Danillo agradece todo o carinho." },
            { ask: "O que você gostaria?", key: "Pedido", options: ["Deixar um recado", "Saber onde assistir", "Seguir nas redes"] }
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
            { ask: "Escolha uma dúvida:", key: "Dúvida", options: ["Faz publi?", "Atende fora de SP/RJ?", "Onde assistir?", "Tem material de casting?"] }
          ],
          branches: {
            "Faz publi?": [
              { say: "Sim! São mais de 60 publicidades para TV e internet: comerciais, publis no Instagram, eventos e embaixador de marca. E como diretor e produtor (MED Produções), pode entregar a peça pronta." },
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
    },

    /* ======================= ENGLISH ======================= */
    en: {
      ui: {
        fab: "Talk to the team",
        fabAria: "Open chat",
        title: "Danillo Franccesco's team",
        status: "Replies on WhatsApp",
        restart: "Restart conversation",
        close: "Close chat",
        back: "Back to menu",
        backReply: "Sure! What else can we help you with?",
        skip: "Skip this question",
        typeHere: "Type here",
        sendAnswer: "Send answer",
        cont: "Continue",
        summaryIntro: "Great! Review the summary and send it to the team:",
        sendWa: "Send via WhatsApp",
        sendMail: "Send by e-mail",
        again: "Start over",
        thanks: "Thank you! 🎬 The team will reply as soon as possible.",
        instagram: "Instagram",
        seeWork: "See work",
        msgHello: "Hi! I found you through Danillo Franccesco's website.",
        msgSubject: "Subject",
        mailSubject: "Website"
      },
      greeting: [
        "Hi! 🎬 This is Danillo Franccesco's team.",
        "Actor, director and producer. How can we help?"
      ],
      menu: [
        { id: "publicidade", label: "Brands / Advertising", highlight: true },
        { id: "projeto", label: "Film & TV project" },
        { id: "governo", label: "Government & Corporate" },
        { id: "imprensa", label: "Press" },
        { id: "fa", label: "I'm a fan" },
        { id: "faq", label: "Quick questions" }
      ],
      flows: {
        publicidade: {
          title: "Brands / Advertising",
          steps: [
            { say: "Great! Danillo works in front of and behind the camera: he can star in your campaign and also direct and produce the whole piece." },
            {
              ask: "What kind of project are you looking for?",
              key: "Format",
              options: [
                "Commercial (TV / digital)",
                "Instagram content (Reels / Stories)",
                "Brand ambassador",
                "Event appearance",
                "Corporate film",
                "Full campaign (acting + production)"
              ]
            },
            { ask: "What's the company or brand?", key: "Brand", input: "Company / brand name" },
            { ask: "When would it be?", key: "Timeline", options: ["This month", "In 1 to 3 months", "More than 3 months", "Not defined yet"] },
            {
              ask: "What's the expected budget range?",
              key: "Budget",
              options: ["Up to R$ 5k", "R$ 5k to 20k", "R$ 20k to 50k", "Over R$ 50k", "Let's talk"]
            },
            { ask: "Briefly, what's the goal of the campaign?", key: "Goal", input: "E.g. product launch, awareness…", optional: true },
            { ask: "Finally, your name and city?", key: "Contact", input: "Name — City/Country" }
          ]
        },
        projeto: {
          title: "Film & TV project",
          steps: [
            { ask: "Which role are you looking for?", key: "Role", options: ["Actor", "Director", "Producer", "More than one"] },
            { ask: "What kind of work?", key: "Work", options: ["Feature film", "Series / soap opera", "Short film", "Documentary", "Theater", "Music video"] },
            { ask: "Expected dates and location?", key: "Dates and location", input: "E.g. March 2027, São Paulo", optional: true },
            { ask: "Production company or project name?", key: "Project", input: "Company / working title", optional: true },
            { ask: "Your name and role?", key: "Contact", input: "Name — producer, casting…" }
          ]
        },
        governo: {
          title: "Government & Corporate",
          steps: [
            { say: "Danillo runs open-air film screenings, has taught film workshops since 2013 and directed Não Peça Desculpas, a feature about violence against women screened at festivals in Brazil and abroad." },
            { ask: "Which agency, department or city?", key: "Organization", input: "E.g. City of Extrema — Culture Department" },
            {
              ask: "What kind of project?",
              key: "Project",
              options: ["Awareness campaign", "Documentary", "Corporate film", "Open-air film screening", "Film workshop", "Film screening + debate", "Grant / incentive law"]
            },
            { ask: "Expected timeline?", key: "Timeline", options: ["Within 1 month", "1 to 3 months", "More than 3 months", "To be defined"] },
            { ask: "Your name and position?", key: "Contact", input: "Name — position" }
          ]
        },
        imprensa: {
          title: "Press",
          steps: [
            { ask: "Which outlet?", key: "Outlet", input: "Newspaper, website, podcast, TV…" },
            { ask: "Which format?", key: "Format", options: ["Interview", "Article / profile", "TV show appearance", "Podcast", "Other"] },
            { ask: "What's the story about?", key: "Story", input: "E.g. Não Peça Desculpas, Paulo o Apóstolo…" },
            { ask: "Deadline and your name?", key: "Contact", input: "Deadline — Name" }
          ]
        },
        fa: {
          title: "I'm a fan",
          steps: [
            { say: "So glad you're here! 💛 Danillo is grateful for all the support." },
            { ask: "What would you like?", key: "Request", options: ["Leave a message", "Where to watch", "Follow on social media"] }
          ],
          branches: {
            "Leave a message": [
              { ask: "Write your message to Danillo:", key: "Message", input: "Your message" },
              { ask: "Your name and city?", key: "Contact", input: "Name — City", optional: true }
            ],
            "Where to watch": [
              { say: "📺 Paulo, o Apóstolo: Record, Disney+ and Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (season 3).\n🎬 The full filmography is in the Work section of this site." },
              { end: "links" }
            ],
            "Follow on social media": [
              { say: "Follow @danillofranccesco on Instagram for behind the scenes and news!" },
              { end: "links" }
            ]
          }
        },
        faq: {
          title: "Quick questions",
          steps: [
            { ask: "Pick a question:", key: "Question", options: ["Do you do sponsored content?", "Do you work outside SP/RJ?", "Where to watch?", "Is there casting material?"] }
          ],
          branches: {
            "Do you do sponsored content?": [
              { say: "Yes! More than 60 commercials for TV and the web: commercials, Instagram content, events and brand ambassadorships. And as a director and producer (MED Produções), he can deliver the finished piece." },
              { goto: "publicidade", label: "Request an advertising quote" }
            ],
            "Do you work outside SP/RJ?": [
              { say: "Yes. Danillo lives between Rio de Janeiro and São Paulo, has roots in Extrema (MG) and works on projects all over Brazil — and abroad too (fluent English)." },
              { end: "menu" }
            ],
            "Where to watch?": [
              { say: "📺 Paulo, o Apóstolo: Record, Disney+ and Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (season 3)." },
              { end: "menu" }
            ],
            "Is there casting material?": [
              { say: "Yes! The casting sheet is in the Casting section of this site, and the full profile is on Elenco Digital and IMDb." },
              { end: "links" }
            ]
          }
        }
      }
    },

    /* ======================= ESPAÑOL ======================= */
    es: {
      ui: {
        fab: "Habla con el equipo",
        fabAria: "Abrir atención",
        title: "Equipo de Danillo Franccesco",
        status: "Responde por WhatsApp",
        restart: "Reiniciar conversación",
        close: "Cerrar atención",
        back: "Volver al menú",
        backReply: "¡Claro! ¿En qué más podemos ayudarte?",
        skip: "Saltar esta pregunta",
        typeHere: "Escribe aquí",
        sendAnswer: "Enviar respuesta",
        cont: "Continuar",
        summaryIntro: "¡Perfecto! Revisa el resumen y envíalo al equipo:",
        sendWa: "Enviar por WhatsApp",
        sendMail: "Enviar por e-mail",
        again: "Empezar de nuevo",
        thanks: "¡Gracias! 🎬 El equipo responderá lo antes posible.",
        instagram: "Instagram",
        seeWork: "Ver trabajos",
        msgHello: "¡Hola! Llegué por el sitio web de Danillo Franccesco.",
        msgSubject: "Asunto",
        mailSubject: "Sitio web"
      },
      greeting: [
        "¡Hola! 🎬 Somos el equipo de Danillo Franccesco.",
        "Actor, director y productor. ¿Cómo podemos ayudarte?"
      ],
      menu: [
        { id: "publicidade", label: "Publicidad / Marcas", highlight: true },
        { id: "projeto", label: "Proyecto audiovisual" },
        { id: "governo", label: "Gobierno e Institucional" },
        { id: "imprensa", label: "Prensa" },
        { id: "fa", label: "Soy fan" },
        { id: "faq", label: "Dudas rápidas" }
      ],
      flows: {
        publicidade: {
          title: "Publicidad / Marcas",
          steps: [
            { say: "¡Genial! Danillo trabaja delante y detrás de cámaras: puede protagonizar tu campaña y también dirigir y producir la pieza completa." },
            {
              ask: "¿Qué tipo de acción buscas?",
              key: "Formato",
              options: [
                "Comercial (TV / digital)",
                "Publi en Instagram (Reels / Stories)",
                "Embajador de marca",
                "Presencia en evento",
                "Película institucional",
                "Campaña completa (actuación + producción)"
              ]
            },
            { ask: "¿Cuál es la empresa o marca?", key: "Marca", input: "Nombre de la empresa / marca" },
            { ask: "¿Para cuándo sería?", key: "Plazo", options: ["Este mes", "En 1 a 3 meses", "Más de 3 meses", "Aún no definido"] },
            {
              ask: "¿Cuál es el rango de inversión previsto?",
              key: "Inversión",
              options: ["Hasta R$ 5 mil", "R$ 5 a 20 mil", "R$ 20 a 50 mil", "Más de R$ 50 mil", "Prefiero conversar"]
            },
            { ask: "Cuéntanos brevemente el objetivo de la campaña.", key: "Objetivo", input: "Ej.: lanzamiento de producto, awareness…", optional: true },
            { ask: "Por último, ¿tu nombre y ciudad?", key: "Contacto", input: "Nombre — Ciudad/País" }
          ]
        },
        projeto: {
          title: "Proyecto audiovisual",
          steps: [
            { ask: "¿Para qué función buscas a Danillo?", key: "Función", options: ["Actor", "Director", "Productor", "Más de una"] },
            { ask: "¿Qué tipo de obra?", key: "Obra", options: ["Largometraje", "Serie / telenovela", "Cortometraje", "Documental", "Teatro", "Videoclip"] },
            { ask: "¿Fechas y lugar previstos?", key: "Fechas y lugar", input: "Ej.: marzo 2027, São Paulo", optional: true },
            { ask: "¿Nombre de la productora o del proyecto?", key: "Proyecto", input: "Productora / título provisional", optional: true },
            { ask: "¿Tu nombre y función?", key: "Contacto", input: "Nombre — productor(a), casting…" }
          ]
        },
        governo: {
          title: "Gobierno e Institucional",
          steps: [
            { say: "Danillo realiza muestras de cine al aire libre, dicta talleres de cine desde 2013 y dirigió Não Peça Desculpas, largometraje sobre la violencia contra la mujer exhibido en festivales en Brasil y en el exterior." },
            { ask: "¿Qué organismo, secretaría o municipio?", key: "Organismo", input: "Ej.: Municipalidad de Extrema — Secretaría de Cultura" },
            {
              ask: "¿Qué tipo de proyecto?",
              key: "Proyecto",
              options: ["Campaña educativa", "Documental", "Película institucional", "Muestra de cine al aire libre", "Taller de cine", "Proyección + debate", "Ley de incentivo / convocatoria"]
            },
            { ask: "¿Plazo previsto?", key: "Plazo", options: ["Hasta 1 mes", "1 a 3 meses", "Más de 3 meses", "A definir"] },
            { ask: "¿Tu nombre y cargo?", key: "Contacto", input: "Nombre — cargo" }
          ]
        },
        imprensa: {
          title: "Prensa",
          steps: [
            { ask: "¿Qué medio?", key: "Medio", input: "Diario, portal, podcast, TV…" },
            { ask: "¿Qué formato?", key: "Formato", options: ["Entrevista", "Nota / perfil", "Participación en programa", "Podcast", "Otro"] },
            { ask: "¿Sobre qué tema?", key: "Tema", input: "Ej.: Não Peça Desculpas, Paulo o Apóstolo…" },
            { ask: "¿Plazo y tu nombre?", key: "Contacto", input: "Plazo — Nombre" }
          ]
        },
        fa: {
          title: "Soy fan",
          steps: [
            { say: "¡Qué bueno tenerte aquí! 💛 Danillo agradece todo el cariño." },
            { ask: "¿Qué te gustaría?", key: "Pedido", options: ["Dejar un mensaje", "Dónde ver", "Seguir en redes"] }
          ],
          branches: {
            "Dejar un mensaje": [
              { ask: "Escribe tu mensaje para Danillo:", key: "Mensaje", input: "Tu mensaje" },
              { ask: "¿Tu nombre y ciudad?", key: "Contacto", input: "Nombre — Ciudad", optional: true }
            ],
            "Dónde ver": [
              { say: "📺 Paulo, o Apóstolo: Record, Disney+ y Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (3.ª temporada).\n🎬 Toda la filmografía está en la sección Trabajos de este sitio." },
              { end: "links" }
            ],
            "Seguir en redes": [
              { say: "¡Sigue a @danillofranccesco en Instagram para ver detrás de cámaras y novedades!" },
              { end: "links" }
            ]
          }
        },
        faq: {
          title: "Dudas rápidas",
          steps: [
            { ask: "Elige una duda:", key: "Duda", options: ["¿Hace publicidad?", "¿Trabaja fuera de SP/RJ?", "¿Dónde ver?", "¿Hay material de casting?"] }
          ],
          branches: {
            "¿Hace publicidad?": [
              { say: "¡Sí! Más de 60 publicidades para TV e internet: comerciales, publis en Instagram, eventos y embajador de marca. Y como director y productor (MED Produções), puede entregar la pieza lista." },
              { goto: "publicidade", label: "Pedir presupuesto de publicidad" }
            ],
            "¿Trabaja fuera de SP/RJ?": [
              { say: "Sí. Danillo vive entre Río de Janeiro y São Paulo, tiene raíces en Extrema (MG) y trabaja en proyectos en todo Brasil — y también en el exterior." },
              { end: "menu" }
            ],
            "¿Dónde ver?": [
              { say: "📺 Paulo, o Apóstolo: Record, Disney+ y Univer Video.\n🎞️ Um Broto Legal: Prime Video.\n🎧 Sintonia: Netflix (3.ª temporada)." },
              { end: "menu" }
            ],
            "¿Hay material de casting?": [
              { say: "¡Sí! La ficha técnica está en la sección Casting de este sitio, y el perfil completo en Elenco Digital e IMDb." },
              { end: "links" }
            ]
          }
        }
      }
    }
  }
};

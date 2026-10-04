/*
 * Filmografia de Danillo Franccesco (fonte: portfólio do próprio Danillo + IMDb/Elenco Digital).
 * Para adicionar um trabalho, copie um bloco e edite os campos.
 *  - type: "tv" | "cinema" | "direcao" | "teatro"
 *  - title, role, outlet: texto simples ou { pt, en, es } para traduzir
 *  - youtube: ID do vídeo no YouTube (o trecho depois de "watch?v=") ou "" se não houver
 *  - link: página externa (opcional)
 *  - image: foto de fundo do card (opcional), ex.: "assets/minha-foto.jpg"
 */
window.WORKS = [
  {
    title: "A Vida de Jó",
    year: "2025",
    type: "tv",
    role: {
      pt: "Filho de Deus, o arcanjo Samuel",
      en: "Son of God, the archangel Samuel",
      es: "Hijo de Dios, el arcángel Samuel"
    },
    outlet: { pt: "Novela · Record", en: "TV drama · Record", es: "Telenovela · Record" },
    image: "assets/filho-de-deus-close.jpg",
    youtube: "",
    link: ""
  },
  {
    title: "Paulo, o Apóstolo",
    year: "2025",
    type: "tv",
    role: {
      pt: "Festo, governador da Judeia",
      en: "Festus, governor of Judea",
      es: "Festo, gobernador de Judea"
    },
    outlet: { pt: "Novela · Record · Disney+", en: "TV drama · Record · Disney+", es: "Telenovela · Record · Disney+" },
    youtube: "CdcAXx4PKHw",
    link: ""
  },
  {
    title: "Ponto Final",
    year: "2025",
    type: "direcao",
    role: { pt: "Produção executiva e direção", en: "Executive producer and director", es: "Producción ejecutiva y dirección" },
    outlet: { pt: "Curta-metragem · romance", en: "Short film · romance", es: "Cortometraje · romance" },
    youtube: "",
    link: ""
  },
  {
    title: "Não Peça Desculpas",
    year: "2024",
    type: "direcao",
    role: { pt: "Produção executiva e direção", en: "Executive producer and director", es: "Producción ejecutiva y dirección" },
    outlet: {
      pt: "Longa-metragem · 80 min · festivais nacionais e internacionais",
      en: "Feature film · 80 min · national and international festivals",
      es: "Largometraje · 80 min · festivales nacionales e internacionales"
    },
    image: "assets/poster-nao-peca-desculpas.jpg",
    youtube: "vDbXZfq8WDA",
    link: ""
  },
  {
    title: "Cinema no Santuário",
    year: "2024",
    type: "direcao",
    role: { pt: "Produção executiva e direção", en: "Executive producer and director", es: "Producción ejecutiva y dirección" },
    outlet: {
      pt: "Documentário · Pedra Bela e Suas Tradições (SP)",
      en: "Documentary · Pedra Bela and its traditions (SP)",
      es: "Documental · Pedra Bela y sus tradiciones (SP)"
    },
    image: "assets/poster-cinema-no-santuario.jpg",
    youtube: "",
    link: ""
  },
  {
    title: "Desaparecidos",
    year: "2023",
    type: "direcao",
    role: { pt: "Produção e direção", en: "Producer and director", es: "Producción y dirección" },
    outlet: {
      pt: "Curta-metragem · tráfico de pessoas e exploração",
      en: "Short film · human trafficking and exploitation",
      es: "Cortometraje · trata de personas y explotación"
    },
    image: "assets/poster-desaparecidos.jpg",
    youtube: "",
    link: ""
  },
  {
    title: "Um Broto Legal",
    year: "2022",
    type: "cinema",
    role: {
      pt: "Eduardo, marido de Celly Campello",
      en: "Eduardo, Celly Campello's husband",
      es: "Eduardo, esposo de Celly Campello"
    },
    outlet: {
      pt: "Longa-metragem · Pandora Filmes · Prime Video",
      en: "Feature film · Pandora Filmes · Prime Video",
      es: "Largometraje · Pandora Filmes · Prime Video"
    },
    youtube: "62ZXEwH0SQE",
    link: ""
  },
  {
    title: "Sintonia",
    year: "2022",
    type: "tv",
    role: {
      pt: "MC Rod dos Piseiros (3ª temporada)",
      en: "MC Rod dos Piseiros (season 3)",
      es: "MC Rod dos Piseiros (3.ª temporada)"
    },
    outlet: { pt: "Série · Netflix", en: "Series · Netflix", es: "Serie · Netflix" },
    youtube: "o2Qo5SONDjI",
    link: "https://www.netflix.com/title/80217315"
  },
  {
    title: "Eu, Nós, Você!",
    year: "2021",
    type: "direcao",
    role: { pt: "Produção e direção", en: "Producer and director", es: "Producción y dirección" },
    outlet: {
      pt: "Curta-metragem · 50 mil views na 1ª semana",
      en: "Short film · 50k views in the first week",
      es: "Cortometraje · 50 mil vistas en la 1.ª semana"
    },
    youtube: "BRebi2-AnN8",
    link: ""
  },
  {
    title: "Quatro Projeções",
    year: "2018",
    type: "tv",
    role: { pt: "Ênio (protagonista)", en: "Ênio (lead)", es: "Ênio (protagonista)" },
    outlet: {
      pt: "Websérie · 8 episódios · dir. Arthur Chermont",
      en: "Web series · 8 episodes · dir. Arthur Chermont",
      es: "Webserie · 8 episodios · dir. Arthur Chermont"
    },
    youtube: "Tt3TUQKvSXY",
    link: ""
  },
  {
    title: "O Lar de Todas as Cores",
    year: "2017",
    type: "tv",
    role: "Lucas",
    outlet: {
      pt: "Websérie · +1 milhão de views",
      en: "Web series · 1M+ views",
      es: "Webserie · +1 millón de vistas"
    },
    youtube: "",
    link: ""
  },
  {
    title: "As Centenárias",
    year: "2016",
    type: "teatro",
    role: {
      pt: "Direção, produção e atuação",
      en: "Director, producer and actor",
      es: "Dirección, producción y actuación"
    },
    outlet: {
      pt: "Texto de Newton Moreno · 1 ano em cartaz em Extrema",
      en: "Play by Newton Moreno · 1-year run in Extrema",
      es: "Texto de Newton Moreno · 1 año en cartel en Extrema"
    },
    youtube: "",
    link: ""
  },
  {
    title: "Offline: O Filme",
    year: "2015",
    type: "cinema",
    role: { pt: "Atuação e produção", en: "Actor and producer", es: "Actuación y producción" },
    outlet: {
      pt: "Longa-metragem · suspense · dir. Tristan Aronovich",
      en: "Feature film · thriller · dir. Tristan Aronovich",
      es: "Largometraje · suspenso · dir. Tristan Aronovich"
    },
    youtube: "",
    link: ""
  },
  {
    title: "Dissonante",
    year: "2015",
    type: "cinema",
    role: "Henrique",
    outlet: {
      pt: "Curta-metragem · suspense",
      en: "Short film · thriller",
      es: "Cortometraje · suspenso"
    },
    youtube: "7s6-CJn4nFY",
    link: ""
  },
  {
    title: "Além da Vida",
    year: "2014–17",
    type: "teatro",
    role: {
      pt: "Elenco · obra psicografada por Chico Xavier",
      en: "Cast · based on Chico Xavier's works",
      es: "Elenco · obra psicografiada por Chico Xavier"
    },
    outlet: {
      pt: "Dir. Renato Prieto · turnê nacional · +1 milhão de espectadores",
      en: "Dir. Renato Prieto · national tour · 1M+ spectators",
      es: "Dir. Renato Prieto · gira nacional · +1 millón de espectadores"
    },
    youtube: "",
    link: ""
  },
  {
    title: "Patrulha Salvadora",
    year: "2014",
    type: "tv",
    role: { pt: "Flito, o vilão do amor", en: "Flito, the villain of love", es: "Flito, el villano del amor" },
    outlet: { pt: "Série · SBT · 2ª temporada", en: "Series · SBT · season 2", es: "Serie · SBT · 2.ª temporada" },
    youtube: "",
    link: ""
  },
  {
    title: "Jardim Ilusão",
    year: "2012–14",
    type: "teatro",
    role: { pt: "Luiz · produção executiva", en: "Luiz · executive producer", es: "Luiz · producción ejecutiva" },
    outlet: {
      pt: "Adaptação de Arthur Miller · Festival de Curitiba 2014",
      en: "Adapted from Arthur Miller · Curitiba Festival 2014",
      es: "Adaptación de Arthur Miller · Festival de Curitiba 2014"
    },
    image: "assets/poster-jardim-ilusao.jpg",
    youtube: "",
    link: ""
  },
  {
    title: "Laudo 864",
    year: "2013",
    type: "cinema",
    role: "José",
    outlet: { pt: "Média-metragem", en: "Medium-length film", es: "Mediometraje" },
    youtube: "",
    link: ""
  },
  {
    title: "Antebellum",
    year: "2012",
    type: "cinema",
    role: "Fernando",
    outlet: {
      pt: "Curta · dir. Edu Diux e Andrei Alan",
      en: "Short · dir. Edu Diux and Andrei Alan",
      es: "Corto · dir. Edu Diux y Andrei Alan"
    },
    youtube: "tXIwy-CTeI4",
    link: ""
  }
];

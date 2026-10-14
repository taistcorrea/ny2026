/* Roteiro NY · Taís & Juan · 16–23 out 2026
   Fonte: roteiro "Roteiro NY Direto ao Ponto" + dicas aprovadas pela Taís (09/10/2026).
   Preços, horários e eventos: confirmar antes de ir. */
window.TRIP = {
  title: "Nova York",
  start: "2026-10-16",
  end: "2026-10-23",
  hotel: { name: "Americana Inn", addr: "69 W 38th St", lat: 40.7515, lon: -73.9845 },

  /* ---------- LUGARES ---------- */
  places: {
    jfk: { name: "Aeroporto JFK", addr: "Queens, NY", lat: 40.6413, lon: -73.7781, img: "jfk",
      summary: "Chegada internacional. Depois da imigração e das malas, o traslado contratado leva vocês até o hotel.",
      see: [], tips: [
        ["Imigração", "Tenham à mão passaporte, endereço do hotel (69 W 38th St) e a passagem de volta. Respondam curto e em inglês simples."],
        ["Remédios", "Dipirona (Novalgina) não é aprovada nos EUA. Tragam só o necessário, na embalagem original e com receita."],
        ["Chip", "Ativem o chip internacional ainda no avião ou no desembarque, antes de procurar o motorista."]
      ], around: [] },

    hotel: { name: "Americana Inn", addr: "69 W 38th St, entre a 5ª e a 6ª Av", lat: 40.7515, lon: -73.9845, img: null,
      summary: "A base da viagem, em Midtown. Estações mais perto: 42 St–Bryant Park (B D F M), a 4 min, e 34 St–Herald Sq (N Q R W), a 5 min.",
      see: [], tips: [
        ["Check-in e check-out", "Check-in às 16h; dá pra deixar as malas na recepção antes. No último dia, check-out às 10h, com as malas guardadas até a tarde."],
        ["Gorjeta", "Camareira costuma receber US$ 2 a 5 por dia, deixados no quarto."]
      ], around: [
        ["Bryant Park", "2 quarteirões, com banheiro público bom."],
        ["Biblioteca Pública", "Ao lado do Bryant Park, na 5ª Av com a 42nd."]
      ] },

    bryant: { name: "Bryant Park", addr: "6th Ave entre W 40th e W 42nd St", lat: 40.7536, lon: -73.9832, img: "bryant",
      summary: "A sala de estar de Midtown: gramado, cadeiras soltas, quiosques de café e a Biblioteca Pública logo atrás. Primeiro respiro depois do voo.",
      see: [
        ["O gramado e as cadeirinhas verdes", "Peguem duas cadeiras, sentem e deixem o jet lag passar."],
        ["Biblioteca Pública (NYPL)", "Logo atrás do parque, a escadaria com os leões. Foi aqui que a Carrie, de Sex and the City, descobriu que o Mr. Big não ia subir ao altar."],
        ["Rose Main Reading Room", "Dentro da biblioteca, no 3º andar: a sala de leitura gigante, de graça."]
      ],
      tips: [
        ["Banheiro", "O banheiro público do Bryant Park é um dos mais limpos da cidade."],
        ["Winter Village", "A pista de patinação e as lojinhas de Natal só abrem a partir de 28/10, depois da viagem de vocês."],
        ["Rose Main Reading Room", "A sala de leitura da biblioteca é grátis. Entrem pela 5ª Av e subam ao 3º andar."]
      ],
      around: [
        ["Biblioteca Pública", "476 5th Ave, colada no parque."],
        ["Grand Central", "10 min a pé pra leste pela 42nd."],
        ["Times Square", "5 min a pé pra oeste."]
      ] },

    metalab: { name: "Meta Lab", addr: "697 Fifth Ave, na 55th", lat: 40.7616, lon: -73.9746, img: "fifth55", ticket: "metalab",
      summary: "A loja-experiência da Meta na Quinta Avenida. Demo marcada às 15h e a compra do Ray-Ban Meta do Juan.",
      see: [["Demo dos óculos", "Experimentem os modelos e as lentes antes de decidir."]],
      tips: [
        ["Cartão físico", "Levem o cartão físico da conta global (Wise, Nomad etc.). Em lojas grandes, como a Apple, cartão só digital já foi recusado."],
        ["Imposto", "O preço da etiqueta não inclui o imposto de NY (cerca de 8,9%), que entra no caixa."],
        ["Configurar ali mesmo", "Peçam pra parear o óculos com o celular do Juan na loja: o Wi-Fi ajuda e eles mostram as configurações de privacidade."]
      ],
      around: [
        ["Tiffany & Co.", "727 Fifth Ave, na 57th. Vitrine e prédio icônicos."],
        ["Trump Tower", "725 Fifth Ave."],
        ["Apple Fifth Avenue", "4 quarteirões ao norte."]
      ] },

    apple: { name: "Apple Fifth Avenue", addr: "767 Fifth Ave, na 59th", lat: 40.7638, lon: -73.9730, img: "apple",
      summary: "O cubo de vidro em frente ao Central Park, aberto 24 horas. A loja fica embaixo da praça.",
      see: [["O cubo", "Desçam pela escada em espiral; a foto clássica é da praça, com o Plaza Hotel atrás."]],
      tips: [
        ["Cartão físico", "Levem o cartão físico da conta global. Um dos teus salvos mostra o cartão digital da Wise sendo recusado na Apple."],
        ["Imposto", "Somem cerca de 8,9% ao preço da etiqueta."]
      ],
      around: [
        ["The Plaza Hotel", "Do outro lado da praça."],
        ["Entrada do Central Park", "Grand Army Plaza, a 1 min."]
      ] },

    timessq: { name: "Times Square", addr: "Broadway com a 7th Ave, W 42nd–47th", lat: 40.7580, lon: -73.9855, img: "timessq",
      summary: "Os telões à noite. Vale ver uma vez, de preferência subindo a escadaria vermelha (TKTS) pra ter a vista de cima.",
      see: [
        ["Escadaria vermelha", "Na 47th; sentem lá em cima e olhem pra baixo."],
        ["Telões à meia-noite", "Às 23h57 vários telões passam o 'Midnight Moment', uma obra de arte ao mesmo tempo."]
      ],
      tips: [
        ["Personagens fantasiados", "Cobram pela foto. Se não quiserem, só digam 'no, thanks' e sigam."],
        ["Jantar", "O Olive Garden da Times Square está com a massa à vontade por US$ 14,99 até 22/11 (sopa ou salada + pãezinhos; proteína +US$ 4,99)."],
        ["Água e gorjeta", "Peçam 'tap water' (a água da torneira é grátis). Gorjeta de 18 a 20%."]
      ],
      around: [
        ["Olive Garden Times Square", "2 Times Square, na Broadway."],
        ["Hotel", "7 min a pé."]
      ] },

    bull: { name: "Charging Bull e Wall Street", addr: "Bowling Green, Broadway", lat: 40.7056, lon: -74.0134, img: "bull",
      summary: "O touro de bronze de Wall Street. Cedo, antes das 9h, a fila pra foto é curta.",
      see: [
        ["Charging Bull", "Na ponta norte do Bowling Green."],
        ["Bolsa de Nova York", "Na Wall St com a Broad St, 5 min a pé; a fachada com a bandeira gigante."],
        ["Federal Hall", "A estátua de George Washington na escadaria, em frente à Bolsa."]
      ],
      tips: [["Menos movimento", "Antes das 9h a fila pra foto com o touro é curta; depois das 10h vira multidão."],
        ["Golpe no Battery Park", "Ali perto, gente aborda oferecendo ingresso de ferry ou dizendo que o de vocês 'está errado'. Ignorem: o ferry de vocês é o de Staten Island, que é grátis."]],
      around: [
        ["Stone Street", "4 min a pé: ruazinha de pedra com bares."],
        ["Battery Park", "Do outro lado da rua, à beira d'água."]
      ] },

    ferry: { name: "Staten Island Ferry", addr: "Whitehall Terminal, 4 South St", lat: 40.7013, lon: -74.0131, img: "ferry",
      summary: "A balsa laranja que vai e volta de Staten Island de graça e passa pertinho da Estátua da Liberdade. Uns 25 min cada trecho.",
      see: [
        ["Estátua da Liberdade", "Fiquem do lado direito da balsa na ida."],
        ["Skyline de Lower Manhattan", "Na volta, a vista dos prédios crescendo na frente de vocês."]
      ],
      tips: [
        ["De graça", "Não tem ingresso. Quem vender ingresso de ferry na rua é golpe."],
        ["Frio no deck", "Sábado com sol, mas uns 11 °C e vento no rio: levem casaco."],
        ["Lado da Estátua", "Direita na ida. Na volta, confiram na hora: como a balsa só vai e volta, a Estátua deve aparecer do mesmo lado do barco."],
        ["Desembarque", "Em Staten Island todo mundo desce. É só seguir as placas e pegar a próxima balsa de volta, que sai em poucos minutos."]
      ],
      around: [["Stone Street", "5 min a pé da saída do terminal."]] },

    stonest: { name: "Stone Street", addr: "Stone St, entre a Broad e a Hanover", lat: 40.7043, lon: -74.0105, img: "stonest",
      summary: "Ruazinha de paralelepípedo cheia de mesas na rua. Aos sábados de outubro tem programação de Oktoberfest. Almoço do dia 2.",
      see: [["Oktoberfest", "Mesas compridas, cerveja alemã e pretzel. Programação aos sábados de outubro (confirmar no dia)."]],
      tips: [
        ["Gorjeta", "Nos restaurantes com serviço de mesa, deixem 18 a 20%."],
        ["Porções", "São grandes: dá pra dividir."]
      ],
      around: [
        ["Charging Bull", "4 min a pé."],
        ["9/11 Memorial", "15 min a pé pela Broadway."]
      ] },

    m911: { name: "9/11 Memorial Museum", addr: "180 Greenwich St", lat: 40.7114, lon: -74.0125, img: "m911", ticket: "m911",
      summary: "O museu subterrâneo sobre o 11 de setembro, construído nas fundações das Torres Gêmeas. Entrada com horário marcado às 14h. Contem com umas 2 horas.",
      see: [
        ["Foundation Hall", "A última coluna retirada dos escombros e o muro de contenção original."],
        ["Exposição histórica", "A cronologia do dia, com objetos e gravações. É forte; dá pra pular salas."]
      ],
      tips: [
        ["Horário marcado", "Cheguem 15 min antes, com o ingresso no celular. Tem detector de metais."],
        ["Respeito", "Fotos são permitidas na maior parte, mas em algumas salas não."]
      ],
      around: [
        ["Os espelhos d'água", "Logo em cima, a céu aberto."],
        ["Oculus", "3 min a pé."]
      ] },

    oculus: { name: "Memorial e Oculus", addr: "World Trade Center", lat: 40.7116, lon: -74.0110, img: "oculus",
      summary: "Os dois espelhos d'água no lugar das torres, com os nomes das vítimas, e o Oculus, a estação branca de Calatrava em forma de asas.",
      see: [
        ["Espelhos d'água", "As cascatas onde ficavam as torres Norte e Sul."],
        ["Oculus por dentro", "O salão branco. Todo 11 de setembro, às 8h46, a luz entra pela claraboia e ilumina o chão até 10h28."],
        ["One World Trade Center", "O prédio mais alto da cidade, bem ao lado."]
      ],
      tips: [["Volta", "A estação Cortlandt St (R) fica dentro do complexo; sigam as placas do R."]],
      around: [["Brookfield Place", "Do outro lado da rua, com praça de alimentação de frente pro rio."]] },

    dumbo: { name: "Dumbo", addr: "Washington St com a Water St, Brooklyn", lat: 40.7033, lon: -73.9894, img: "dumbo",
      summary: "O bairro de paralelepípedos embaixo das pontes. Na Washington St fica a foto mais famosa do Brooklyn: a Manhattan Bridge emoldurando o Empire State.",
      see: [
        ["A foto da Washington St", "Fiquem no meio da rua, entre a Water e a Front St; cedo tem menos gente."],
        ["Pebble Beach", "Prainha de pedras embaixo da Manhattan Bridge."]
      ],
      tips: [["Cedo é melhor", "Às 8h30 de domingo a rua ainda está vazia."]],
      around: [
        ["Time Out Market", "No Empire Stores, a 2 min."],
        ["Jane's Carousel", "Carrossel de 1922 numa caixa de vidro, no parque."]
      ] },

    bbpark: { name: "Brooklyn Bridge Park", addr: "Pier 1, Brooklyn", lat: 40.7023, lon: -73.9965, img: "bbpark",
      summary: "O parque à beira do East River com a vista mais famosa de Lower Manhattan e as duas pontes de frente.",
      see: [
        ["Pier 1", "Gramado e escadaria virados pro skyline; a luz da manhã é a melhor."],
        ["Jane's Carousel", "Carrossel de 1922 numa caixa de vidro (cerca de US$ 2)."],
        ["Pebble Beach", "A prainha de pedras com a Manhattan Bridge em cima."]
      ],
      tips: [["Banheiros", "Tem banheiros públicos no Pier 1 e perto do carrossel."]],
      around: [
        ["Brooklyn Heights Promenade", "Subindo pela Squibb Park Bridge."],
        ["Time Out Market", "5 min a pé."]
      ] },

    promenade: { name: "Brooklyn Heights Promenade", addr: "Entre a Remsen e a Orange St", lat: 40.6966, lon: -73.9975, img: "promenade",
      summary: "Um calçadão no alto, entre casas antigas e a vista de Manhattan. Calmo e lindo.",
      see: [
        ["A vista", "Lower Manhattan, a Brooklyn Bridge e a Estátua da Liberdade ao longe."],
        ["As casinhas de Brooklyn Heights", "Voltem pelas ruas Willow e Columbia Heights: casas de tijolo do século XIX."]
      ],
      tips: [["Caminho", "Do parque, subam pela Squibb Park Bridge (ponte de madeira)."]],
      around: [["Time Out Market", "15 min a pé de volta pra Dumbo."]] },

    timeout: { name: "Time Out Market", addr: "Empire Stores, 55 Water St", lat: 40.7034, lon: -73.9905, img: "timeout",
      summary: "Praça de alimentação num armazém antigo, com o rooftop grátis que quase ninguém conhece (o do teu salvo). Almoço do dia 3.",
      see: [["Rooftop grátis", "Subam até o 5º andar do Empire Stores: terraço público com vista das pontes e de Manhattan, de graça."]],
      tips: [["Água", "Bebedouros e água da torneira são grátis."]],
      around: [["Brooklyn Bridge (entrada)", "15 min a pé até a Cadman Plaza."]] },

    bbridge: { name: "Brooklyn Bridge a pé", addr: "Entrada em Manhattan: Park Row, em frente ao City Hall", lat: 40.7121, lon: -74.0047, img: "bbridge",
      summary: "Atravessar a ponte a pé, de Manhattan pro Brooklyn, logo cedo, antes da multidão. Uns 40 min com paradas; a saída cai em Dumbo.",
      see: [
        ["As torres de pedra", "Os arcos góticos no meio da ponte; a foto clássica."],
        ["O skyline", "Nesse sentido, Manhattan fica atrás: parem e virem pra trás nas torres pra foto."]
      ],
      tips: [
        ["Menos movimento", "Antes das 9h a ponte é tranquila; domingo à tarde é o horário mais cheio da semana."],
        ["Ciclovia", "Fiquem do lado dos pedestres; a faixa das bicicletas é sinalizada e os ciclistas vêm rápido."],
        ["Poses", "Pra foto sentada na viga lateral, procurem os trechos mais largos perto das torres."]
      ],
      around: [["Dumbo", "A saída da ponte no Brooklyn leva direto a Dumbo (5 min)."]] },

    amnh: { name: "Museu de História Natural", addr: "200 Central Park West, na 79th", lat: 40.7813, lon: -73.9740, img: "amnh", ticket: "amnh",
      summary: "O museu de Uma Noite no Museu: dinossauros, a baleia azul e o planetário. Plano: a entrada grátis da última hora (16h30–17h30), informada por sites de viagem. Cheguem às 16h.",
      see: [
        ["Dinossauros (4º andar)", "O T. rex e o titanossauro, que quase não cabe na sala."],
        ["A baleia azul", "Sala da Vida Oceânica, 1º andar."],
        ["Gilder Center", "A ala nova, com arquitetura de caverna e o insetário."]
      ],
      tips: [
        ["Hora grátis", "Sites de viagem dizem que a entrada é grátis das 16h30 às 17h30, reservando o horário das 16h30 online (esgota rápido). Não deu pra confirmar no site oficial: confiram em amnh.org. Se não houver vaga, o ingresso normal custa cerca de US$ 37."],
        ["Priorize", "Com 1 hora, vão direto aos dinossauros (4º andar) e à baleia azul (1º andar)."],
        ["Entrada", "A entrada pela 81st (rotunda do Planetário) costuma ter menos fila que a escadaria principal."],
        ["Fecha", "O museu fecha às 17h30."]
      ],
      around: [
        ["Columbus Avenue", "Almoço, a 1 quadra."],
        ["Decoração de Halloween", "Ruas residenciais entre a Central Park West e a Columbus, nas ruas 70 e 80."]
      ] },

    columbus: { name: "Almoço na Columbus Ave e Halloween no Upper West Side", addr: "Columbus Ave, W 77th–83rd", lat: 40.7810, lon: -73.9770, img: "uws",
      summary: "Almoço na Columbus Ave e uma volta pelas ruas residenciais do Upper West Side, que em outubro ficam todas decoradas pro Halloween.",
      see: [
        ["Decoração de Halloween", "Brownstones com abóboras, esqueletos e teias; as ruas entre a Central Park West e a Columbus, nas ruas 70 e 80, são as melhores."],
        ["Brownstones", "As casas de pedra marrom com escadinha na frente, cenário de filme."]
      ],
      tips: [["Porções e gorjeta", "Porções grandes, dá pra dividir. Gorjeta de 18 a 20%."]],
      around: [["Aluguel de bike", "Na 72nd, perto da Central Park West."]] },

    cpbike: { name: "Central Park de bike", addr: "Aluguel na W 72nd St", lat: 40.7765, lon: -73.9765, img: "bowbridge", gallery: ["bowbridge", "bethesda"], ticket: "bike",
      summary: "Volta de bicicleta pelo parque no auge das folhas de outono: Strawberry Fields, Bow Bridge, Bethesda e The Mall.",
      see: [
        ["Strawberry Fields", "O mosaico 'Imagine', homenagem a John Lennon, na altura da 72nd."],
        ["Bow Bridge", "A ponte de ferro branca sobre o lago. Ali a Mary Jane termina com o Peter Parker em Homem-Aranha 3."],
        ["Bethesda Terrace e Fountain", "O anjo da fonte. Aparece em Encantada, na cena final de Os Vingadores e no casamento da Blair e do Chuck em Gossip Girl."],
        ["The Mall", "A alameda de olmos, que fica dourada em outubro."]
      ],
      tips: [
        ["Folhagem", "Meados de outubro é o auge das cores no parque."],
        ["Sentido único", "No anel principal do parque, as bikes seguem no sentido anti-horário."],
        ["Preço", "Cerca de US$ 22 por pessoa (confirmar no local)."]
      ],
      around: [["Columbus Circle", "Saída sul do parque, com a estação de metrô."]] },

    littleisland: { name: "Little Island", addr: "Pier 55, Hudson River Park, na W 13th", lat: 40.7420, lon: -74.0102, img: "littleisland",
      summary: "Um parque suspenso sobre o rio Hudson, apoiado em pilares em forma de tulipa. Grátis.",
      see: [["Os mirantes", "Subam até o ponto mais alto: vista do rio e de Chelsea."]],
      tips: [["Foto de fora", "A melhor foto da Little Island é tirada do terraço do Pier 57, logo ao lado."]],
      around: [["Pier 57", "2 min a pé."]] },

    pier57: { name: "Pier 57, terraço", addr: "25 Eleventh Ave, na W 15th", lat: 40.7430, lon: -74.0098, img: "pier57",
      summary: "Um terraço público no alto de um píer, com a vista perfeita da Little Island. Grátis, com elevador.",
      see: [["A foto da Little Island", "Lá de cima dá pra ver a ilha inteira com o rio atrás."]],
      tips: [
        ["Como subir", "Entrem pelo número 25 da 11th Ave (Market 57), sigam as placas 'Rooftop Park' e peguem o elevador até o 5º andar."],
        ["Banheiros", "O prédio tem banheiros públicos muito bons."]
      ],
      around: [
        ["Market 57", "Praça de alimentação no térreo."],
        ["Chelsea Market", "2 quarteirões."]
      ] },

    chelsea: { name: "Chelsea Market", addr: "75 9th Ave", lat: 40.7424, lon: -74.0061, img: "chelsea",
      summary: "Mercado coberto numa antiga fábrica de biscoitos (onde nasceu o Oreo), com comida de todo tipo.",
      see: [["Corredor principal", "Tacos, lagosta, doces e lojinhas."]],
      tips: [["Cedo", "Antes do meio-dia está mais tranquilo."]],
      around: [["High Line", "Entrada da 16th, do outro lado da rua."]] },

    highline: { name: "High Line", addr: "Entrada da W 16th St com a 10th Ave", lat: 40.7427, lon: -74.0074, img: "highline",
      summary: "Um parque linear numa antiga linha de trem suspensa. Caminhada de cerca de 1 hora até Hudson Yards, entre jardins e prédios.",
      see: [
        ["O anfiteatro da 17th", "Arquibancada de vidro sobre a avenida."],
        ["O trecho final", "Chegando em Hudson Yards, o Vessel aparece na frente."]
      ],
      tips: [["Sentido", "Andem pro norte; vocês terminam no Vessel."]],
      around: [["Vessel", "No fim do High Line."]] },

    vessel: { name: "Vessel", addr: "Hudson Yards, 20 Hudson Yards", lat: 40.7538, lon: -74.0022, img: "vessel", ticket: "vessel",
      summary: "A escultura-escada de cobre em forma de colmeia. Entrada com horário marcado às 16h.",
      see: [["Lá de cima", "Vista do rio Hudson e de Midtown."]],
      tips: [["Horário marcado", "Ingresso no celular; cheguem uns 10 min antes."]],
      around: [
        ["Hudson River Park", "5 min a pé, pro pôr do sol."],
        ["The Shops at Hudson Yards", "Shopping ao lado, com banheiros."]
      ] },

    hudsonpark: { name: "Hudson River Park", addr: "Na altura de Hudson Yards", lat: 40.7575, lon: -74.0065, img: "hudsonpark",
      summary: "A orla do rio Hudson, de frente pra New Jersey. Pôr do sol por volta de 18h07.",
      see: [["O pôr do sol", "O sol desce atrás de New Jersey, do outro lado do rio."]],
      tips: [["Volta", "A estação 34 St–Hudson Yards (linha 7) fica a 7 min a pé."]],
      around: [] },

    nebula: { name: "Nebula", addr: "135 W 41st St", lat: 40.7550, lon: -73.9862, img: "nebula", ticket: "nebula",
      summary: "Balada em Midtown, a 5 min do hotel. Entrada já comprada; funciona até as 4h.",
      see: [], tips: [
        ["Documento", "Levem o passaporte: pedem documento na porta."],
        ["Volta", "São 5 min a pé até o hotel. De madrugada, prefiram ir pela 6th Ave, que é mais movimentada."]
      ], around: [] },

    mcny: { name: "Museum of the City of New York", addr: "1220 Fifth Ave, na 103rd", lat: 40.7925, lon: -73.9519, img: "mcny", ticket: "mcny",
      summary: "O museu da história de Nova York, em frente ao Central Park. Grátis às quartas, das 10h às 21h (confirmar).",
      see: [
        ["New York at Its Core", "A história da cidade em três salas, do porto holandês até hoje."],
        ["Timescapes", "Filme curto que mostra NY crescendo em 25 minutos."]
      ],
      tips: [["Ingresso", "Grátis às quartas para todos; peguem o ingresso no próprio museu (confirmar no site)."]],
      around: [["Conservatory Garden", "Do outro lado da rua, dentro do Central Park: um jardim formal lindo e pouco conhecido."]] },

    grandcentral: { name: "Grand Central", addr: "89 E 42nd St", lat: 40.7527, lon: -73.9772, img: "grandcentral",
      summary: "A estação de trem mais bonita do mundo. É a primeira cena de Gossip Girl, quando a Serena volta pra NYC. Almoço no mercado de baixo.",
      see: [
        ["O saguão principal", "O teto azul com as constelações e o relógio de quatro faces."],
        ["Whispering Gallery", "Perto do Oyster Bar: um fica num canto, o outro no canto oposto, e dá pra cochichar e se ouvir."]
      ],
      tips: [["Almoço", "A praça de alimentação fica no andar de baixo (Dining Concourse)."]],
      around: [["Chrysler Building", "1 quarteirão a leste, na Lexington com a 42nd."]] },

    tram: { name: "Roosevelt Island Tram", addr: "E 59th St com a 2nd Ave", lat: 40.7613, lon: -73.9640, img: "tram",
      summary: "O bondinho aéreo que cruza o East River até Roosevelt Island, com vista do Queensboro Bridge e de Midtown. Custa uma passagem de metrô.",
      see: [["A travessia", "Uns 4 minutos no alto. Fiquem perto da janela do lado sul pra ver Midtown."]],
      tips: [
        ["Pagamento", "Igual ao metrô: aproximem o celular no leitor OMNY. Conta pro limite de 12 viagens da semana."],
        ["Na ilha", "Tem ônibus vermelho gratuito circulando pela ilha; ou só voltem no próximo bondinho."]
      ],
      around: [["Quinta Avenida", "15 min a pé pra oeste pela 59th."]] },

    stpatrick: { name: "Quinta Avenida e St. Patrick", addr: "5th Ave, da 59th à 49th", lat: 40.7585, lon: -73.9760, img: "stpatrick",
      summary: "Caminhada descendo a Quinta Avenida até a Catedral de St. Patrick, a igreja neogótica em frente ao Rockefeller Center.",
      see: [
        ["Catedral de St. Patrick", "Entrada gratuita. O interior e as rosáceas."],
        ["Rockefeller Center", "Do outro lado da rua: a praça e a estátua de Atlas."]
      ],
      tips: [["Missa", "Entrem em silêncio; se tiver missa, fiquem no fundo."]],
      around: [["Estação 47–50 Sts Rockefeller Ctr", "Pra ir ao jogo, linhas B e D."]] },

    barclays: { name: "Barclays Center · Nets x Hornets", addr: "620 Atlantic Ave, Brooklyn", lat: 40.6826, lon: -73.9754, img: "barclays", ticket: "nets",
      summary: "Jogo da NBA, Nets x Hornets, às 19h30. Portões às 18h.",
      see: [["O aquecimento", "Cheguem cedo pra ver os jogadores aquecendo perto da quadra."]],
      tips: [
        ["Bolsa", "A arena só aceita bolsas pequenas; deixem mochila no hotel."],
        ["Volta", "O B ou o D voltam pela Manhattan Bridge. Olhem pela janela quando o trem sair do túnel: o skyline de Manhattan iluminado."]
      ],
      around: [] },

    hp: { name: "Harry Potter New York", addr: "935 Broadway, na 22nd", lat: 40.7404, lon: -73.9895, img: null, ticket: "hp",
      summary: "A maior loja do Harry Potter do mundo, com 3 andares, cerveja amanteigada e experiências pagas (a decidir).",
      see: [["Os 3 andares", "Varinhas, casas de Hogwarts e o bar de cerveja amanteigada."]],
      tips: [["Entrada", "A loja é gratuita; as experiências (como a de realidade virtual) são pagas e com horário."]],
      around: [["Flatiron Building", "1 quarteirão."]] },

    flatiron: { name: "Madison Square Park e Flatiron", addr: "E 23rd St com a Broadway", lat: 40.7411, lon: -73.9897, img: "flatiron",
      summary: "O prédio em forma de ferro de passar e a praça ao lado, com o Shake Shack original.",
      see: [
        ["Flatiron Building", "A foto boa é do canteiro no meio da 23rd com a Broadway."],
        ["Vista do Empire State", "Da ponta norte do parque dá pra ver o Empire State."]
      ],
      tips: [["Shake Shack", "O quiosque original fica dentro do parque."]],
      around: [["Eataly", "Do outro lado da rua."]] },

    eataly: { name: "Eataly", addr: "200 Fifth Ave, na 23rd", lat: 40.7421, lon: -73.9897, img: "eataly",
      summary: "O mercado italiano gigante. Almoço do dia 7.",
      see: [["Balcões", "Massa fresca, pizza e o balcão de gelato."]],
      tips: [["Gorjeta", "Nos balcões de serviço de mesa, gorjeta de 18 a 20%."]],
      around: [["Friends Experience", "8 min a pé."]] },

    friends: { name: "Friends Experience", addr: "130 E 23rd St", lat: 40.7395, lon: -73.9845, img: "friends", ticket: "friends",
      summary: "Exposição imersiva com os cenários de Friends (a decidir). Cerca de US$ 52.",
      see: [["Cenários", "O sofá do Central Perk e o apartamento da Monica."]],
      tips: [["Ingresso", "Horário marcado; comprem no site oficial."]],
      around: [["Union Square e Gramercy", "Alternativa gratuita, a pé."]] },

    unionsq: { name: "Union Square e Gramercy", addr: "Union Sq, E 14th–17th", lat: 40.7359, lon: -73.9911, img: "unionsq",
      summary: "A alternativa grátis ao Friends: a praça de Union Square e as ruas tranquilas de Gramercy.",
      see: [
        ["Union Square", "Às quartas, sextas e sábados tem feira de produtores; na quinta é mais tranquilo."],
        ["Gramercy Park", "Parque cercado e privado, com casas lindas em volta."]
      ],
      tips: [],
      around: [["Strand Bookstore", "Livraria gigante de usados na Broadway com a 12th."]] },

    rock: { name: "Top of the Rock", addr: "30 Rockefeller Plaza", lat: 40.7593, lon: -73.9794, img: "rock", ticket: "rock",
      summary: "O mirante com a melhor vista do Empire State de frente e do Central Park atrás. Pôr do sol por volta de 18h05 (a decidir).",
      see: [
        ["Empire State de frente", "Lado sul."],
        ["Central Park inteiro", "Lado norte."]
      ],
      tips: [["Horário", "Pro pôr do sol, cheguem pelo menos 30 min antes."]],
      around: [["Hotel", "11 quarteirões a pé."]] },

    washsq: { name: "Washington Square Park", addr: "5th Ave com a Waverly Pl", lat: 40.7308, lon: -73.9973, img: "washsq",
      summary: "O arco de mármore no coração do Village, com músicos e estudantes da NYU em volta.",
      see: [["O arco", "A foto com a Quinta Avenida e o Empire State ao fundo."]],
      tips: [],
      around: [["West Village", "10 min a pé pra oeste."]] },

    westvillage: { name: "West Village", addr: "Bedford St com a Grove St", lat: 40.7322, lon: -74.0053, img: "westvillage",
      summary: "As ruas mais charmosas de Manhattan. Na esquina da Bedford com a Grove fica o prédio da fachada de Friends.",
      see: [
        ["Prédio de Friends", "90 Bedford St, na esquina com a Grove St."],
        ["Casa da Carrie Bradshaw", "66 Perry St, a 5 min (é residência; a escadaria tem corrente)."]
      ],
      tips: [["Respeito", "São prédios residenciais: fotos da calçada, sem subir nas escadas."]],
      around: [["Bleecker St", "Almoço, a 3 min."]] },

    bleecker: { name: "Almoço na Bleecker ou na Carmine", addr: "Bleecker St com a Carmine St", lat: 40.7305, lon: -74.0029, img: "bleecker",
      summary: "Pizza por fatia, cafés e restaurantes pequenos no Village.",
      see: [], tips: [["Barato e bom", "Pizza por fatia é a refeição mais barata e mais nova-iorquina."]],
      around: [["SoHo", "15 min a pé."]] },

    soho: { name: "SoHo", addr: "Greene St e Mercer St; Broadway com a Prince", lat: 40.7247, lon: -73.9989, img: "soho",
      summary: "Prédios de ferro fundido com escadas de incêndio e as lojas da Broadway.",
      see: [
        ["Greene St e Mercer St", "As fachadas de ferro fundido, pra foto."],
        ["Broadway com a Prince", "As lojas."]
      ],
      tips: [["Lojas de departamento", "Antes de outlets, olhem Ross, Marshalls e TJ Maxx: costumam ser mais baratas."], ["Imposto", "Somem cerca de 8,9% ao preço da etiqueta."]],
      around: [["Estação Broadway–Lafayette", "Volta ao hotel (B D F M)."]] },

    amdream: { name: "American Dream · Apple e Meta Lab", addr: "1 American Dream Way, East Rutherford, NJ", lat: 40.8090, lon: -74.0700, img: "amdream",
      summary: "O shopping gigante de New Jersey. Apple American Dream (retirada das compras já pagas) e Meta Lab (Ray-Ban Meta) ficam no mesmo shopping. Dia de chuva: tudo coberto.",
      see: [
        ["Apple American Dream", "2º andar (Court D). Tem área de retirada de pedidos online: levem o e-mail da compra e documento."],
        ["Meta Lab American Dream", "Loja da Meta com Ray-Ban Meta, Oakley Meta e Meta Ray-Ban Display pra experimentar. Funciona das 11h às 22h na sexta (confirmar)."],
        ["Por dentro", "Pista de esqui coberta, Nickelodeon Universe e praça de alimentação, se sobrar tempo."]
      ],
      tips: [
        ["Retirada", "Levem o passaporte e o e-mail de confirmação da Apple; a retirada costuma ser rápida."],
        ["Cartão físico", "Se for comprar algo no Meta Lab, levem o cartão físico da conta global. O preço não inclui o imposto (em NJ, roupas e calçados são isentos; eletrônicos pagam)."],
        ["Volta", "O ônibus direto 355 só volta às 19h e 21h30 em dia de semana. Se a rota que vocês acharam no Maps falhar, Uber é o plano B."]
      ],
      around: [["Praça de alimentação", "Almoço por ali mesmo."]] },

    broadway: { name: "Broadway (se ganharem a loteria)", addr: "Theater District, W 41st–54th", lat: 40.7590, lon: -73.9860, img: "timessq",
      summary: "Noite reservada pra um musical, caso vocês ganhem alguma loteria. Se não ganharem, a noite fica livre (ou TKTS na escadaria vermelha).",
      see: [["Loterias", "Broadway Direct, Telecharge, Lucky Seat e TodayTix (app). Inscrição grátis, geralmente no dia anterior ou na manhã do show."]],
      tips: [
        ["Inscrevam os dois", "Cada um se inscreve pedindo 2 ingressos: dobra a chance. A quantidade não muda depois."],
        ["Prazo pra pagar", "No Broadway Direct, 1 hora depois do e-mail. Deixem o celular com notificação ligada à tarde."],
        ["Plano B", "TKTS embaixo da escadaria vermelha da Times Square, até 50% no mesmo dia. TodayTix Rush às 9h no app."]
      ],
      around: [["Times Square", "Do lado dos teatros."]] },

    harriet: { name: "Harriet's Rooftop", addr: "1 Hotel Brooklyn Bridge, 60 Furman St, 11º andar", lat: 40.7022, lon: -73.9967, img: "harriet",
      summary: "O bar no terraço do hotel 1 Hotel, de frente pra Brooklyn Bridge e o skyline. Abre ao meio-dia no fim de semana (confirmar). Pago, um drinque com a melhor vista do bairro.",
      see: [["A vista", "Brooklyn Bridge inteira de frente, com Lower Manhattan atrás."]],
      tips: [["Clima", "Funciona só com tempo bom; tem um lounge coberto um andar abaixo."], ["Grátis ao lado", "O terraço do Time Out Market (5º andar do Empire Stores) é grátis e tem vista parecida."]],
      around: [["Brooklyn Bridge Park", "Na saída do hotel."]] },

    traderjoes: { name: "Trader Joe's (Chelsea)", addr: "675 6th Ave, entre a W 21st e a W 22nd", lat: 40.7414, lon: -73.9937, img: "traderjoes",
      summary: "O mercado das sacolinhas famosas. Essa loja fica a 3 min do Eataly e do Flatiron.",
      see: [
        ["As sacolas", "As mini tote bags coloridas são as famosas; esgotam rápido, e a reposição é incerta."],
        ["Lembrancinhas", "Temperos (Everything But The Bagel), chocolates e snacks baratos."]
      ],
      tips: [["Menos movimento", "Dia de semana no começo da tarde. O fim de tarde lota."]],
      around: [["Eataly", "3 min a pé."], ["Flatiron Building", "5 min a pé."]] }
  },

  /* ---------- DIAS ---------- */
  flights: [
    { dir: "Ida", from: "Porto Alegre (POA)", to: "Nova York (JFK)", dep: "15/10 · 18:45", arr: "16/10 · 07:05", note: "Com escala" },
    { dir: "Volta", from: "Nova York (JFK)", to: "Porto Alegre (POA)", dep: "23/10 · 20:40", arr: "24/10 · 10:35", note: "Com escala · cheguem ao JFK até 17h40" }
  ],
  weather: { "2026-10-16": "Chuva o dia todo, trovoada à noite · até 23 °C", "2026-10-17": "Sol, frio · 11 °C, mínima 4 °C", "2026-10-18": "Sol · 15 °C", "2026-10-19": "Sol · 18 °C", "2026-10-20": "Sol · 19 °C" },
  days: [
    { n: 1, date: "2026-10-16", title: "Chegada e American Dream", stops: [
      { t: "07:05", p: "jfk", note: "Desembarque e imigração", leg: { mode: "transfer", text: "Traslado contratado até o hotel" } },
      { t: "10:00", p: "hotel", note: "Malas na portaria; check-in às 16h" },
      { t: "11:30", p: "amdream", note: "Retirada na Apple + Meta Lab + almoço", leave: "10:30", leg: { mode: "bus", text: "Ônibus pela rota que vocês acharam no Maps (~1h) · plano B: Uber" } },
      { t: "16:30", p: "hotel", note: "Check-in e descanso", leave: "15:30", leg: { mode: "bus", text: "Ônibus de volta (~1h) · o 355 direto só volta às 19h" } },
      { t: "19:00", p: "timessq", note: "Jantar sugerido: Olive Garden · noite de chuva", leg: { mode: "walk", text: "7 min a pé" } }
    ], extras: [
      ["Whitney Museum", "Sextas 17h–22h com entrada gratuita ou 'pague quanto quiser', segundo sites de viagem (confirmar em whitney.org). Fica no Meatpacking: só se a energia e a chuva deixarem."],
      ["Dormir cedo", "Vocês chegam de voo noturno; amanhã começa às 8h."]
    ] },
    { n: 2, date: "2026-10-17", title: "Downtown", broadway: true, stops: [
      { t: "08:30", p: "bull", leg: { mode: "subway", sub: "d2a" } },
      { t: "10:00", p: "ferry", note: "Ida e volta · sol e vento", leg: { mode: "walk", text: "3 min a pé" } },
      { t: "13:00", p: "stonest", note: "Almoço · Oktoberfest aos sábados", leg: { mode: "walk", text: "5 min a pé" } },
      { t: "14:00", p: "m911", note: "Horário marcado", leg: { mode: "walk", text: "15 min a pé pela Broadway" } },
      { t: "16:30", p: "oculus", leg: { mode: "walk", text: "3 min a pé" } },
      { t: "Volta", p: "hotel", leg: { mode: "subway", sub: "d2b" } },
      { t: "20:00", p: "broadway", note: "Se ganharem a loteria", leg: { mode: "walk", text: "5 a 15 min a pé" } }
    ], extras: [
      ["Pôr do sol em Hoboken (do teu salvo)", "O trem PATH sai de dentro do Oculus pra Hoboken (NJ) em ~15 min. Vista de Manhattan do outro lado do rio, terra do Frank Sinatra. Pôr do sol por volta de 18h10."],
      ["Brookfield Place", "Do lado do Oculus, com praça de alimentação de frente pro rio."]
    ] },
    { n: 3, date: "2026-10-18", title: "Brooklyn", broadway: true, stops: [
      { t: "08:15", p: "bbridge", note: "Cedo, antes da multidão", leg: { mode: "subway", sub: "d3a" } },
      { t: "09:15", p: "dumbo", note: "A foto da Washington St", leg: { mode: "walk", text: "5 min a pé da saída da ponte" } },
      { t: "10:00", p: "bbpark", leg: { mode: "walk", text: "6 min a pé" } },
      { t: "11:00", p: "promenade", leg: { mode: "walk", text: "15 min a pé pela Squibb Park Bridge" } },
      { t: "12:30", p: "timeout", note: "Almoço + rooftop grátis", leg: { mode: "walk", text: "15 min a pé" } },
      { t: "14:00", p: "harriet", note: "Opcional · drinque com vista", leg: { mode: "walk", text: "8 min a pé" } },
      { t: "Volta", p: "hotel", leg: { mode: "subway", sub: "d3b" } },
      { t: "19:00", p: "broadway", note: "Se ganharem a loteria (domingo tem poucas sessões à noite)", leg: { mode: "walk", text: "5 a 15 min a pé" } }
    ], extras: [
      ["Jane's Carousel", "Carrossel de 1922 numa caixa de vidro, no parque."],
      ["Ruas de Brooklyn Heights", "Willow St e Columbia Heights: casas do século XIX."]
    ] },
    { n: 4, date: "2026-10-19", title: "Central Park e Museu", stops: [
      { t: "10:00", p: "cpbike", note: "De manhã: sol e menos gente", leg: { mode: "subway", sub: "d4a" } },
      { t: "12:30", p: "columbus", note: "Almoço + decoração de Halloween", leg: { mode: "walk", text: "10 min a pé" } },
      { t: "16:00", p: "amnh", note: "Chegar 16h · hora grátis 16h30–17h30", leg: { mode: "walk", text: "5 min a pé" } },
      { t: "Volta", p: "hotel", leg: { mode: "subway", sub: "d4b" } }
    ], extras: [
      ["The Met", "Do outro lado do parque, na 5ª Av com a 82nd. Cerca de US$ 30; abre às segundas. Dá pra fazer de manhã, antes da bike."],
      ["Belvedere Castle", "Castelinho no meio do parque, com vista do Turtle Pond."],
      ["Onde estão as cores", "centralparknyc.org, na seção Fall Foliage Tracker, mostra onde as árvores estão mais coloridas (dica de um salvo teu)."]
    ] },
    { n: 5, date: "2026-10-20", title: "West Side e Nebula", stops: [
      { t: "09:30", p: "littleisland", leg: { mode: "subway", sub: "d5a" } },
      { t: "10:30", p: "pier57", leg: { mode: "walk", text: "2 min a pé" } },
      { t: "11:30", p: "chelsea", note: "Dia de semana de manhã: mais tranquilo", leg: { mode: "walk", text: "5 min a pé" } },
      { t: "13:30", p: "highline", note: "Sentido norte, uma 1h", leg: { mode: "walk", text: "Entrada da 16th, do outro lado da rua" } },
      { t: "16:00", p: "vessel", note: "Horário marcado", leg: { mode: "walk", text: "Fim do High Line" } },
      { t: "17:40", p: "hudsonpark", note: "Pôr do sol 18:07", leg: { mode: "walk", text: "5 min a pé" } },
      { t: "19:00", p: "hotel", note: "Jantar e cochilo", leg: { mode: "subway", sub: "d5b" } },
      { t: "23:10", p: "nebula", note: "Até as 4h", leg: { mode: "walk", text: "5 min a pé" } }
    ], extras: [
      ["Whitney Museum", "Do lado da entrada sul do High Line (Gansevoort St). Cerca de US$ 30."],
      ["Edge (Hudson Yards)", "Mirante com chão de vidro, pago, ao lado do Vessel."]
    ] },
    { n: 6, date: "2026-10-21", title: "Midtown Leste e o jogo", stops: [
      { t: "10:00", p: "mcny", note: "Grátis às quartas", leg: { mode: "subway", sub: "d6a" } },
      { t: "12:30", p: "grandcentral", note: "Almoço no mercado de baixo", leg: { mode: "subway", sub: "d6b" } },
      { t: "13:30", p: "bryant", note: "Com a Biblioteca Pública", leg: { mode: "walk", text: "7 min a pé pela 42nd" } },
      { t: "14:45", p: "tram", leg: { mode: "subway", sub: "d6c" } },
      { t: "16:00", p: "stpatrick", note: "Descendo a 5ª Av da 59th à 49th", leg: { mode: "walk", text: "15 min a pé até a 5ª Av" } },
      { t: "18:00", p: "barclays", note: "A decidir · portões 18h · jogo 19h30", leg: { mode: "subway", sub: "d6d" } },
      { t: "Volta", p: "hotel", leg: { mode: "subway", sub: "d6e" } }
    ], extras: [
      ["Se não forem ao jogo", "Noite livre pra Broadway (loteria) ou Times Square."],
      ["Chrysler Building", "O saguão art déco, na Lexington com a 42nd, ao lado da Grand Central."],
      ["Summit One Vanderbilt", "Mirante de espelhos colado na Grand Central (pago)."]
    ] },
    { n: 7, date: "2026-10-22", title: "Flatiron, bairros e mirante", broadway: true, stops: [
      { t: "10:00", p: "hp", note: "A decidir", leg: { mode: "subway", sub: "d7a" } },
      { t: "11:30", p: "flatiron", leg: { mode: "walk", text: "1 quarteirão" } },
      { t: "13:00", p: "eataly", note: "Almoço", leg: { mode: "walk", text: "Do outro lado da rua" } },
      { t: "14:00", p: "traderjoes", note: "As sacolinhas", leg: { mode: "walk", text: "5 min a pé pela 22nd" } },
      { t: "14:45", p: "friends", note: "A decidir", alt: "unionsq", leg: { mode: "walk", text: "12 min a pé" } },
      { t: "17:15", p: "rock", note: "A decidir · pôr do sol 18:05", leg: { mode: "subway", sub: "d7b" } },
      { t: "20:00", p: "broadway", note: "Se ganharem a loteria", leg: { mode: "walk", text: "5 a 10 min a pé" } }
    ], extras: [
      ["Strand Bookstore", "Livraria gigante de usados, na Broadway com a 12th."],
      ["Shake Shack original", "Dentro do Madison Square Park."]
    ] },
    { n: 8, date: "2026-10-23", title: "Village, SoHo e volta", stops: [
      { t: "10:00", p: "hotel", note: "Check-out; malas ficam na recepção" },
      { t: "10:30", p: "washsq", leg: { mode: "subway", sub: "d8a" } },
      { t: "11:30", p: "westvillage", leg: { mode: "walk", text: "10 min a pé" } },
      { t: "12:30", p: "bleecker", note: "Almoço", leg: { mode: "walk", text: "3 min a pé" } },
      { t: "13:30", p: "soho", leg: { mode: "walk", text: "15 min a pé" } },
      { t: "15:45", p: "hotel", note: "Pegar as malas", leg: { mode: "subway", sub: "d8b" } },
      { t: "16:30", p: "jfk", note: "Voo 20:40 · saiam no máximo 16h30", leg: { mode: "subway", sub: "d8c" } }
    ], extras: [
      ["MoMA Design Store (do teu salvo)", "Loja de design do MoMA no SoHo, 81 Spring St."]
    ] }
  ],

  /* ---------- METRÔ PASSO A PASSO ---------- */
  subway: {
    d2a: { title: "Do hotel até Wall Street", lines: ["R"], dir: "Downtown & Brooklyn", sign: "R · Bay Ridge–95 St",
      from: "34 St–Herald Sq", walkIn: "5 min a pé. Desçam pela entrada da Broadway com a 35th e sigam as placas amarelas N Q R W.",
      stops: ["28 St", "23 St", "14 St–Union Sq", "8 St–NYU", "Prince St", "Canal St", "City Hall", "Cortlandt St", "Rector St"],
      exit: "Rector St: saiam pela Trinity Place e desçam a Broadway; o touro fica a 5 min, no Bowling Green.",
      mins: 20, note: "O W não roda no fim de semana. Hoje é sábado: só o R.", from_ll: [40.7497, -73.9878], to_ll: [40.7072, -74.0131] },
    d2b: { title: "Do World Trade Center até o hotel", lines: ["R"], dir: "Uptown & Queens", sign: "R · Forest Hills–71 Av",
      from: "Cortlandt St", walkIn: "A estação fica dentro do complexo do World Trade Center; sigam as placas do R.",
      stops: ["City Hall", "Canal St", "Prince St", "8 St–NYU", "14 St–Union Sq", "23 St", "28 St", "34 St–Herald Sq"],
      exit: "34 St–Herald Sq: saiam pela Broadway com a 35th; o hotel fica a 5 min (pela 6ª Av até a 38th).",
      mins: 20, from_ll: [40.7108, -74.0120], to_ll: [40.7497, -73.9878] },
    d3a: { title: "Do hotel até a Brooklyn Bridge", lines: ["R"], dir: "Downtown & Brooklyn", sign: "R · Bay Ridge–95 St",
      from: "34 St–Herald Sq", walkIn: "5 min a pé. Entrada na Broadway com a 35th; sigam as placas amarelas N Q R W.",
      stops: ["28 St", "23 St", "14 St–Union Sq", "8 St–NYU", "Prince St", "Canal St", "City Hall"],
      exit: "City Hall: saiam no City Hall Park. A entrada de pedestres da ponte fica na Park Row, em frente à prefeitura (3 min).",
      mins: 18, note: "Domingo: o W não roda. Peguem o R.", from_ll: [40.7497, -73.9878], to_ll: [40.7133, -74.0072] },
    d3b: { title: "De Dumbo até o hotel", lines: ["F"], dir: "Manhattan", sign: "F · Jamaica–179 St",
      from: "York St", walkIn: "Do Time Out Market ou do Harriet's, uns 8 min a pé até a Jay St com a York St.",
      stops: ["East Broadway", "Delancey St–Essex St", "2 Av", "Broadway–Lafayette", "W 4 St–Wash Sq", "14 St", "23 St", "34 St–Herald Sq", "42 St–Bryant Park"],
      exit: "42 St–Bryant Park: saiam pela 6ª Av com a 40th; o hotel fica a 4 min.",
      mins: 25, from_ll: [40.7014, -73.9866], to_ll: [40.7543, -73.9840] },
    d4a: { title: "Do hotel até o Central Park (aluguel de bike)", lines: ["B"], dir: "Uptown & The Bronx", sign: "B · Bedford Park Blvd",
      from: "42 St–Bryant Park", walkIn: "4 min a pé, entrada na 6ª Av com a 42nd. Procurem a bolinha laranja B.",
      stops: ["47–50 Sts–Rockefeller Ctr", "7 Av", "59 St–Columbus Circle", "72 St"],
      exit: "72 St: saiam na Central Park West com a 72nd; o parque e o aluguel de bike ficam do outro lado da rua.",
      mins: 12, note: "Peguem o B, não o D: o D é expresso e não para na 72 St.", from_ll: [40.7543, -73.9840], to_ll: [40.7760, -73.9762] },
    d4b: { title: "Do museu até o hotel", lines: ["B"], dir: "Downtown & Brooklyn", sign: "B · Brighton Beach",
      from: "81 St–Museum of Natural History", walkIn: "A estação tem uma saída direto de dentro do museu, no nível do metrô.",
      stops: ["72 St", "59 St–Columbus Circle", "7 Av", "47–50 Sts–Rockefeller Ctr", "42 St–Bryant Park"],
      exit: "42 St–Bryant Park: saiam pela 6ª Av com a 40th; o hotel fica a 4 min.",
      mins: 15, note: "O C também passa ali, mas vai pela 8ª Av; fiquem com o B.", from_ll: [40.7815, -73.9722], to_ll: [40.7543, -73.9840] },
    d5a: { title: "Do hotel até a Little Island", lines: ["F", "M"], dir: "Downtown & Brooklyn", sign: "F ou M",
      from: "42 St–Bryant Park", walkIn: "4 min a pé, entrada na 6ª Av com a 40th.",
      stops: ["34 St–Herald Sq", "23 St", "14 St"],
      exit: "14 St: saiam na 6ª Av com a 14th e andem pra oeste pela 14th até o rio Hudson (12 min). A Little Island fica na altura da 13th.",
      mins: 8, from_ll: [40.7543, -73.9840], to_ll: [40.7382, -73.9962] },
    d5b: { title: "De Hudson Yards até o hotel", lines: ["7"], dir: "Flushing", sign: "7 · Flushing–Main St",
      from: "34 St–Hudson Yards", walkIn: "7 min a pé do rio. A entrada é um prédio de vidro na 11ª Av com a 34th; escadas rolantes bem compridas.",
      stops: ["Times Sq–42 St", "5 Av"],
      exit: "5 Av: saiam na 5ª Av com a 41st; o hotel fica a 5 min (pela 5ª até a 38th).",
      mins: 8, from_ll: [40.7553, -74.0018], to_ll: [40.7536, -73.9813] },
    d6a: { title: "Do hotel até o Museum of the City of NY", lines: ["6"], dir: "Uptown & The Bronx", sign: "6 · Pelham Bay Park",
      from: "Grand Central–42 St", walkIn: "10 min a pé até a Grand Central, pela 42nd. Lá dentro, sigam as placas verdes 4 5 6.",
      stops: ["51 St", "59 St", "68 St–Hunter College", "77 St", "86 St", "96 St", "103 St"],
      exit: "103 St: saiam na Lexington com a 103rd e andem pra oeste pela 103rd até a 5ª Av (8 min).",
      mins: 20, note: "O 4 e o 5 também passam ali, mas são expressos e pulam a 103 St. Peguem o 6.", from_ll: [40.7527, -73.9772], to_ll: [40.7906, -73.9476] },
    d6b: { title: "Do museu até a Grand Central", lines: ["6"], dir: "Downtown & Brooklyn", sign: "6 · Brooklyn Bridge–City Hall",
      from: "103 St", walkIn: "8 min a pé pela 103rd até a Lexington.",
      stops: ["96 St", "86 St", "77 St", "68 St–Hunter College", "59 St", "51 St", "Grand Central–42 St"],
      exit: "Grand Central: sigam as placas Main Concourse; a praça de alimentação fica um andar abaixo.",
      mins: 20, from_ll: [40.7906, -73.9476], to_ll: [40.7527, -73.9772] },
    d6c: { title: "Do Bryant Park até o bondinho", lines: ["6"], dir: "Uptown & The Bronx", sign: "6 · Pelham Bay Park",
      from: "Grand Central–42 St", walkIn: "7 min a pé pela 42nd até a Grand Central. Lá dentro, placas verdes 4 5 6.",
      stops: ["51 St", "59 St"],
      exit: "59 St: saiam na Lexington com a 60th e andem 3 quarteirões pra leste até a 2ª Av. O bondinho sai da E 59th com a 2ª Av.",
      mins: 6, from_ll: [40.7527, -73.9772], to_ll: [40.7626, -73.9676] },
    d6d: { title: "Da St. Patrick até o Barclays Center", lines: ["B", "D"], dir: "Downtown & Brooklyn", sign: "B ou D",
      from: "47–50 Sts–Rockefeller Ctr", walkIn: "4 min a pé da catedral: entrada na 6ª Av, entre a 47th e a 50th.",
      stops: ["42 St–Bryant Park", "34 St–Herald Sq", "W 4 St–Wash Sq", "Broadway–Lafayette", "Grand St", "DeKalb Av (só o B)", "Atlantic Av–Barclays Ctr"],
      exit: "Atlantic Av–Barclays Ctr: sigam a placa Barclays Center; a arena fica em cima da estação.",
      mins: 25, note: "O B para em DeKalb Av e o D não. Os dois chegam ao Barclays.", from_ll: [40.7586, -73.9813], to_ll: [40.6843, -73.9776] },
    d6e: { title: "Do jogo até o hotel", lines: ["B", "D"], dir: "Manhattan", sign: "B ou D",
      from: "Atlantic Av–Barclays Ctr", walkIn: "A estação fica embaixo da arena. Depois do jogo enche; tenham paciência na plataforma.",
      stops: ["DeKalb Av (só o B)", "Grand St", "Broadway–Lafayette", "W 4 St–Wash Sq", "34 St–Herald Sq", "42 St–Bryant Park"],
      exit: "42 St–Bryant Park: saiam pela 6ª Av com a 40th; o hotel fica a 4 min.",
      mins: 25, note: "Olhem pela janela quando o trem sair do túnel e cruzar a Manhattan Bridge: o skyline iluminado.", from_ll: [40.6843, -73.9776], to_ll: [40.7543, -73.9840] },
    d7a: { title: "Do hotel até a loja do Harry Potter", lines: ["R", "W"], dir: "Downtown & Brooklyn", sign: "R ou W",
      from: "34 St–Herald Sq", walkIn: "5 min a pé, entrada na Broadway com a 35th.",
      stops: ["28 St", "23 St"],
      exit: "23 St: saiam na Broadway com a 23rd; a loja fica no 935 da Broadway, na 22nd.",
      mins: 5, note: "Evitem o N e o Q: podem pular essas paradas.", from_ll: [40.7497, -73.9878], to_ll: [40.7413, -73.9893] },
    d7b: { title: "De Flatiron até o Top of the Rock", lines: ["F", "M"], dir: "Uptown & Queens", sign: "F ou M",
      from: "23 St (6ª Av)", walkIn: "Da 23rd com a Lexington, andem pra oeste até a 6ª Av (12 min). Entrada na 6ª Av com a 23rd.",
      stops: ["34 St–Herald Sq", "42 St–Bryant Park", "47–50 Sts–Rockefeller Ctr"],
      exit: "47–50 Sts: sigam as placas Rockefeller Center; a entrada do Top of the Rock fica na 50th, entre a 5ª e a 6ª Av.",
      mins: 10, from_ll: [40.7429, -73.9928], to_ll: [40.7586, -73.9813] },
    d8a: { title: "Do hotel até Washington Square", lines: ["F", "M"], dir: "Downtown & Brooklyn", sign: "F ou M (ou B / D, expressos)",
      from: "42 St–Bryant Park", walkIn: "4 min a pé, entrada na 6ª Av com a 40th.",
      stops: ["34 St–Herald Sq", "23 St", "14 St", "W 4 St–Wash Sq"],
      exit: "W 4 St: saiam pela W 3rd St; o arco fica a 3 min pra leste.",
      mins: 10, from_ll: [40.7543, -73.9840], to_ll: [40.7322, -74.0005] },
    d8b: { title: "Do SoHo até o hotel", lines: ["F", "M"], dir: "Uptown & Queens", sign: "F ou M (ou B / D)",
      from: "Broadway–Lafayette", walkIn: "Entrada na Houston com a Lafayette ou com a Broadway.",
      stops: ["W 4 St–Wash Sq", "14 St", "23 St", "34 St–Herald Sq", "42 St–Bryant Park"],
      exit: "42 St–Bryant Park: saiam pela 6ª Av com a 40th; o hotel fica a 4 min.",
      mins: 15, from_ll: [40.7253, -73.9962], to_ll: [40.7543, -73.9840] },
    d8c: { title: "Do hotel até o JFK", lines: ["E"], dir: "Queens", sign: "E · Jamaica Center",
      from: "34 St–Penn Station (8ª Av)", walkIn: "10 min a pé com as malas: pela 38th até a 8ª Av e descendo até a 34th. Usem os elevadores sinalizados.",
      stops: ["42 St–Port Authority", "50 St", "7 Av", "5 Av/53 St", "Lexington Av/53 St", "Court Sq", "Queens Plaza", "Jackson Hts–Roosevelt Av", "Forest Hills–71 Av", "Kew Gardens–Union Tpke", "Briarwood", "Sutphin Blvd–Archer Av–JFK"],
      exit: "Sutphin Blvd: sigam as placas AirTrain JFK. O AirTrain cobra cerca de US$ 8,50 por pessoa; leva uns 10 min até o terminal.",
      mins: 60, note: "Sexta de tarde é horário de pico e o metrô enche. Saiam no máximo às 16h30, ou peguem um Uber.", from_ll: [40.7523, -73.9932], to_ll: [40.7003, -73.8076] }
  },

  /* ---------- INGRESSOS ---------- */
  tickets: [
    { id: "apple", name: "Apple American Dream · retirada", when: "Sex 16 · ~12:00", place: "amdream", status: "comprado", price: "Já pago, só retirar" },
    { id: "bway", name: "Broadway · loteria diária", when: "Inscrição todo dia", place: "broadway", status: "decidir", price: "Grátis pra entrar, ~US$ 35–60 se ganhar", url: "https://lottery.broadwaydirect.com/", site: "broadwaydirect.com" },
    { id: "m911", name: "9/11 Memorial Museum", when: "Sáb 17 · 14:00", place: "m911", status: "comprado", url: "https://www.911memorial.org/visit", site: "911memorial.org" },
    { id: "vessel", name: "Vessel", when: "Ter 20 · 16:00", place: "vessel", status: "comprado", url: "https://www.hudsonyardsnewyork.com/discover/vessel", site: "hudsonyardsnewyork.com" },
    { id: "nebula", name: "Nebula", when: "Ter 20 · 23:10", place: "nebula", status: "comprado" },
    { id: "amnh", name: "Museu de História Natural · hora grátis", when: "Seg 19 · 16:30", place: "amnh", status: "comprar", price: "Reservar o horário das 16h30 (grátis, esgota)", url: "https://www.amnh.org/plan-your-visit", site: "amnh.org" },
    { id: "mcny", name: "Museum of the City of NY", when: "Qua 21 · 10:00", place: "mcny", status: "comprar", price: "Grátis às quartas", url: "https://www.mcny.org/visit", site: "mcny.org" },
    { id: "bike", name: "Bike no Central Park", when: "Seg 19 · 10:00", place: "cpbike", status: "local", price: "US$ 22 por pessoa" },
    { id: "nets", name: "Nets x Hornets", when: "Qua 21 · 19:30", place: "barclays", status: "decidir", url: "https://www.nba.com/nets/tickets", site: "nba.com/nets" },
    { id: "hp", name: "Harry Potter New York", when: "Qui 22 · 10:00", place: "hp", status: "decidir", price: "Loja grátis; experiências pagas", url: "https://harrypotterstore.com/new-york", site: "harrypotterstore.com" },
    { id: "friends", name: "Friends Experience", when: "Qui 22 · 14:45", place: "friends", status: "decidir", price: "US$ 52", url: "https://www.friendstheexperience.com/", site: "friendstheexperience.com" },
    { id: "rock", name: "Top of the Rock", when: "Qui 22 · 17:15", place: "rock", status: "decidir", url: "https://www.rockefellercenter.com/attractions/top-of-the-rock-observation-deck/", site: "rockefellercenter.com" }
  ],

  /* ---------- DICAS GERAIS ---------- */
  tips: [
    { group: "Metrô", items: [
      ["Pagar com o celular", "Aproximem o iPhone (Apple Pay) ou o cartão no leitor OMNY da catraca. Um aparelho por pessoa: não dá pra passar duas vezes com o mesmo celular."],
      ["Limite da semana", "Depois de 12 viagens em 7 dias com o mesmo cartão ou celular, o resto sai de graça. Usem sempre o mesmo aparelho."],
      ["Mapa de papel grátis", "Na cabine da estação, peçam: \"Can I get a subway map, please?\" É grátis e vira lembrança."],
      ["Uptown × Downtown", "Antes de passar a catraca, confiram a placa: Uptown (pro norte) ou Downtown (pro sul). Algumas estações têm entradas separadas pra cada sentido."],
      ["Local × Express", "Trens expressos pulam paradas. Na tela de cada trajeto o app diz qual linha pegar."]
    ] },
    { group: "Dinheiro", items: [
      ["Cartão físico", "Levem o cartão físico da conta global (Wise, Nomad etc.). Cartão só digital pode ser recusado em lojas grandes."],
      ["Imposto", "O preço da etiqueta não inclui o imposto de NY (cerca de 8,9%), que entra no caixa."],
      ["Gorjeta", "18 a 20% em restaurante com serviço de mesa, bar e serviços."],
      ["Compras", "Antes dos outlets, olhem Ross, Marshalls e TJ Maxx."]
    ] },
    { group: "Comer", items: [
      ["Água grátis", "Peçam \"tap water\": a água da torneira é grátis e boa. A engarrafada é cobrada."],
      ["Porções", "São grandes: dá pra dividir. Refil de refrigerante é comum."],
      ["Olive Garden", "Na Times Square, massa à vontade por US$ 14,99 até 22/11."],
      ["Pedir em inglês", "\"Can I get...?\" ou \"I'd like...\". \"I want\" soa rude."]
    ] },
    { group: "Saúde e segurança", items: [
      ["Dipirona", "Dipirona (Novalgina) não é aprovada nos EUA. Levem só o necessário, na embalagem original e com receita. Pra dor, comprem paracetamol (Tylenol) ou ibuprofeno (Advil) em qualquer farmácia."],
      ["Golpes", "Ninguém vende ingresso de verdade na rua. Ignorem quem abordar no Battery Park ou na Times Square."]
    ] },
    { group: "Broadway", items: [
      ["Loteria todo dia", "Todo dia de manhã, inscrevam os dois nas loterias dos shows que querem: Broadway Direct (sem conta), Telecharge (conta grátis), Lucky Seat e o app TodayTix. A maioria abre no dia anterior ou na manhã do show."],
      ["Noites reservadas", "Sábado 17, domingo 18 e quinta 22 (e quarta 21, se desistirem do jogo)."],
      ["Ganharam?", "Pagamento em até 1 hora no Broadway Direct. Deixem as notificações ligadas."],
      ["Plano B", "TKTS na escadaria vermelha da Times Square (mesmo dia, até 50%) e TodayTix Rush às 9h."]
    ] },
    { group: "Banheiro na rua", items: [
      ["Onde ir", "Parques (Bryant Park, Central Park, Madison Square Park), Starbucks, lojas de departamento (Macy's, Target), bibliotecas e estações grandes (Grand Central, Oculus). Dica de um salvo teu."]
    ] },
    { group: "Clima", items: [
      ["Previsão (13/10)", "Chuva só na sexta 16; sábado a terça, sol. Sábado é o dia mais frio (máx. 11 °C, mín. 4 °C). Quarta a sexta ainda sem previsão."],
      ["Outubro", "Entre 10 °C e 18 °C. Camadas leves de dia, casaco mais quente à noite e tênis confortável: vocês vão andar muito."]
    ] }
  ]
};

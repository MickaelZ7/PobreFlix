var app = angular.module("appflix", []);
        
app.controller("app", function ($scope) {
  $scope.filme = [
    {
      "desc_filme": "Um olheiro de basquete azarado encontra um jogador com um grande potencial e se esforça para mostrar ao mundo que os dois merecem chegar à NBA.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSygWwpfA4BE_MfKY9Ios7m5_PH7_oRPSuA_g&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FArremessando%20Alto%20-%20Filme.mp4?alt=media&token=610b165d-72c8-4b74-9871-7025d07a6086",
      "nome_filme": "Arremessando alto",
      "trt_filme": "nM4iy0reaCA"
    },
    {
      "desc_filme": "Zé Colmeia e seu amigo, Catatau, são os mais notórios arruaceiros do Parque Jellystone. Eles desenvolvem incontáveis planos para afastar os visitantes do parque e de suas comidas. Atrapalhando o piquenique perfeito está o inimigo, Guarda Smith. Mas quando o prefeito Brown anuncia que quer vender o parque para madeireiros, Zé Colmeia, Catatau e Guarda Smith juntam forças para salvar seu amado lar de fechar para sempre.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdTB0g-s38ih2xTdIyF4hrwI-YYvMvX2beg&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FZ%C3%A9%20Colmeia%20-%20o%20Filme.mp4?alt=media&token=34173008-40a2-433d-b9ec-fb2989e5f816",
      "nome_filme": "Zé Colméia – O Filme"
    },
     {
      "desc_filme": "Jovem metade galinha metade coelho adotado pelo Rei Arthur, Hopper Chickenson está sempre pronto para a ação, mas de um jeito bastante destrambelhado. Ele se juntará a um time de notáveis para evitar uma tragédia no reino.",
      "img_filme": "https://media.fstatic.com/mr7w8avle-dfcLppIBgGwThA28U=/210x312/smart/filters:format(webp)/media/movies/covers/2022/06/Frangoelho-e-o-Hamster-das-Trevas-300x450.jpg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fo%20frangoelho%20-%20Filme.mp4?alt=media&token=b0057c23-c9e2-4a08-9ea7-7f6dc968c2fd",
      "nome_filme": "Frangoelho e o Hamster das Trevas"
    },
     {
      "desc_filme": "The Man from Toronto é um futuro filme americano do gênero comédia de ação dirigido por Patrick Hughes e estrelado por Kevin Hart, Woody Harrelson, Kaley Cuoco e Ellen Barkin.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo0qoNNSXtk84cuzOxJuQb6gz6XDdSCiGBJtAxiuZFWDfsk-cXroxV-oDS&s=10",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fo%20homem%20de%20Toronto%20-%20Filme.mp4?alt=media&token=598eac2a-0887-4e6e-8c9b-9351876d8ae0",
      "nome_filme": "O Homem de Toronto"
    },
     {
      "desc_filme": "Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz, logo reúne os únicos super-heróis que serão capazes de defender a Terra de ameaças sem precedentes. Homem de Ferro, Capitão América, Hulk, Thor, Viúva Negra e Gavião Arqueiro formam o time dos sonhos de Fury, mas eles precisam aprender a colocar os egos de lado e agir como um grupo em prol da humanidade.",
      "img_filme": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQmkXsIZ89RVeyZkI_v3cLLB4MFd-KlVNXub-M16petJKffpZiw",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAvenger%20-%20Filme.mp4?alt=media&token=bb86d4a7-6b6c-4bf2-b956-1d7de490d093",
      "nome_filme": "Os Vingadores – The Avengers"
    },
     {
      "desc_filme": "Durante um passeio com a família em uma manhã de inverno no Lago St Louis, no Missouri, o menino John Smith, de apenas 14 anos, sofre uma queda e se afoga por mais de 15 minutos. Chegando ao hospital, John é considerado morto por mais de uma hora até que sua mãe, Joyce Smith, ao lado do pai e de um pastor, junta todas as suas forças e pede a Deus para que seu filho sobreviva. Sua prece poderosa é responsável por um milagre inédito.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNmijd1Ryd1WFkxtnoa4iRbGV91joYOxPew1vve7IGGCP1I9M8",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fo%20milagre%20da%20f%C3%A9%20-%20Filme.mp4?alt=media&token=b049faee-0950-4d77-9af9-7b70d5f952df",
      "nome_filme": "Superação: O Milagre da Fé"
    },
     {
      "desc_filme": "Em Rise, após emigrarem da Grécia para Nigéria, Vera e Charles Antetokounmpo lutaram para sobreviver e sustentar seus cinco filhos, enquanto viviam sob a ameaça diária de deportação. Com seu filho mais velho ainda na Nigéria com parentes, o casal estava desesperado para obter cidadania grega mas se viu minado por um sistema que os bloqueava a cada tentativa. Quando não estavam vendendo artigos para turistas nas ruas com o resto da família, encorajados pelo pai, os irmãos iam escondidos jogar basquete com um time juvenil local. Ingressando tarde no esporte, eles descobriram suas grandes habilidades na quadra de basquete e se esforçaram muito para se tornarem atletas de altíssimo nível. Com a ajuda de um agente, Giannis entrou no NBA Draft em 2013 em uma improvável perspectiva que mudaria não apenas sua vida, mas a vida de toda a sua família",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfud31zyUWpCM9HrmLj4BpQXqXzikW9ydajw&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Frise%20-%20Filme.mp4?alt=media&token=8bc11467-1c90-4ae4-ab35-783e63d3c1ef",
      "nome_filme": "Rise"
    },
     {
      "desc_filme": "Em Doutor Estranho no Multiverso da Loucura, após derrotar Dormammu e enfrentar Thanos nos eventos de Vingadores: Ultimato, o Mago Supremo, Stephen Strange (Benedict Cumberbatch), e seu parceiro Wong (Benedict Wong), continuam suas pesquisas sobre a Joia do Tempo. Mas um velho amigo que virou inimigo coloca um ponto final nos seus planos e faz com que Strange desencadeie um mal indescritível, o obrigando a enfrentar uma nova e poderosa ameaça. O longa se conecta com a série do Disney+ WandaVision e tem relação também com Loki. O longa pertence a fase 4 do MCU onde a realidade do universo pode entrar em colapso por causa do mesmo feitiço que trouxe os vilões do Teioso para o mundo dos Vingadores e o Mago Supremo precisará contar com a ajuda de Wanda (Elizabeth Olsen), que vive isolada desde os eventos de WandaVision.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcTfSdNEsaGk0_aRSPLNUi0hx55qXW1pld6xN46qtKvDQX4iJyW09XroaD&s=10",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fdoutor%20estranho%20-%20Filme.mp4?alt=media&token=c4942376-a432-423b-949e-db79a1084d3a",
      "nome_filme": "Doutor Estranho no Multiverso da Loucura"
    },
     {
      "desc_filme": "Em Homem-Aranha: Sem Volta para Casa, Peter Parker (Tom Holland) precisará lidar com as consequências da sua identidade como o herói mais querido do mundo após ter sido revelada pela reportagem do Clarim Diário, com uma gravação feita por Mysterio (Jake Gyllenhaal) no filme anterior. Incapaz de separar sua vida normal das aventuras de ser um super-herói, além de ter sua reputação arruinada por acharem que foi ele quem matou Mysterio e pondo em risco seus entes mais queridos, Parker pede ao Doutor Estranho (Benedict Cumberbatch) para que todos esqueçam sua verdadeira identidade. Entretanto, o feitiço não sai como planejado e a situação torna-se ainda mais perigosa quando vilões de outras versões de Homem-Aranha de outro universos acabam indo para seu mundo. Agora, Peter não só deter vilões de suas outras versões e fazer com que eles voltem para seu universo original, mas também aprender que, com grandes poderes vem grandes responsabilidades como herói.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeoFKAlVEDJr4gWmlGzlK7k_fHAZ6J5riMiudyPt_rTk9YTpuO",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fhomem%20aranha%20-%20Filme.mp4?alt=media&token=5e51c613-cfbd-4072-91ac-69b47a448d2e",
      "nome_filme": "HOMEM-ARANHA: SEM VOLTA PARA CASA"
    },
     {
      "desc_filme": "Quando uma jovem aspirante a artista é forçada a se juntar à equipe de atletismo da escola, ela usa isso como uma oportunidade para se aproximar da garota por quem ela nutre uma paixão de longa data. Mas ela logo se apaixona por uma companheira de equipe inesperada e descobre o verdadeiro significado de amor.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3--EDmpTp3EOPWSThe9jTg9GVk75IWkCZDQ&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fcrush%20o%20amor%20-%20Filme.mp4?alt=media&token=943c9bbf-f85d-4881-bdf9-1f5693c53529",
      "nome_filme": "Crush: Amor Colorido"
    },
     {
      "desc_filme": "Nathan Drake e seu parceiro canastrão Victor \"Sully\" Sullivan embarcam em uma perigosa busca para encontrar o maior tesouro jamais encontrado. Enquanto isso, eles também rastreiam pistas que podem levar ao irmão perdido de Nathan.",
      "img_filme": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRdhVox6HMHdojYOTphlniAHlDWeE96wYrQZUnlDOaOU5iY_K90",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FUncharted%20-%20Filme.mp4?alt=media&token=bbf78fa0-01ab-498e-92e4-393c6628fd5b",
      "nome_filme": "Uncharted: Fora do Mapa"
    },
     {
      "desc_filme": "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.",
      "img_filme": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQt8yNufq2Jp9-D4BrCYYW5Y_jm8HXRE6NDczXQbTjV-5DMBS4o",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAssistir%20Batman%202022%20Online%20%E2%80%93%20Cine%20Vision%20V5.mp4?alt=media&token=b8b75534-2d1d-4c78-9689-e0c40b91fe96",
      "nome_filme": "The Batman",
      "youtube_filme": "HJv4LQxbVEA"
    },
     {
      "desc_filme": "O Príncipe Amleth está prestes a se tornar um homem quando seu tio assassina seu pai e sequestra sua mãe. Duas décadas depois, o jovem é agora um viking com a missão de salvar a mãe, matar o tio e vingar seu pai.",
      "img_filme": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ1CqHru_uUp3u8XeHUeoleeHGPMQjBYqifjTd5TkfVwRgsOO8O",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fhomem%20do%20norte%20-%20Filme.mp4?alt=media&token=243a609b-2d2b-4161-9922-341d686046b7",
      "nome_filme": "O Homem do Norte"
    },
     {
      "desc_filme": "Depois de uma vida inteira de assaltos lendários, os notórios criminosos Sr. Lobo, Sr. Cobra, Sr. Piranha, Sr. Tubarão e Srta. Tarântula são finalmente capturados. Para evitar uma sentença de prisão, os bandidos animais devem realizar seu golpe mais desafiador até agora - tornando-se cidadãos-modelo. Sob a tutela de seu mentor, Professor Marmelada, a duvidosa gangue se propõe a enganar o mundo e mostrar que está se tornando boa.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZ89soy6QF1LtZHnJneXtiyLQqoTt9spjFehM1H4fdMT1pTwD",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FOs%20Caras%20Malvados%20-%20Filme.mp4?alt=media&token=b0b55164-446a-4142-a0ba-f783db581a64",
      "nome_filme": "Os Caras Malvados"
    },
     {
      "desc_filme": "O bioquímico Michael Morbius tenta curar-se de uma doença rara no sangue mas, sem perceber, ele fica infectado com uma forma de vampirismo.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROpIKX2iKXzuv6drNKrg8fhUJda06Knms9UPS9JGlFLdkO91fO",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FMorbius%20-%20Filme.mp4?alt=media&token=c2e1ec0a-e2e7-4b8b-aa45-5f5cab540db8",
      "nome_filme": "Morbius"
    },
     {
      "desc_filme": "Os Simpsons: O Bom, o Bart e o Loki, ou simplesmente O Bom, o Bart e o Loki, é um curta-metragem de animação americano baseado na série de televisão Os Simpsons produzida pela Gracie Filmes e na 20th Television Animation para Disney +.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSr6GIZmoo-trCHkA8uvQohaGUKacPGnLbEg0BjPbdu83ycn34X",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FO%20bem%2C%20o%20Bart%20e%20o%20Loki%20-%20Filme.mp4?alt=media&token=62971515-564e-4407-a26e-c782d2a5bf32",
      "nome_filme": "O bem, o Bart e o Loki"
    },
    {
      "desc_filme": "A nova invenção de Van Helsing transforma Drac e os amigos em humanos, e Johnny em um monstro. Agora, Drac deve encontrar uma maneira de reverter o feitiço antes que a mudança se torne permanente.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSb9uhiXv4Cr8EBH35cpedXkWusfnokbjAYYrraXsxjYj9omqP0",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FHotel%20Transilv%C3%A2nia_%20Transformonstr%C3%A3o%20-%20Filme.mp4?alt=media&token=fc00e4ac-984d-4c60-a74d-f1442865d1b8",
      "nome_filme": "Hotel Transilvânia: Transformonstrão"
    },
     {
      "desc_filme": "Ao ouvirem a notícia sobre o dilúvio, Dave e seu filho Finny correm para checar sua entrada na Arca de Noé e descobrem que ficaram de fora. Eles se disfarçam e conseguem entrar. Dentro da embarcação, Finny e sua amiga Leah acidentalmente vão para fora e, quando a Arca flutua, eles caem na água. Agora, Finny e Leah precisam sobreviver a predadores famintos e a inundação e tentar chegar ao topo de uma montanha.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4I4vIYzGYxNSJFhCeScqo48YRFbz5h_xzJg&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fepa%20cad%C3%AA%20no%C3%A9.mp4?alt=media&token=f7a6f710-e5f6-4cfc-ae14-b2cda01ca06e",
      "nome_filme": "Epa! Cadê o Noé?"
    },
     {
      "desc_filme": "Apresentando cineastas, contadores de histórias, artistas e membros do elenco de voz de Lightyear, o documentário detalha como o design original da figura de ação de Buzz surgiu e como esse visual se traduziu anos depois no herói da vida real que estrela Lightyear",
      "img_filme": "https://img.auroraservers.re/wp-content/uploads/2022/06/kvlULW0N25e7jVeGyYMTWrGWNzq.jpg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FLightyear%20-%20Filme.mp4?alt=media&token=c1f20d8f-577a-40d2-a9fe-87a3410d4d86",
      "nome_filme": "Ao Infinito e Além: Buzz e sua Jornada para ser Lightyear"
    },
     {
      "desc_filme": "Uma aventura de ação de ficção científica e a história de origem definitiva de Buzz Lightyear, o herói que inspirou o brinquedo em Toy Story (1995). Lightyear segue o lendário Patrulheiro Espacial depois que em um teste de voo da nave espacial faz com que ele vá para um planeta hostil e fique abandonado a 4,2 milhões de anos-luz da Terra ao lado de seu comandante e sua tripulação. Enquanto Buzz tenta encontrar um caminho de volta para casa através do espaço e do tempo, ele descobre que já se passaram muitos anos desde seu teste de voo e que os descendentes de seus amigos, um grupo de recrutas ambiciosos, e seu charmoso gato companheiro robô, Sox. Para complicar as coisas e ameaçar a missão está a chegada de Zurg, uma presença alienígena imponente com um exército de robôs implacáveis e uma agenda misteriosa.",
      "img_filme": "https://br.web.img2.acsta.net/pictures/22/02/08/20/22/3222857.jpg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FLightyear%202022%20-%20filme.mp4?alt=media&token=623cc435-3d64-4976-8de7-b13681b030c3",
      "nome_filme": "LIGHTYEAR"
    },
   {
      "desc_filme": "Chip 'n Dale: Rescue Rangers é um filme de animação, live-action, comédia e ação-aventura americano de 2022. Baseado nos personagens Tico e Teco, é uma continuação da série de televisão animada de mesmo nome. ",
      "img_filme": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR0PlCCR1xr9DNKblyHPD5qHSe-Y8NniP5MFWtbGFPaMPt0WZz3",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAssistir%20Tico%20e%20Teco%20Defensores%20da%20Lei%20Online%20Gratis%20(Filme%20HD).mp4?alt=media&token=684f3231-3fdd-4c3d-9510-9a3302db1679",
      "nome_filme": "Tico e Teco: Defensores da Lei"
    },
     {
      "desc_filme": "Uma menina de 13 anos começa a se transformar em um panda vermelho gigante sempre que fica animada.",
      "img_filme": "https://br.web.img3.acsta.net/pictures/21/11/18/16/57/5746772.jpg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAssistir%20Red%20Crescer%20%C3%A9%20Uma%20Fera%20Online%20Gratis%20-%202022.mp4?alt=media&token=7674d5dd-0596-4909-9d8d-5724ef5e19ba",
      "nome_filme": "Red: Crescer é uma Fera"
    },
     {
      "desc_filme": "Thor parte em uma jornada diferente de tudo que já enfrentou – uma busca pela paz interior. Mas sua aposentadoria é interrompida por um assassino galáctico conhecido como Gorr, o Carniceiro de Deus, que busca a extinção dos deuses. Para combater a ameaça, Thor pede a ajuda do Rei Valquíria, Korg e da ex-namorada Jane Foster, que – para surpresa de Thor – inexplicavelmente empunha seu martelo mágico, Mjolnir, como o Poderoso Thor. Juntos, eles embarcam em uma angustiante aventura cósmica para descobrir o mistério da vingança do God Butcher e detê-lo antes que seja tarde demais.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCh4VkJ-1GlA_-OTol2NLbSNd5DTwQtWJDc2C_L-trGB0ZIIkT",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAssistir%20Thor%20Amor%20e%20Trov%C3%A3o%20Online%20Dublado%20-%20Overflix.mp4?alt=media&token=25f2be6d-5520-4d00-b897-7817342b0729",
      "nome_filme": "THOR: AMOR E TROVÃO"
    },
     {
      "desc_filme": "Dre Parker se mudou com a mãe para Pequim, devido ao trabalho dela. Logo ao chegar ele se interessa por Meiying, uma garota que conhece praticando violino na praça. A aproximação deles provoca a irritação de Cheng, que lhe dá uma surra usando a técnica do kung fu. A partir de então a vida de Dre se torna um inferno, já que passa a ser perseguido na escola por Cheng e seus colegas. Um dia, ao escapar deles, Dre é auxiliado pelo sr. Han, o zelador de seu prédio, que é também um mestre de kung fu.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT46zfJlE6tQFk4MPI_OB5In97Cbt0WC1h3aj6yyFDx5cfYeT_T",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FAssistir%20Karat%C3%AA%20Kid%20Online%20%E2%80%93%20Cine%20Vision%20V5.mp4?alt=media&token=76747edf-0896-4796-873d-37b112567c32",
      "nome_filme": "Karatê Kid"
    },
    {
      "desc_filme": "Vários anos após o fim da Guerra Shinobi, o filho de Naruto, Boruto, está prestes a entrar nos exames Chûnin ao lado de Sarada Uchiha e do misterioso Mitsuki.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6gO8eIvfixLqEuHHj1fI2f7AQ8ETJafoV5A&usqp=CAU",
      "leng_filme": "Legendado 🇺🇸",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fboruto%20o%20filme%20-%20Filme.mp4?alt=media&token=21693fd6-75d4-4306-b922-8d4429ef15a1",
      "nome_filme": "Boruto: Naruto the Movie"
    },
     {
      "desc_filme": "Em Olá, Adeus e Tudo Mais, Claire e Aidan, depois de fazerem um pacto de terminarem antes da faculdade, se veem refazendo os passos de seu relacionamento em sua última noite como casal. O encontro épico os leva a marcos familiares, lugares inesperados e os faz questionar se o amor do ensino médio deve durar.",
      "img_filme": "https://dnm.nflximg.net/api/v6/evlCitJPPCVCry0BZlEFb5-QjKc/AAAABYxeD30GjiWB6XILh7W9KH72wLnAYgCmvV8940mcF3sPpxzYgcswB-mQEr1w7pCR2y_Ulv-tFE3Fk1QmCgTHtePpIuawjSv9r8Ui23m1hyazUziJltfZZ--lcwVK8IU1i52UGw.jpg?r=3ef",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fol%C3%A1%20adeus%20-%20Filme.mp4?alt=media&token=e0d01fa1-c678-45af-a60e-16e5656c91c9",
      "nome_filme": "Olá, adeus e tudo mais"
    },
     {
      "desc_filme": "Em A Fera do Mar, um charmoso marinheiro deixa o mundo confortável do continente para navegar em águas desconhecidas. Durante a aventura ele se depara com um intrigante monstro marinho que, surpreendentemente, acaba se tornando um aliado essencial no enfrentamento das tormentas.  A vida do lendário caçador de monstros marinhos é virada de cabeça para baixo a partir dessa amizade - com a fera mais perigosa de todas.",
      "img_filme": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTnMsEbv_FSqysSH6CgBtyeGGDj0A4ELcUZLTIeFCUfbh0OobAM",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FA%20Fera%20do%20Mar%20-%20Filme.mp4?alt=media&token=13bc4686-aa87-4e32-b2a5-c69c3fc2fc51",
      "nome_filme": "A Fera do Mar"
    },
    {
      "desc_filme": "Encanto da Walt Disney Animation Studios conta a história dos Madrigal, uma família extraordinária que vive escondida nas montanhas da Colômbia, em uma casa mágica, em uma cidade vibrante, em um lugar maravilhoso conhecido como um Encanto. A magia deste Encanto abençoou todos os meninos e meninas da família com um dom único, desde superforça até o poder de curar. Todos, exceto Mirabel. Mas, quando ela descobre que a magia que cerca o Encanto está em perigo, Mirabel decide que ela, a única Madrigal sem poderes mágicos, pode ser a última esperança de sua família excepcional",
      "img_filme": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSPIwh-wreoOZDC1Mcd_I4XYPh2Z-Nz_NiK-QdgtGEbCJPDlFYC",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FEncanto%20-%20Filme.mp4?alt=media&token=9012cfdc-431b-45ba-9318-a43768355ebe",
      "nome_filme": "Encanto",
      "trt_filme": "GsJd_o97h5U"
    },
     {
      "desc_filme": "A brilhante e reclusa autora Loretta Sage escreve romances populares de aventura, cujas capas são estreladas pelo belo modelo Alan. Durante a turnê de promoção de seu novo livro, Loretta é raptada.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSq0FFxoZpq-wOKKBQRTHxjBV4qAHDMR1F0F6qO_bd5xL9QPkAL",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2Fa%20cidade%20perdida.mp4?alt=media&token=91dc1f58-8bce-451a-b0f4-2568b0c66abf",
      "nome_filme": "Cidade Perdida",
      "trt_filme": "USh_vwJ2j98"
    },
     {
      "desc_filme": "Depois que um juiz \"criativo\" os condena ao acampamento espacial, um buraco negro envia nossos heróis adolescentes 24 anos para o futuro moderno, onde a dupla embarca em uma missão para marcar e se tornar alvo do Deep State.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTmYhyZ6LePebgcrSSWuNPRpOi6h1rD9sNmu7YA_KoWHollqJ2h",
      "leng_filme": "Legendado 🇺🇸",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FBeavis%20and%20Butt-Head%20Do%20the%20Universe%20-%20Trackfy.mp4?alt=media&token=6fdb4fb7-6802-4276-a4bf-cabc881b8513",
      "nome_filme": "Beavis and Butt-Head Do the Universe",
      "trt_filme": "3DSSDUI0Cis"
    },
     {
      "desc_filme": "As aventuras de João Grilo e Chicó, dois nordestinos pobres que vivem de golpes para sobreviver. Eles estão sempre enganando o povo de um pequeno vilarejo, inclusive o temido cangaceiro Severino de Aracaju, que os persegue pela região.",
      "img_filme": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQEPwTpNISRnjIEarlQBeSeUHcO-5fIyL0buVpWfZZlh6sRfvwU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FGP-%F0%9F%8E%9E%F0%9F%98%8E%F0%9F%8E%AC%20O%20Auto%20da%20Comparecida%20-%20Filme%20Nacional%20-%20by%20GP%20Series%26Filmes.mp4?alt=media&token=2accc72a-d0d3-41c6-a908-7a0d145359ac",
      "nome_filme": "O Auto da Compadecida",
      "trt_filme": "XPuMu_ENzlg"
    },
     {
      "desc_filme": "Desde sua ascensão ao estrelato, o ícone do rock Elvis Presley mantém um relacionamento complicado com seu enigmático empresário, Tom Parker, por mais de 20 anos.",
      "img_filme": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSE1d25qW3BfxFJ4XOzWlNOGF20jLJMebUCMW_F-wIs0eFaDssg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FElvis%20-%20Filme.mp4?alt=media&token=6cd19e48-9575-4cea-bd9f-fd5db1266ecd",
      "nome_filme": "Elvis",
      "trt_filme": "s_eCXTEHkjw"
    },
     {
      "desc_filme": "Em Continência ao Amor, Cassie Salazar (Sofia Carson) é uma cantora em ascensão que quer sair da bolha. Para pagar o aluguel e suas doses de insulina, ela trabalha em um bar todas as noites com sua banda. Porém, suas doses diárias de remédio são muito caras e ela não consegue pagar um convênio médico e acaba atrasando outras contas para que consiga sobreviver. ",
      "img_filme": "https://br.web.img3.acsta.net/pictures/22/08/09/21/09/3949781.jpg",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FCONTIN%C3%8ANCIA%20AO%20AMOR%20-%20Filme.mp4?alt=media&token=5117abb4-a1ff-455a-9e26-b91f17fccce6",
      "nome_filme": "CONTINÊNCIA AO AMOR",
      "trt_filme": "2yyzb9RDUgs"
    },
     {
      "desc_filme": "A Terra é invadida por uma raça alienígena em busca de um novo lar. Porém, uma esperta garota chamada Tip consegue fugir e acaba virando cúmplice de um alienígena exilado chamado Oh. Os dois fugitivos embarcam em uma grande aventura.",
      "img_filme": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlFvil_f6jbd91wWzoab66m6Rc73IjiiSLmw&usqp=CAU",
      "leng_filme": "Dublado 🇧🇷",
      "link_filme": "https://firebasestorage.googleapis.com/v0/b/flixzone-17c1f.appspot.com/o/filmes%2FCad8.um.na.S8a.C8sa%20(2015).My.Sabrigo.GdriveFilmes.mp4?alt=media&token=4685c818-7b87-4ee9-8803-2f693566d3f8",
      "nome_filme": "Cada Um na Sua Casa",
      "trt_filme": "2jb8vlf6ZY8"
    }
]
});

const bruxos = [
    {
        id: 1,
        nome: "Harry potter",
        ano: 7,
        varinha: "Azevinho e pena de fenix",
        mascote: "Coruja",
        patrono: "Cervo",
        especialidade: "Sobreviver",
        vivo: false
    },
    {
        id: 2,
    nome: "Hermione Granger",
    casa: "Grifinória",
    ano: 7,
    varinha: "Videira e fibra de coração de dragão, 27cm",
    mascote: "Gato (Bichento)",
    patrono: "Lontra",
    especialidade: "Saber tudo de tudo",
    vivo: true
    },

];

const casas = [
    { 
        id: 1,
        nome: "Grifinoria",
        fundador: "Godric",
        cor: "Vermelho e dourado",
        animal: "Leão"
    },
    {
        id: 2,
        nome: "Sonserina",
        fundador: "Salazar",
        cor: "Verde e prata",
        animal: "Cobra"
    },
    {
        id: 3,
        nome: "Corvinal",
        fundador: "Rowena",
        cor: "Azul e bronze",
        animal: "Águia"
    },
    {
        id: 4,
        nome: "Lufa-lufa",
        fundador: "Helga",
        cor: "Amarelo e preto",
        animal: "Texugo"
    }
];

const varinhas = [
    {
        id: 1,
        material: "Azevinho",
        nucleo: "Pena de Fênix",
        comprimento: 28
    },
    {
        id: 2,
        material: "Videira",
        nucleo: "Fibra de Coração de Dragão",
        comprimento: 27
    },
    {
        id: 3,
        material: "Salgueiro",
        nucleo: "Pelo de Unicórnio",
        comprimento: 35
    },
    {
        id: 4,
        material: "Carvalho Inglês",
        nucleo: "Pelo de Testrálio",
        comprimento: 32
    }
];

const animais = [

    {
        id: 1,
        nome: "Coruja",
        tipo: "Correio/Companhia"

    },
    {
        id: 2,
        nome: "Gato",
        tipo: "Companhia"
    },
    {
        id: 3,
        nome: "Sapo",
        tipo: "Companhia"
    },
    {
        id: 4,
        nome: "Rato",
        tipo: "Companhia"
    }
];

const pocoes = [

    {
        id: 1,
        nome: "Polissuco",
        efeito:"Transforma na aparência de outra pessoa"
    },
    {
        id: 2,
        nome: "Felix Felicis",
        efeito:"Sorte temporária"
    },
    {
         id: 3,
        nome: "Amortentia",
        efeito:"Poção do amor"
    },
    {
        id: 4,
        nome: "Veritaserum",
        efeito:"Força a dizer a verdade"
    }
];
export default { bruxos, casas, varinhas, animais, pocoes }
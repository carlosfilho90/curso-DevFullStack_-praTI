let serie = {
    nome: 'High school musical',
    dataLançamento: 2007,
    atores: ['Zac Efron', 'client eastwood'],
    status: 'finalizado',
    classificacoa: 13,
    nrtemp: {
        tem: 12,
        temp2: 1,
        tem3: 4
    },

    mostrarCaracteristicas: function () {
        return ` o nome da serie é ${this.nome}, a classificação dela é para maiores de ${this.classificacoa} anos, e ela está ${this.status}, com os atores ${this.atores[0]}`
    }
}



//console.log(serie.mostrarCaracteristicas())




let livro = {
    nome: 'o hobbit',
    autor: ' tolkien',
    ano: 1925,

    mostrarCaracteristicas: function () {
        return `o nome do livro é ${this.nome}, ano de lançamento ${this.ano}, do autor ${this.autor}`
    }
}

// console.log(livro.mostrarCaracteristicas())


let atleta = {
    nome: 'carlos',
    time: 'AVF HANDEBOL',
    esport: 'Handball',
    titulos: 20,

    celebrarVitoria: function () {
        console.log('calado')
    }
}


// atleta.celebrarVitoria()


function anime(nome, personagemForte, secundario, nota) {
    this.nome = nome
    this.personagemForte = personagemForte
    this.secundario = secundario
    this.nota = nota


    this.mostrarAnime = function () {
        return `
        nome:${nome}
        personagem forte:${personagemForte}
        secundario: ${secundario}
        nota: ${nota}
        `
    }
}


let naruto = new anime("Naruto", 'Madara', "Sasuke", 9)
let bleach = new anime("bleach", 'ichigo', 'rukia', 9)


// console.log(naruto.mostrarAnime())

// console.log(bleach.mostrarAnime())




function jogos(titulos, generos, anoLancamento, empresa, jogar) {
    return {
        titulos,
        anoLancamento,
        generos,
        empresa,
        jogar
    }
}


let valorant = jogos("Valorant", "FPS", 2020, "riot", () => console.log("vivendo"))


// console.log(valorant)

// valorant.jogar()



// let personagem = [['goku', 'gohan'],'minato', 'rukia']


// for(let key in personagem){
//     console.log(personagem[key])
// }


// let palavra = 'teste'
// for(let har of Object.entries(palavra)){
//     console.log(har)
// }
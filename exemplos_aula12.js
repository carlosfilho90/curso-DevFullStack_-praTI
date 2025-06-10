// //verificar dentro de uma lista de livros os que foram publicados antes de 2000

// // const livraria = [
// //     { titulo: 'Codigo limpo', autor: 'Martin', ano: 2019 },
// //     { titulo: 'The gunslinger', autor: 'stephen', ano: 1991 },
// //     { titulo: 'Laranja mecanica', autor: 'Nicole', ano: 1810 },
// //     { titulo: 'peuqeno principe', autor: 'carlos', ano: 1903 },
// //     { titulo: 'as cronicas marcianas', autor: 'Bradbury', ano: 2010 }

// // ]

// // for (const livro of livraria) {
// //     livro.ano<2000?console.log(livro):null
// // }



// //contar a quantidade  de filmes por generos


// // let filmes = [
// //     { titulos: "Senhor dos anéis", genero: "Fantasia" },
// //     { titulos: "Jogo da imitação", genero: "Histórico" },
// //     { titulos: "Clube da luta", genero: "Drama" },
// //     { titulos: "Ilha do medo", genero: "Ação" },
// //     { titulos: "Pulp fiction", genero: "Ação" },
// //     { titulos: "Aquaman", genero: "Herói" },
// //     { titulos: "Ai que vida", genero: "Comédia" },
// //     { titulos: "Kill bill", genero: "Ação" },
// //     { titulos: "Batman", genero: "Herói" },
// //     { titulos: "As branquelas", genero: "Comédia" },
// // ]



// // let contagemGenero={}

// // filmes.forEach(filme=>{
// //     if(contagemGenero[filme.genero]){
// //         contagemGenero[filme.genero]++
// //     }else {
// //         contagemGenero[filme.genero]=1
// //     }
// // })

// // console.log(contagemGenero)


// // aula 13 = TADs e recursividade

// // function fatorial(n){
// //     if(n===0){
// //         return 1
// //     }else{
// //         return n*fatorial(n-1)
// //     }
// // }


// // console.table(fatorial(8))



// // function soma (n){
// //     if(n===1){
// //         return 1
// //     }else{
// //         return n+soma(n-1)

// //     }
// // }

// // console.log(soma(10))




// function fibonacci(n){
//     if(n===0){
//         return 0
//     }else if(n===1){
//         return 1
//     }else{
//         return fibonacci(n-1)+fibonacci(n-2)
//     }
// }

// console.log(fibonacci(6))




const categorias = [
    {
        id: 1,
        nome: 'eletronicos',
        filhos: [
            { id: 2, nome: 'celulares', filhos: [] },
            {
                id: 3, nome: 'computadores', filhos: [
                    { id: 4, nome: ' notebooks', filhos: [] }
                ]
            },
            { id: 5, nome: 'roupas', filhos: [] }]
    }
]


function mostrarCategorias(lista,nivel = 0){
    for(let categoria of lista){
        console.log(' '.repeat(nivel*2)+categoria.nome)
        if(categoria.filhos.length>0){
            mostrarCategorias(categoria.filhos, nivel+1)
        }
    }
}

mostrarCategorias(categorias)
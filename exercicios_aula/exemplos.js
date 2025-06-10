// // bubble sort

// let numero = [3, 2, 7, 19, 4, 1, 10]
// let n = numero.length
// for (let i = 0; i < n - 1; i++) {
//     for (let j = 0; j < n - 1 - i; j++) {
//         console.log(i)
//         if (numero[j] > numero[j + 1]) {
//             const temp = numero[j]
//             numero[j] = numero[j + 1]
//             numero[j + 1] = temp



//         }
//     }
// }

// console.table(numero)



// let matriz = []
// for (let i = 0; i < 3; i++) {
//     matriz[i] = []
//     for (let j = 0; j < 3; j++) {
//         matriz[i][j] = 10
//     }
// }
// let DP=0
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if( i!=j+1){
//         DP+=matriz[i][j]    
//         }
//     }
// }



// console.table(matriz)
// console.log(DP)

//funções

// function parOuImpar(valor){
//     let resultado
//     valor%2===0 ? resultado='PAR': resultado='IMPAR'
//     return resultado
// }

// let valor = parOuImpar()
// console.log(valor)





// function ordemArray(num) {
//     let n = numero.length
//     for (let i = 0; i < n; i++) {
//         for (let j = 0; j < n - 1 - i; j++) {
//             if (num[j] > num[j + 1]) {
//                 const temp = num[j]
//                 num[j] = num[j + 1]
//                 num[j + 1] = temp
//             }
//         }

//     }
//     return numero
// }


// ordemArray(numero)
// console.table(numero)


// function ordena(arr){
//     return arr.sort((a,b)=> b-a)
// }

// let numero =ordena( [8, 5, 23, 4, 98, 17, 12])

// console.table(numero)



// function show(sucessCallback, errorCallback) {
//     if (true) {
//         sucessCallback('sucesso na requisição')
//     }else{

//         errorCallback('error na requisição')
//     }
// }


// let sucessCallback = (message) => { console.log(message) }

// let errorCallback = function (message) {
//     console.log(message)
// }


// show(sucessCallback,errorCallback)





// function soma(arr) {
//     let soma = 0
//     let n = arr.length
//     for (let i = 0; i < n; i++) {
//         soma += arr[i]
//     }
//     return soma
// }


// let a = [2, 5, 8, 2, 6, 6, 1, 6]
// console.log(soma(a))



// function maior(arr) {
//     let maior = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > maior) {
//             maior = arr[i]
//         }
//     }
//     return maior
// }

// let arr = [1, 2, 3]
// console.log(maior(arr))


// exemplo de callback!!
// let parOuImpar = function (valor) {
//     let resultado
//     if (valor % 2 == 0) {
//         resultado = "PAR"
//     } else {
//         resultado = "IMPAR"
//     }
//     return resultado
// }


// function verificarArrayPares(arr, callback) {
//     let pares = []

//     for (let i = 0; i < arr.length; i++) {
//         let resultado = callback(arr[i])
//         if (resultado == "PAR") {
//             pares.push(arr[i])
//         }
//     }
//     return pares
// }


// console.log(verificarArrayPares([1, 2, 4, 5, 7, 8, 10, 34, 21], parOuImpar))



// aula 10 - principais funções nativas do JS;

// console.log("Carlos Sousa".substr(7,1))


// console.log(Math.random().toFixed(0)*100)


let date = new Date();
// console.log(date.getFullYear())
// console.log(date.toString())

// let date1 = new Date(2025,7,16)
// let date2 = new Date(2024,7,16)

// console.log(date1.toString())
// console.log(date2.toString())

// console.log(date1.getTime())
// console.log(date2.getTime())

// let milissegundos = Math.abs(date1.getTime()-date2.getTime())

// console.log(milissegundos)

// let milissegundosPordia =(1*24*60*60*1000)

// console.log(Math.ceil(milissegundos/milissegundosPordia))



// function reverseString(str){
//     return str.split('').reverse().join('')
// }


// console.log(reverseString('Carlos'))


//formate uma data 

// function formateDate(date) {
//     let day = date.getDate().toString().padStart(2, '0')
//     let month =(date.getMonth()+1).toString().padStart(2,'0')
//     let year = date.getFullYear()
//     return `${day}/${month}/${year}`
// }
//     let date4 = new Date();

//     console.log(formateDate(date))



//gerar numero randomico entre dois valores


// function radomize(min, max) {
//     return Math.floor(Math.random()*(max-min+1)+min)
// }

// let i = 3
// let j = 9
// console.log(radomize(i, j))


function contVogais(str){
    let vou = str.match(/[aeiou]/gi)
    return vou?vou.length:0

}

console.log(contVogais("Carlos"))
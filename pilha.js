class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null

    }
}

class Piha {
    constructor() {
        this.topo = null

    }

    push(v) {
        let novoNo = new Node(v)
        novoNo.next = this.topo
        this.topo = novoNo
    }

    pop() {
        if (!this.topo) {
            return null
        }
        let poppedValue = this.topo.valor
        this.topo = this.topo.proximo
        return poppedValue
    }

    primeiroElem() {
        if (!this.topo) {
            return null
        }
        return this.topo.valor
    }

    isEmpty() {
        return this.topo === null
    }
}


function Pilha() { 
    this.items = []
    this.top = -1

    this.push = function (element) {
        this.top++
        this.items[this.topo] = element // adiciona a pilha ao  final 

    }


    this.pop = function () { // tira um elemento, nesse caso é o ultimo pois a pilha é uma estrutura de dados do tipo LIFO last in first out
        if (this.top < 0) return null

        let element = this.items[this.topo]
        this.items[this.topo] = undefined
        this.topo--
        return element
    }


}
//linked list

class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
    }
}

class SimplyLinkedList {
    constructor() {
        this.head = null
    }
    inserirInicio(v) {
        let novo = new Node(v) // crio um novo nó
        novo.proximo = this.head // o ponteiro.prox do novo nó aponta para o this.head  que é o que indica o primeira elemento
        this.head = novo // e o this.head aponta para o novo nó pq foi colocado no começo
    }
    imprimir() {
        let atual = this.head
        let str = ''
        while (atual) {
            str += atual.valor + ' => '
            atual = atual.proximo
        }
        str += 'null'
        console.log(str)
    }
}

const lista  = new SimplyLinkedList()

lista.inserirInicio(10)
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)


lista.imprimir()


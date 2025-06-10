class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
        this.anterior = null
    }
} // class para criar um nó

class DoubleLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
}
    inserirNoInicio(v) {
        let novo = new Node(v)
        novo.proximo = this.head
        if (!this.head) {
            this.head = this.tail = novo
        } else {
            novo.prox = this.head
            this.head.anterior = novo
            this.head = novo
        }
        this.length++
    }

    inserirNoFim(v) {
        let novo = new Node(v)
        if (!this.head) { //se nao existe this.head entao a lista esta vazia, entao tanto o this.head, quanto o this.tail(o começo e o final serão o novo elemento)
            this.head = this.tail = novo
        } else { // se ela nn tiver vazia o proximo do meu ultimo elemento aponta pro novo e o ultimo elemento aponta para o novo e aponta o anterior do meu novo ao antigo fim da lista
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }
        this.length++

    }

    inserirEm(index, valor) {
        if (index < 0 || index > this.length) throw new RangeError("Índice fora dos limites")
        if (index === 0) return this.inserirNoInicio(valor)
        if (index === this.length) return this.inserirNoFim(valor)
        let atual = this.head

        for (let i = 0; i < index; i++) {
            atual = atual.proximo
        }
        let novo = new Node(v)
        let noAnterior = atual.anterior //criando uma variavel para repesentar o no anterior do meu atual

        noAnterior.proximo = novo // a prox ligação do anterior do meu atual vai se ligar ao novo nó

        novo.anterior = noAnterior // o anterior do meu novo no vai se ligar ao anterior do meu atual

        novo.proximo = atual // o prox do meu novo nó vai se ligar ao meu atual
        
        atual.anterior = novo // e o meu anterior do atual vai se ligar ao novo
        this.length++


    }


    removerEm(index) {
        if (index < 0 || index > this.length) throw new RangeError("Índice fora dos limites")

        let remove
        if (this.length === 1) {
            remove = this.head
            this.head = this.tail = null
        }else if (index === 0) {
            remove = this.head
            this.head = this.head.proximo
            this.head.anterior = null
        } else if (index === this.length - 1) {
            remove = this.tail
            this.tail = this.tail.anterior
            this.tail.proximo=null
        }else {
            let atual = this.head
            for(let i =0;i<index;i++){
                atual=atual.proximo
            }
            remove = atual
            let {anterior,proximo}=atual
            anterior.proximo = proximo
            proximo.anterior = anterior
        }
        this.length --


    }



    imprimirFrente() {

    }

    imprimirTras() {

    }
}



class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}


class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(value) {
        let newNode = new Node(v)
        if (this.rear) {
            this.rear.next = newNode
        }// se exitir um ultimo elemento o proximo dele é a apontado para o novo nó
        this.rear = newNode
        if (!this.front) {
            this.front = newNode
        }//verifica se a fila está vazia, se nao tiver o front que é o começom tanto o começo quanto o final aponta para o msm novoNO
        this.size++
    }


    dequeue() {
        if (!this.front) {
            return null
        }//importante sempre ve se a fila esta vazia ou nn
        let primeiro = this.front//atribui o primeiro elemento para depois acessar e nn perde-lo
        this.front = this.front.next//apontei o front para o prox para ele se tornar o primeiro da fila
        if (this.front == null) {
            this.rear = null
        }//verifiquei se apos retirar o front a fila nn ficou vazia, se ficou o final tbm aponta para o null
        this.size-- //e decrementei o tamanho da fila
        return primeiro.value //retornei o valor retirado
    }
}
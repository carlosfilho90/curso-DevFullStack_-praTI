class TreeNode{
    constructor(value){
        this.value = value
        this.children =[]
    }
    addChil(node){
        this.children.push(node)
    }

    removeChil(value){
        this.children=this.children.filter(child=> child.value != value)
    }
}

class Tree {
    constructor(rootValue){
        this.root = new TreeNode(rootValue)
    }
    traverseDFS(callback){
        function recurse (node){
            callback(node)
            node.children.forEach(child=>(recurse(child)))
        }
        recurse (this.root)
    }
}
//Raiz
const tree = new Tree('A')
//Nós
const B = new TreeNode('B')
const C = new TreeNode('C')
const D = new TreeNode('D')
const E = new TreeNode('E')
const F = new TreeNode('F')
const G = new TreeNode('G')
const H = new TreeNode('H')


tree.root.addChil(B)
tree.root.addChil(C)
tree.root.addChil(D)

B.addChil(E)
B.addChil(F)

C.addChil(G)

F.addChil(H)

function printNode(node){
    console.log(node.value)
}

console.log('-------- Busca profundidade-----------')

tree.traverseDFS(printNode)




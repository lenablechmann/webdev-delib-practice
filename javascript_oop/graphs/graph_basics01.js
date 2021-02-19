// learning to implement a graph in javascript
// reference: https://adrianmejia.com/data-structures-for-beginners-graphs-time-complexity-tutorial/
// goal is to learn enough to implement a tree + depth first search in tic tac toe minimax

// object oriented implementation of graphs
class Node {
    constructor(value) {
        this.value = value;
        this. adjacents = []; // opting for an adjacency list
    }

    addAdjacentNode(node) {
        this.adjacents.push(node);
    }

    removeAdjacentNode(node) {
        const index = this.adjacents.indexOf(node);
        if (index >= 0) {
            this.adjacents.splice(index, 1);
            return node;
        }
    }
    getAdjacents(){
        return this.adjacents;
    }
    isAdjacent(node){
        return (this.adjacents.indexOf(node) >= 0);
    }
}
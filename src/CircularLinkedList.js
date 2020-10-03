class CircularLinkedList {
    constructor(value){
        if(value !== undefined){
        this.sentinel = new Node(value);
}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

module.exports = CircularLinkedList;
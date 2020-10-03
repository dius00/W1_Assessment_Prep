class DoublyLinkedList {
    constructor(value){
        if(value !== undefined){
        this.head = new Node(value);
        this.tail = this.head;
    }

}

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

module.exports = DoublyLinkedList;
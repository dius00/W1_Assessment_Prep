class DoublyLinkedList {
    constructor(value){
        if(value !== undefined){
        this.head = new Node(value);
        this.tail = this.head;
        }
    }

    addNode(value){
        const newNode = new Node (value);
        if(!this.head) {
            this.head = newNode
            this.tail = this.head;
            return;
        }
        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;
    }

    findNode(value) {
        let iterator = this.head;
        while(true) {
          if (iterator.value === value) return iterator;
          if(iterator === this.tail) break;
          iterator = iterator.next;
        }
        return null;
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
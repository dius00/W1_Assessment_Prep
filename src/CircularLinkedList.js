class CircularLinkedList {
    constructor(value){
        if(value !== undefined){
        this.sentinel = new Node(value);
        }
    }

    addNode(value){
        const newNode = new Node(value);
        if(!this.sentinel) {
            this.sentinel = newNode;
            this.sentinel.next = newNode;
            this.sentinel.prev = newNode;
            return;
        }
        newNode.next = this.sentinel;
        newNode.prev = this.sentinel.prev.prev;
        this.sentinel.prev.next = newNode;
        this.sentinel.prev = newNode;
    }

   findNode(value) {
        let iterator = this.sentinel;
        while(true) {
          if (iterator.value === value) return iterator;
          iterator = iterator.next;
          if(iterator === this.sentinel) break;
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

module.exports = CircularLinkedList;
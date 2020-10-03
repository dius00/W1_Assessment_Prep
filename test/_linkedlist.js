const { expect } = require("chai");
const DoublyLinkedList = require("../src/DoublyLinkedList");
const CircularLinkedList = require("../src/CircularLinkedList");
const { isMainThread } = require("worker_threads");

describe("Doubly Linked List", () => {
    let doubly;
    beforeEach(() => {
        doubly = new DoublyLinkedList();
    });
    it("Should add nodes correcly,and update the head and tail correctly", ()=> {
        expect(doubly.addNode(1)).to.not.throw;
        expect(doubly.head.value).to.equal(1);
    });
});
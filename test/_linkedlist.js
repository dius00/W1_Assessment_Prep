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
        doubly.addNode(1);
        expect(doubly.head.value).to.equal(1);
    });
    it("Should have a findNode method, that returns the correct node, and null if nothing is found", ()=> {
        doubly.addNode(1);
        doubly.addNode(2);
        doubly.addNode(3);
        doubly.addNode(4);
        doubly.addNode(5);
        doubly.addNode(6);
        doubly.addNode(7);
        expect(doubly.findNode(4).value).to.equal(4);
        expect(doubly.findNode(7).value).to.equal(7);
        expect(doubly.findNode(9)).to.eql(null);
    });
});


describe("Circular Linked List", () => {
    let circly;
    beforeEach(() => {
        circly = new CircularLinkedList;
    });
    it("Should add nodes correcly,and update the sentinel, in none was given at declaration time", ()=> {
        circly.addNode(2);
        expect(circly.sentinel.value).to.equal(2);
    });
    it("Should have a findNode method", ()=> {
        circly.addNode(1);
        circly.addNode(2);
        circly.addNode(3);
        circly.addNode(4);
        circly.addNode(5);
        circly.addNode(6);
        circly.addNode(7);
        expect(circly.findNode(4).value).to.equal(4);
        expect(circly.findNode(9)).to.eql(null);
    });
});
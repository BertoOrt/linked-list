var LinkedList = require('./../src.js');

describe("linked list", function() {

  it("create a single linked list", function() {
    var list = new LinkedList;
    expect(list.head).toEqual(null);
  });

});

describe("push", function() {

  it("pushes a node into the linked list", function() {
    var list = new LinkedList;
    list.push(2)
    expect(list.head).toEqual({head: 2, next: null});
  });

  it("pushes a node to the very end of the linked list", function () {
    var list = new LinkedList;
    list.push(2);
    list.push(3);
    console.log(list);
    expect(list.head.next).toEqual({head:3, next: null});
  })

});

describe("remove", function () {

  it("removes the last node from the linked list", function () {
    var list = new LinkedList;
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    expect(list.remove())
  })

})

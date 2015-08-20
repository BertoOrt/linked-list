function LinkedList() {
  this.head = null;
}

LinkedList.prototype.push = function (val) {
  if (!this.head) {
    this.head = {head: val, next: null}
  } else {
    current = this.head;
    while (current.next) {
      current = current.head;
    }
    current.next = {head: val, next: null}
  }
}

module.exports = LinkedList;

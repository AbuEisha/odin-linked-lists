export default class LinkedList {
  constructor() {
    this.nodes = null;
    this.nodeSize = 0;
  }

  append(value) {
    let node = new Node(value);
    let current;
    this.nodeSize += 1;
    if (!this.nodes) {
      this.nodes = node;
    } else {
      current = this.nodes;
      while (current.nextNode) {
        current = current.nextNode;
      }
      current.nextNode = node;
    }
  }

  preppend(value) {
    this.nodes = new Node(value, this.nodes);
    this.nodeSize++;
  }

  size() {
    return this.nodeSize;
  }

  head() {
    let current = this.nodes;
    let headIndex = 0,
      count = 0;
    while (current) {
      if (headIndex == count) {
        console.log(current.value);
      }
      count++;
      current = current.nextNode;
    }
  }

  tail() {
    let current = this.nodes;
    let tailIndex = this.nodeSize - 1;
    let count = 0;
    while (current) {
      if (tailIndex === count) {
        console.log(current.value);
      }
      count++;
      current = current.nextNode;
    }
  }

  at(index) {
    let current = this.nodes;
    let count = 0;
    while (current) {
      if (index === count) {
        return current.value;
      }
      current = current.nextNode;
      count++;
    }
    return null;
  }

  pop() {
    let current = this.nodes;
    let count = 0;
    let lastIndex = this.nodeSize - 1;
    let beforeLast = this.nodeSize - 2;

    if (lastIndex < 0) return;

    if (lastIndex == 0) {
      this.nodes = current.nextNode;
    } else {
      while (current) {
        if (count == beforeLast) {
          current.nextNode = null;
        }
        if (count == lastIndex) {
          current = null;
        }
        count++;
        current = current.nextNode;
      }
    }
    this.nodeSize--;
  }

  contains(value) {
    let current = this.nodes;
    while (current) {
      if (current.value == value) {
        return true;
      }
      current = current.nextNode;
    }
    return false;
  }

  find(value) {
    let current = this.nodes;
    let index = 0;
    while (current) {
      if (current.value == value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    return null;
  }

  toString() {
    let current = this.nodes;
    if (!current) return null;
    let str = "(";
    while (current) {
      str += ` ${current.value} ) -> (`;
      current = current.nextNode;
    }
    str = str.slice(0, str.length - 1);
    str += "null";
    return str;
  }

  insertAt(value, index) {
    if (index > 0 && index > this.nodeSize) return;

    if (index === 0) {
      this.preppend(value);
      return;
    }

    const node = new Node(value);
    let count = 0;
    let current, previous;

    current = this.nodes;

    while (count < index) {
      previous = current;
      count++;
      current = current.nextNode;
    }

    node.nextNode = current;
    previous.nextNode = node;

    this.nodeSize++;
  }

  removeAt(index) {
    if (index > 0 && index > this.nodeSize - 1) return;
    let current = this.nodes;
    let count = 0,
      previous;

    if (index === 0) {
      this.nodes = current.nextNode;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.nextNode;
      }
      previous.nextNode = current.nextNode;
    }
    this.nodeSize--;
  }
}

class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

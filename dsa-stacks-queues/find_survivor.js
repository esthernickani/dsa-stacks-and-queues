/** Node: node for a queue. */
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
      }
  }
    
  class LinkedList {
      constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
      }
  
      push(val, numOfPeople) {
          let node = new Node(val);
  
          if (this.size === 0) {
              this.first = node;
              this.last = node;
              this.size++;
          } else if (this.size < numOfPeople - 1) {
              this.last.next = node;
              this.last = node;
              this.size++;
          } else {
              this.last.next = node;
              this.last = node;
              this.size++;
          }
  
          this.last.next = this.first;
      }
  
      removeAtIdx(idx) {
          let removedItem = this.getAt(idx);
  
          if (this.size === 1) {
              this.first = null;
              this.last = null;
              this.size--;
              return removedItem;
          }
  
          if (idx === 0) {
              this.first = this.first.next;
              this.size--;
              return removedItem;
          }
  
          let prevNode = this.getAt(idx - 1);
  
          if (!removedItem || !prevNode || !prevNode.next) {
              this.size--;
              return;
          }
  
          prevNode.next = removedItem.next;
  
          if (idx === this.size - 1) {
              this.last = prevNode;
          }
  
          this.size--;
  
          return removedItem;
      }
  
      getAt(idx) {
          let currentNode = this.first;
          let counter = 0;
  
          while (counter < idx) {
              currentNode = currentNode.next;
              counter++;
          }
  
          return currentNode;
      }
  }
  
  const findSurvivor = (numOfPeople, skip) => {
      let newList = new LinkedList();
  
      for (let i = 1; i <= numOfPeople; i++) {
          newList.push(i, numOfPeople);
      }
  
      const Josephus = (linkedlist, start, skip) => {
          if (linkedlist.size === 1) {
              return newList.first.val;
          }
  
          start = (start + skip - 1) % linkedlist.size;
  
          let survivor = linkedlist.removeAtIdx(start);
  
          return Josephus(linkedlist, start, skip);
      };
  
      return Josephus(newList, 0, skip);
  };
  
  console.log(findSurvivor(10, 3));  
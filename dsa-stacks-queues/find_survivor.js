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
        let node = new Node(val)
        if (this.size == 0) {
            this.first = node;
            this.last = node;
            this.size ++;
        } else if (this.size < numOfPeople-1) {
            this.last.next = node;
            this.last = node;
            this.size++;
        } else {
            this.last.next = node;
            this.last = node;
            this.size++;
        }
        this.last.next = this.first
        return;
    }

    getAt(idx) {
        let currentNode = this.first;
        let counter = 0;
    
        while (counter < idx) {
          currentNode = currentNode.next;
          counter ++;
        }
        return currentNode;
      }

    removeAtIdx(idx) {

        let removedItem;
        console.log(this.list)
        if (this.size === 0){
            return null;
        }
    
        if(this.size === 1){
            removedItem = this.first;
            this.first = null;
            this.tail = null;
            this.size --;
            return removedItem;
        }
    
        if (idx === 0 & this.size >= 1){
            removedItem = this.first;
            this.first = this.first.next;
            this.size--;
            return removedItem;
        }
    
        let removedIdx = this.getAt(idx-1)
        if (!removedIdx || !removedIdx.next){
            this.size--;
            return
        }
        removedIdx.next = removedIdx.next.next;
        }
    
}

const findSurvivor = (numOfPeople, skip) => {
    newList = new LinkedList()
    for (let i=1; i <= numOfPeople; i++) {
        newList.push(i, numOfPeople)
    }

    
    const Josephus = (linkedlist, start, skip) => {
        if (linkedlist.size == 1) {
            console.log(newList)
            return newList.first.val
        } 

        

        start = (start + skip)%linkedlist.size
        linkedlist.removeAtIdx(start)
        return Josephus(linkedlist, start, skip)
    }

    Josephus(newList, 0, skip)
    

}

console.log(findSurvivor(10, 3))
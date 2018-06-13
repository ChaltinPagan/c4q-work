class Node {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor(val){
        this.head = new Node(val);
        //this.head = null;
    }

    push(val) {
        let nn = new Node(val);
        nn.next = this.head;
        this.head = nn;
    }

    pop() {
        if (!this.head) { 
            return undefined;
        }
        // if (this.isEmpty()) {
        //     return null;
        // }

        let nn = this.head;
        this.head = this.head.next;
        return nn;
    }

    peek() {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.head.val;
    }

    isEmpty() {
        if (!this.head) {
            return true;
        }
        return false;
    }

    print() {
        let xn = this.head;
        let stStr = 'HEAD --> ';
        while (xn) {
            stStr += xn.val + ' --> ';
            xn = xn.next; //prevents infinite loop
        }
        stStr += "NULL";
        return stStr;
    }
}

/*
let s = new Stack(7)
s.push(5)
s.push(10)
let x = s.peek()
console.log(x) //logs 10
ley y = s.pop()
console.log(x*y) // logs 100
*/

let s = new Stack(7);
s.push(5);
//s.push(10);
console.log("s:", s);
//console.log("pop", s.pop());
console.log("peek:", s.peek());
//console.log("print:", s.print());
console.log("Node:", new Node(6));
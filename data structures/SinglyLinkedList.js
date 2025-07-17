class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);

        if (this.head) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    traverse() {
        let current = this.head;

        while (current) {
            console.log(current);
            current = current.next;
        }
    }

    pop() {
        if (!this.head) return undefined;

        let current = this.head;
        let pre = current;

        while (current.next) {
            pre = current;
            current = current.next;
        }

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            pre.next = null;
            this.tail = pre;
        }

        this.length--;
        return current;
    }

    shift() {
        if (!this.head) return undefined;

        let currentHead = this.head;
        let next = currentHead.next;
        this.head = next;

        if (!this.head) {
            this.tail = null;
        }

        this.length--;
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        this.tail = this.head ?? newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || this.length <= index) return undefined;

        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current;
    }

    set(index, val) {
        let node = this.get(index);

        if (node) {
            node.val = val;
            return true;
        }

        return false;
    }

    insert(index, val) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) return !!this.unshift(val);
        if (index === this.length) return !!this.push(val);

        const newNode = new Node(val);
        const prev = this.get(index - 1);
        newNode.next = prev.next;
        prev.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;

        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        const prev = this.get(index - 1);
        const removed = prev.next;
        prev.next = removed.next;
        this.length--;
        return removed;
    }

    reverseIterative() {
        let prev = null;
        let current = this.head;
        this.tail = this.head;

        while (current) {
            let next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    reverseRecursive(current = this.head, prev = null) {
        if (current === this.head && prev === null) this.tail = this.head;

        if (current === null) {
            this.head = prev;
            return;
        }

        let next = current.next;
        current.next = prev;
        this.reverseRecursive(next, current);
    }
}


let sll = new SinglyLinkedList();
sll.push('1nnnn');
sll.push('2ggggg');
sll.push("4");
console.log(sll.get(1));

sll.shift();
sll.push("4");
sll.push('9');
sll.pop();
sll.pop();
sll.push('10');
sll.shift();
sll.unshift('5')
sll.traverse();
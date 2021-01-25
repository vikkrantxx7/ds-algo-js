class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    enqueue = val => {
        const node = new Node(val)

        if (!this.size) {
            this.first = node
        } else {
            this.last.next = node
        }
        this.last = node

        return ++this.size
    }

    dequeue = () => {
        let current
        if (!this.size) {
            return undefined
        } else if (this.size === 1) {
            current = this.first
            this.first = null
            this.last = null
        } else {
            current = this.first
            this.first = current.next
        }
        this.size--

        return current.value
    }
}
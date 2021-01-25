class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }

    push = val => {
        const node = new Node(val)

        if (!this.size) {
            this.first = node
            this.last = node            
        } else {
            node.next = this.first
            this.first = node
        }

        return ++this.size
    }

    pop = () => {
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
class Node {
    constructor(val) {
        this.value = val
        this.next = null
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push = val => {
        const node = new Node(val)

        if (!this.length) {
            this.head = node
        } else {
            this.tail.next = node
        }
        this.tail = node
        this.length++

        return this
    }

    pop = () => {
        let current
        if (!this.length) {
            return undefined
        } else if(this.length === 1) {
            current = this.head
            this.head = null
            this.tail = null
        } else {
            const newTail = this.get(this.length - 2)
            current = newTail.next
            this.tail = newTail
            newTail.next = null
        }
        this.length--

        return current
    }

    unshift = val => {
        const node = new Node(val)

        if (!this.length) {
            this.tail = node
            
        } else {
            node.next = this.head
        }
        this.head = node
        this.length++

        return this
    }

    shift = () => {
        if (!this.length) {
            return undefined
        } else if (this.length === 1) {
            return this.pop()
        } else {
            const current = this.head
            this.head = current.next
            this.length--

            return current
        }
    }

    get = index => {
        if (index < 0 || index > this.length) {
            return false
        }
        if (typeof index === 'undefined') {
            throw new Error('Provide a numeric index')
        }
        if (!this.length) {
            return undefined
        } else {
            let currentIndex = 0
            let current = this.head
            while (currentIndex < index) {
                current = current.next
                currentIndex++
            }

            return current
        }
    }

    set = (index, val) => {
        const node = this.get(index)
        if (node) {
            node.value = val

            return true
        }

        return false
    }

    insert = (index = 0, val) => {
        const node = new Node(val)

        if (index < 0 || index > this.length) {
            return false
        }
        if (index === 0) {
            return this.unshift(val)
        }
        if (index === this.length) {
            return this.push(val)
        }

        const prev = this.get(index - 1)
        const next = prev.next

        prev.next = node
        node.next = next
        this.length++

        return this
    }

    remove = index => {
        if (index < 0 || index >= this.length) {
            return false
        }
        if (index === 0) {
            return this.shift()
        }
        if (index === this.length - 1) {
            return this.pop()
        }

        const prev = this.get(index - 1)
        const nodeToRemove = prev.next
        const next = nodeToRemove.next

        nodeToRemove.next = null
        prev.next = next
        this.length--

        return nodeToRemove
    }

    reverse = () => {
        if (!this.length) {
            return false
        } else if (this.length === 1) {
            return this
        } else {
            let prev = null
            let current = this.head
            let next = current.next

            this.head = this.tail
            this.tail = current

            while (next) {
                current.next = prev
                prev = current
                current = next
                next = next.next
            }
            current.next = prev

            return this
        }
    }
}
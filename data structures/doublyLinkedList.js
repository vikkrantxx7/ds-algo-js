class Node {
    constructor(val) {
        this.value = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
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
            node.prev = this.tail
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
            const newTail = this.tail.prev
            current = this.tail

            this.tail = newTail
            newTail.next = null
            current.prev = null
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
            this.head.prev = node
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
            this.head.prev = null
            current.next = null
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
            const mid = Math.ceil(this.length / 2)
            let current

            if (index < mid) {
                current = this.head
                let currentIndex = 0
                while (currentIndex < index) {
                    current = current.next
                    currentIndex++
                }
            } else {
                current = this.tail
                let currentIndex = this.length - 1
                while (currentIndex > index) {
                    current = current.prev
                    currentIndex--
                }
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
        node.prev = prev
        next.prev = node
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
        nodeToRemove.prev = null
        prev.next = next
        next.prev = prev
        this.length--

        return nodeToRemove
    }
}
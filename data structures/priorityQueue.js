class Node {
    constructor(val, priority) {
        this.value = val
        this.priority = priority
    }
}

export class PriorityQueue {
    constructor() {
        this.values = []
    }

    enqueue = (val, priority) => {
        const node = new Node(val, priority)

        this.values.push(node)

        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)

        while (parentIndex >= 0 && this.values[index].priority < this.values[parentIndex].priority) {
            let current = this.values[index]

            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = current
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }

        return this
    }

    dequeue = () => {
        if (!this.values.length) {
            return undefined
        }
        if (this.values.length === 1) {
            return this.values.pop()
        }

        const oldRoot = this.values.shift()
        const current = this.values.pop()

        this.values.unshift(current)

        let parentIndex = 0
        let leftChildIndex
        let rightChildIndex

        while(true) {
            leftChildIndex = 2 * parentIndex + 1
            rightChildIndex = 2 * parentIndex + 2
            if (rightChildIndex < this.values.length) {
                const smallerChildIndex = this.values[leftChildIndex].priority < this.values[rightChildIndex].priority ? leftChildIndex : rightChildIndex
                if (current.priority > this.values[smallerChildIndex].priority) {
                    this.values[parentIndex] = this.values[smallerChildIndex]
                    this.values[smallerChildIndex] = current
                    parentIndex = smallerChildIndex
                } else {
                    return oldRoot
                }
            } else if (leftChildIndex < this.values.length) {
                if (current.priority > this.values[leftChildIndex].priority) {
                    this.values[parentIndex] = this.values[leftChildIndex]
                    this.values[leftChildIndex] = current
                    parentIndex = leftChildIndex
                } else {
                    return oldRoot
                }
            } else {
                return oldRoot
            }
        }
    }
}
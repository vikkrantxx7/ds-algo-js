class MaxBinaryHeap {
    constructor() {
        this.values = []
    }

    insert = val => {
        this.values.push(val)
        let index = this.values.length - 1
        let parentIndex = Math.floor((index - 1) / 2)

        while (this.values[index] > this.values[parentIndex]) {
            let current = this.values[index]

            this.values[index] = this.values[parentIndex]
            this.values[parentIndex] = current
            index = parentIndex
            parentIndex = Math.floor((index - 1) / 2)
        }

        return this
    }

    extractMax = () => {
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
                const biggerChildIndex = this.values[leftChildIndex] > this.values[rightChildIndex] ? leftChildIndex : rightChildIndex
                if (current < this.values[biggerChildIndex]) {
                    this.values[parentIndex] = this.values[biggerChildIndex]
                    this.values[biggerChildIndex] = current
                    parentIndex = biggerChildIndex
                } else {
                    return oldRoot
                }
            } else if (leftChildIndex < this.values.length) {
                if (current < this.values[leftChildIndex]) {
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
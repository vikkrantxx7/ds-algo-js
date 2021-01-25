class Node {
    constructor(val) {
        this.value = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert = val => {
        const node = new Node(val)
        let current = this.root

        if (current === null) {
            this.root = node
            return this
        }
        while (true) {
            if (val === current.value) {
                return undefined
            }
            if (val < current.value) {
                if (current.left === null) {
                    current.left = node
                    return this
                }
                current = current.left
            }// by not putting else-if if value is smaller than the greater than check
            // for next node is checked in the same iteration
            if (val > current.value) {
                if (current.right === null) {
                    current.right = node
                    return this
                }
                current = current.right
            }
        }
    }

    find = val => {
        let current = this.root

        while (true) {
            if (current === null) {
                return undefined
            }
            if (val === current.value) {
                return current
            }
            if (val < current.value) {
                current = current.left
            }// by not putting else-if if value is smaller than the greater than check
            // for next node is checked in the same iteration
            if (val > current.value) {
                current = current.right
            }
        }
    }

    contains = val => {
        let current = this.root

        while (true) {
            if (current === null) {
                return false
            }
            if (val === current.value) {
                return true
            }
            if (val < current.value) {
                current = current.left
            }// by not putting else-if if value is smaller than the greater than check
            // for next node is checked in the same iteration
            if (val > current.value) {
                current = current.right
            }
        }
    }
}
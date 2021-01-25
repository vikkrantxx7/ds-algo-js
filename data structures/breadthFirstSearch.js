const breadthFirstSearch = (tree, val) => {
    if (tree.root === null) {
        return undefined
    }

    const queue = [tree.root]
    const visited = []
    let current

    while(queue.length) {
        current = queue.shift()
        if (val === current.value) {
            return current
        }
        visited.push(current)
        if (current.left) {
            queue.push(current.left)
        }
        if (current.right) {
            queue.push(current.right)
        }
    }
    return undefined
}
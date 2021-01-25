const dfsPreOrder = (tree, val) => {
    if (tree.root === null) {
        return undefined
    }

    const traverse = node => {
        if (val === node.value) {
            return node
        }
        if (node.left) {
            return traverse(node.left)
        }
        if (node.right) {
            return traverse(node.right)
        }
    }

    return traverse(tree.root)
}

const dfsPostOrder = (tree, val) => {
    if (tree.root === null) {
        return undefined
    }

    const traverse = node => {
        if (node.left) {
            return traverse(node.left)
        }
        if (node.right) {
            return traverse(node.right)
        }
        if (val === node.value) {
            return node
        }
    }

    return traverse(tree.root)
}

const dfsInOrder = (tree, val) => {
    if (tree.root === null) {
        return undefined
    }

    const traverse = node => {
        if (node.left) {
            return traverse(node.left)
        }
        if (val === node.value) {
            return node
        }
        if (node.right) {
            return traverse(node.right)
        }
    }

    return traverse(tree.root)
}
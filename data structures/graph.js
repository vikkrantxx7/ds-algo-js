class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex = vertex => {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge = (vertex_1, vertex_2) => {
        this.adjacencyList[vertex_1].push(vertex_2)
        this.adjacencyList[vertex_2].push(vertex_1)
    }

    removeVertex = vertex => {
        Object.keys(this.adjacencyList).forEach(key => {
            if (key === vertex) {
                return
            }
            if (this.adjacencyList[key].includes(vertex)) {
                this.adjacencyList[key] = this.adjacencyList[key].filter(item => vertex !== item)
            }
        });
        delete this.adjacencyList[vertex]
    }

    removeEdge = (vertex_1, vertex_2) => {
        this.adjacencyList[vertex_1] = this.adjacencyList[vertex_1].filter(vertex => vertex !== vertex_2)
        this.adjacencyList[vertex_2] = this.adjacencyList[vertex_2].filter(vertex => vertex !== vertex_1)
    }

    depthFirstTraversalRec = vertex => {
        const visited = []
        const dfs = vertex => {
            if (visited.includes(vertex) || !this.adjacencyList[vertex].length) {
                return
            }
            visited.push(vertex)
            this.adjacencyList[vertex].forEach(item => dfs(item))
        }
        dfs(vertex)
        return visited
    }

    depthFirstTraversalIter = vertex => {
        const stack = [vertex]
        const visited = []

        while(stack.length) {
            const vertex = stack.pop()
            if (!visited.includes(vertex)) {
                visited.push(vertex)
            }
            this.adjacencyList[vertex].forEach(item => !visited.includes(item) && stack.push(item))
        }
        return visited
    }

    breadthFirstTraversal = vertex => {
        const queue = [vertex]
        const visited = []

        while(queue.length) {
            const vertex = queue.shift()
            if (!visited.includes(vertex)) {
                visited.push(vertex)
            }
            this.adjacencyList[vertex].forEach(item => !visited.includes(item) && queue.push(item))
        }

        return visited
    }
}
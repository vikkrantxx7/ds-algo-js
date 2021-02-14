class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex = vertex => {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = []
        }
    }

    addEdge = (vertex_1, vertex_2, weight) => {
        this.adjacencyList[vertex_1].push({ node: vertex_2, weight })
        this.adjacencyList[vertex_2].push({ node: vertex_1, weight })
    }
}
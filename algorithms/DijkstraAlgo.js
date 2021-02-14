import { PriorityQueue } from "../data structures/priorityQueue.js";

const shortestPath = (vertex1, vertex2, graph) => {
    const distance = {}
    const priorityQueue = new PriorityQueue()
    const previous = {}
    const path = []

    Object.keys(graph.adjacencyList).forEach(key => {
        if (vertex1 === key) {
            distance[key] = 0
            priorityQueue.enqueue(key, 0)
        } else {
            distance[key] = Infinity
            priorityQueue.enqueue(key, Infinity)
        }
        previous[key] = null
    })

    while(priorityQueue.values.length) {
        const smallest = priorityQueue.dequeue().value
        if (smallest === vertex2) {
            let end = vertex2
            path.push(end)
            while(end !== vertex1) {
                end = previous[end]
                path.push(end)
            }
            return path.reverse()
        }
        if (distance[smallest] !== Infinity) {
            graph.adjacencyList[smallest].forEach(elem => {
                const newDistance = distance[smallest] + elem.weight
                if (distance[elem.node] > newDistance) {
                    distance[elem.node] = newDistance
                    previous[elem.node] = smallest
                    priorityQueue.enqueue(elem.node, newDistance)
                }
            }) 
        }
    }
}
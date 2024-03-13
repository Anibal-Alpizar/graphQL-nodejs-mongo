import { tasks } from './sample.js'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World'
        },
        greet(root, { name }) {
            return `Hello, ${name}`
        },
        tasks() {
            return tasks
        }
    },

    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length
            tasks.push(input)
            return input
        }
    }
}
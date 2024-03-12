export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World'
        },
        greet(root, { name }) {
            return `Hello, ${name}`
        }
    }
}

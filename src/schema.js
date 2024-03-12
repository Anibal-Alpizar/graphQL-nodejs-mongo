import { makeExecutableSchema } from "graphql-tools"
import { resolvers } from "./resolvers.js"

const typeDefs = `

type Query {    

    hello: String
}


`

export default makeExecutableSchema({ typeDefs, resolvers })
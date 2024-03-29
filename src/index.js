import express from 'express';
import { graphqlHTTP } from 'express-graphql'
import schema from "./schema.js"
import { connect } from './database.js';

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

app.listen(3000, () => console.log('Server is running on port 3000'));
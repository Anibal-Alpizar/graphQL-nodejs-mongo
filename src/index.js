import express from 'express';
import { graphqlHTTP } from 'express-graphql'

const app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Hello World' });
});


const schema = {}

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
}))

app.listen(3000, () => console.log('Server is running on port 3000'));
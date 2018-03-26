const express = require('express'); // pull up express
const expressGraphQL = require('express-graphql');
const schema = require('./schema/schema');

const app = express(); // make a new express application

app.use('/graphql', expressGraphQL({
    schema,  //will be automatically expand to schema: schema
    graphiql: true //a development tool allows us to make queries against our dev server, for dev only
}));

app.listen(4000, ()=>{
    console.log('Listening');
});

//http://localhost:4000/graphql see GraphiQL tool

let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

/** Build Schema  **/
let schema = buildSchema(`
        type Query {
            hello : String   
        }
     `);


/** The root provides a resolver function for each API endpoint **/
let root = {
    hello: () => {
        return "HELLO GRAPHQL";
    }
};

let app = express();

app.use('/', graphqlHTTP({
    schema   : schema,
    rootValue: root,
    graphiql : true,
}));

app.listen(4000, function () {
    console.log("Running a GraphQL API server at localhost:4000/graphql");
});


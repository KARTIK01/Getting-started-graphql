let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

/** Build Schema  **/
let schema = buildSchema(`
        type Mutation {
            setMessage(message : String) : String
        }
        
        type Query {
            getMessage : String
        }
    `);

let fakeDB = {};

let root = {
    setMessage: ({message}) => {
        fakeDB.message = message;
        return message;
    },
    getMessage: () => fakeDB.message
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


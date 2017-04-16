let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

let _     = require('lodash');
let users = require('./data.json');

/** Build Schema  **/
let schema = buildSchema(`
        type User{
             name    : String,
             company : String,
             email   : String
        }
        
        type Query {
            getUser(userID : String) : User
        }
     `);


let root = {
    getUser: ({userID}) => {
        return _.find(users, {'id': userID})
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


let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

/** Build Schema  **/
let schema = buildSchema(`
        type User{
             name    : String,
             age     : Int,
             emailID : String
        }
        
        type Query {
            getUser(userID : String) : User
        }
     `);


let root = {
    getUser: ({userID}) => {
        return {
            name   : "Kartik Agarwal",
            age    : 22,
            emailID: 'kartikagarwal01@gmail.com'
        }
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


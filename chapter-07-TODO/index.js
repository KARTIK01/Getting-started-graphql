let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

let _     = require('lodash');
let users = require('./data.json');

/** Build Schema  **/
let schema = buildSchema(`
        type Friend{
             name : String
        }
        
        type User{
             name    : String,
             company : String,
             email   : String,
            
             friends(count : Int) : [Friend]  
        }
        
        type Query {
            getUser(id : String , name : String , email : String, company : String) : User
            getUsers(company : String) : [User]
        }
     `);

class Friends {

    constructor(args) {
        this.args = args;
    }

}

class User {

    constructor(args) {
        this.args = args;
    }

    name(){

    }

    friends(count) {
        return new Friends(count)
    }


}


let root = {
    getUser: (ars) => new User(ars)
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


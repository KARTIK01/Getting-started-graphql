let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

/** Build Schema  **/
let schema = buildSchema(`
        type Query {
            name : String,
            age  : Int!,
            latestTechnologies : [String],
            salary : Float
        }
     `);


let root = {
    name: () => {
        return "Kartik Agarwal";
    },
    age : () => {
        return 23   ;
    },
    latestTechnologies : () =>{
        return ["React JS" ,"React Relay","GraphQl"]
    },
    salary : () =>{
        return 10.50
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


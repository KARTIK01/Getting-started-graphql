let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');

/** Build Schema  **/
let schema = buildSchema(`
        type Query {
            latestTechnologies(language : String! , year : Int): [String],
        }
     `);


let root = {
    latestTechnologies: ({language, year}) => {
        if (language === 'js')
            return ["React JS", "React Relay", "GraphQl"];
        else if (language === 'python')
            return ["Functional Prog.", "Pyglet", "Peewee"];
        else
            return ["Do you know google?"];
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


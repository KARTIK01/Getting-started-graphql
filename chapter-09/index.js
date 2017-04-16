let express       = require('express');
let graphqlHTTP   = require('express-graphql');
let {buildSchema} = require('graphql');
let fakeDB        = {};

/** Build Schema  **/
let schema = buildSchema(`
        input MessageInput{
            content : String,
            author  : String
        }
        
        type Message {
            id : ID,
            content : String,
            author  : String
        }
        
        type Mutation {
            createMessage(input : MessageInput) : Message,
            updateMessage(id : ID! , input : MessageInput) : Message
        }
        
        type Query {
            getMessage(id : ID!) : Message
        }
    `);

class Message {
    constructor(id, {content, author}) {
        this.id      = id;
        this.content = content;
        this.author  = author;
    }
}

let root = {
    getMessage   : ({id}) => {
        if (!fakeDB[id]) {
            throw new Error('no message exists with id ' + id);
        }
        return new Message(id, fakeDB[id])
    },
    createMessage: ({input}) => {
        // Create a random id for our "database".
        let id = require('crypto').randomBytes(10).toString('hex');

        fakeDB[id] = input;
        return new Message(id, input);
    },
    updateMessage: ({id, input}) => {
        if (!fakeDB[id]) {
            throw new Error('no message exists with id ' + id);
        }
        fakeDB[id] = input;
        return new Message(id, input);
    },
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




## Mutation : update or insert

## Run file
```
$ node chapter-08/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

insert
```
mutation {
  createMessage(input :{content : "TEST2", author :"kartik"}){
    id,
    content
  }
}
```
get 
```
 {
  getMessage(id :"3c45517e36594db0eada") {
    id,
    author,
    content
  }
}
```
Update 
```
mutation {
  updateMessage(id :"3c45517e36594db0eada" , input :{author : "AMIT"}){
    id,
    content
  }
}
```


Output
```
Check Your self
```

#### Postman

url ```http://localhost:4000/graphql```

type ```POST```

header ```Content-Type: application/json```

body 
```
Try by yourself
```

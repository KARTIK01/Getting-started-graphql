

## Deep Into Graph

## Run file
```
$ node chapter-06/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

get User on ID
```
{
  getUser(id : "58f2ffce3d6867529298a0a6") {
    name
  }
}
```
get User on 2 field
```
{
  getUser(company : "LEXICONDO" , email : "eunicecabrera@crustatia.com") {
    name,
    email,
    company
  }
}
```

Get Users on company
```
{
  getUsers(company : "LEXICONDO") {
    name
  }
}
```
Rename Key
```
{
  users : getUsers(company : "LEXICONDO") {
    name,
    email,
    friends {
      name
    }
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

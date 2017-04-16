

## Real Data

## Run file
```
$ node chapter-05/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

Single field
```
{
  getUser(userID : "58f2fcd46287b2ecb2037b0d") {
    name
    company
    email
  }
}
```


Output
```
{
  "data": {
    "getUser": {
      "name": "Mcgowan Mcclain",
      "company": "BULLJUICE",
      "email": "mcgowanmcclain@bulljuice.com"
    }
  }
}
```

#### Postman

url ```http://localhost:4000/graphql```

type ```POST```

header ```Content-Type: application/json```

body 
```
Try by yourself
```

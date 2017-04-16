
## Object Types

## Run file
```
$ node chapter-04/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

Single field
```
{
  getUser {
    name
    age
    emailID
  }
}
```


Output
```
{
  "data": {
    "getUser": {
      "name": "Kartik Agarwal",
      "age": 22,
      "emailID": "kartikagarwal01@gmail.com"
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
{
	"query" : "{getUser {name, age , emailID}}"
}
```


## Getting Started

## Run this file
```
$ node chapter-01/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click
```
{
  hello
}
```

Output
```
{
  "data": {
    "hello": "HELLO GRAPHQL"
  }
}
```

#### Postman

url ```http://localhost:4000/graphql```

type ```POST```

header ```Content-Type: application/json```

body ```{"query": "{ hello }"}```


Output
```
{
  "data": {
    "hello": "HELLO GRAPHQL"
  }
}
```

## Passing Arguments

## Run file
```
$ node chapter-03/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

Single field
```
{
  latestTechnologies(language : "js")
}
```


Output
```
{
  "data": {
    "latestTechnologies": [
      "React JS",
      "React Relay",
      "GraphQl"
    ]
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
	"query" : "{latestTechnologies(language : \"js\")}"
}
```

NOTE 

Try passing No arguments, passing multiple arguments

## Basic Types (String, Int, Float, Boolean, and ID)

## Run file
```
$ node chapter-02/index.js
```
#### Request from browser
open url ```http://localhost:4000/graphql```

Pass it on left panel run click

Single field
```
{
  name
}
```

Multiple Fields
```
{
  name,
  age,
  latestTechnologies
}
```

All Fields
```
{
  name,
  age,
  latestTechnologies
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
	"query" : "{name, age, salary , latestTechnologies}"
}
```
## Learn Javascript The Hard Way

Exercises from Learn Javascript The Hard Way

### Variables

```
var //
const //
let //
```

### Arrays



### Objects (key value pairs)

**object notation**

```
let fruit = {
	name: 'Apple',
	size: 'medium',
	color: 'green'
}
```

Accessing values:
```
fruit.name
fruit['name']
```

**for-in loop:**

```
for(key in fruit) {
  console.log(`${key}=${fruit[key]}`);
}
```

### Functions

```
const name = (parameter) => {
	console.log(parameter);
}
```

or

```
function name(parameter) {
	consol.log(parameter);
}
```


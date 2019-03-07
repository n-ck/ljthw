## Learn Javascript The Hard Way

Exercises from Learn Javascript The Hard Way

### Variables

```
var //
const //
let //
```

### If-Statements


### Arrays

```
let fruit = ["apples", "oranges", "grapes"];

fruit[0] // apples

fruit.length // count of elements in array

```

```
let i = 0;
while(i < fruit.length) {
	console.log(`while ${i}=${pigments[i]}`);
	i ++;
}

or

for(let i = 0; i < fruit.length; i++) {
	console.log(`for ${i}=${fruit[i]}`);
}

or 

for(product in fruits) {
	console.log(`for-in ${paint}`);
}	

```

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


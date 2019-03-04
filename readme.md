## Learn Javascript The Hard Way

Exercises from Learn Javascript The Hard Way


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
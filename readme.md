## Learn Javascript The Hard Way

Exercises from Learn Javascript The Hard Way

### Comments
```
// single line comment

/*
Multiple
Line
Comment
*/
```

### Operators

Comparison operators:

```
==		equal
===		strict equal

!=		not equal to
!==		strict not equal to

>		greater than
<		less than
<=		greater than or equal to
>=		less than or equal to
```

```
Logical operators
&& 		and
||		or
!		not
```

### Variables

```
var //
const // should be the same value all the time
let // variable where the value can change later
```

### If-Statements

```
if (x === 10) {
	// first jump
} else if (x < 10) {
	// second jump
} else {
	// last jump
}


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

New ES6 style:

```
const name = (parameter) => {
	console.log(parameter);
}
```

or older style:

```
function name(parameter) {
	consol.log(parameter);
}
```

### Modules

Module exports: to register functions
key: name of function
value: actual function created

```
module.exports = {
	key: value	
}
```

require code (i.e. include code.js):

```
require('./code');
```

### Including variable in string

```
console.log(`Use backquotes and this ${this}variable notation`);
```

### Node's built-in file functions
https://nodejs.org/api/fs.html

### Command-line arguments
process.argv

### Prompting input
readline-sync // needs to be installed with npm



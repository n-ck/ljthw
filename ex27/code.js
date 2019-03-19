let pets = [
    {name: 'Yeller', type: 'Dog', age: 12},
    {name: 'Akumano', type: 'Japanese Bobtail Cat', age: 2},
    {name: 'Meaw Peesard', type: 'Siamese Cat', age: 100},
    {name: 'James', type: 'Gecko', age: 2}
]

const young_pets = (pet) => {
    return pet.age <= 10;
}

const age_pets = (pet) => {
    return [pet.name, pet.age + 10];
}

const name_age = (pet) => {
    return `${pet[0]} is ${pet[1]}`;
}

console.log(young_pets);
console.log(age_pets);
console.log(name_age);

const debug = (msg) => {
    console.log(msg);
    // why am I doing this here?
    return msg;
}

let age_young_animals = pets.filter(young_pets)
    .map(age_pets)
    .map(debug) // this is why
    .map(name_age)
    .forEach(debug);
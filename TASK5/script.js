function objectToArray(obj) {
 return(Object.entries(obj));
}

console.log(objectToArray({a: 1, b: 2, c: 3}));
console.log(objectToArray({x: 10, y: 20, z: 30}));
console.log(objectToArray({name: "John", age: 30, city: "New York"}));

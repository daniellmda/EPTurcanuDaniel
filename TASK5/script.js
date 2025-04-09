function objectToArray(obj) {
  const arr = [];

  for (let key in obj) {
    arr.push([key, obj[key]]);
  }

  return arr;
}

console.log(objectToArray({ name: "Alice", age: 25 }));

console.log(objectToArray({ city: "New York", country: "USA" }));

console.log(objectToArray({ a: 1, b: 2, c: 3 }));

console.log(objectToArray({ x: 10, y: 20, z: 30 }));

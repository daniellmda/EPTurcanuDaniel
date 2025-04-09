function mergeObjects(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const obj1 = { a: 1, b: 4 };
const obj2 = { b: 6, c: 2 };
console.log(mergeObjects(obj1, obj2));

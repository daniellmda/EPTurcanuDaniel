function mergeObjects(obj1, obj2) {
    const mergedArr = {};
  
    for (const key in obj1) {
      mergedArr[key] = obj1[key];
    }
  
    for (const key in obj2) {
      mergedArr[key] = obj2[key];
    }
  
    return mergedArr;
  }
  

  const obj1 = {a: 1, b: 4};
  const obj2 = {b: 6, c: 2};
  console.log(mergeObjects(obj1, obj2));  
  
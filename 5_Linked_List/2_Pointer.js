const obj1 = {
  name: "Harsh Chauhan",
};

const obj2 = obj1;

console.log("1", obj1);
console.log("2", obj2);

//------------------------

let objNew = {
  a: true,
};

let objNew2 = objNew;

// console.log("1", objNew);
// console.log("2", objNew2);

objNew.a = false;

console.log("1", objNew);
console.log("2", objNew2);

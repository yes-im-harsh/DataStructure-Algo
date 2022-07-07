const String = "Hi My Name Is Harsh Chauhan";

// Method-1
function reverse(string) {
  //1. First checking for valid input
  if (!string || typeof string != "string") {
    return string;
  }

  //2. Creating the array, to store reverse data
  const backward = [];

  //4. Logic
  for (let i = string.length - 1; i >= 0; i--) {
    backward.push(string[i]);
  }
  console.log(backward);

  //3. Return, covert array to sting.
  return backward.join("");
}

// Method-2
function reverse2(string) {
  return string.split("").reverse().join(""); //.split return an array,then reverse method is applied, Then converted to string
}

//Method-3
const reverse3 = (string) => [...string].reverse().join(""); //Using Spread Operator amd Arrow function

console.log(reverse(String));
console.log(reverse2(String));
console.log(reverse3(String));

//Log all pairs of an array
const letter = ["a", "b", "c", "d", "e"];

function logAllPairs(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairs(letter); //O(n^2)

//Same Indentation -> +
//Nested -> *

//So for Different Inputs and Nested/
//O(a*b)

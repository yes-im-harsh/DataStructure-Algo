// -What causes Space complexity?-
// Variables
// Data Structures
// Function Call
// Allocations

function sayNamaste(n) {
  for (let i = 0; i < n; i++) {
    console.log("Namaste 🙏");
  }
}

sayNamaste(10); //Space Complexity will be O(1), because we are assigning a new variable "let" inside for loop.

function sayArrayOfNamaste(n) {
  const arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = "Namaste 🙏";
  }

  return arr;
}

sayArrayOfNamaste(10); //O(n), since here we are using a data Structure(Array) and a variable let

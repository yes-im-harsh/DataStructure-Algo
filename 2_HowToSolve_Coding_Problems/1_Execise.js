/* Given 2 arrays, create a function that
let's user know(true/false) whether these,
two arrays contains any common items */

//For Example:
//const array1 = ['a', 'b', 'c', 'x'];
//const array2 = ["z", "y", "i"];
//should return false.
//----------------------
//const array1 = ["a", "b", "c", "x"];
//const array2 = ["z", "y", "x"];
//should return true.

//Approach -1
const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "i"];

function containsCommonItem(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

containsCommonItem(array1, array2); //Time Complexity O(a*b), Space Complexity O(1)

//Approach -2 (Better)

function containsCommonItem2(arr1, arr2) {
  const mapObject = {};
  for (let i = 0; i < arr1.length; i++) {
    if (!mapObject[arr1[i]]) {
      const item = arr1[i];
      mapObject[item] = true;
    }
  }

  // console.log(mapObject); for checking updated object.

  for (let j = 0; j < arr2.length; j++) {
    if (mapObject[arr2[j]]) {
      return true;
    }
  }
  return false;
}

containsCommonItem2(array1, array2); //Time Complexity O(a+b), Space Complexity O(n) because of new object mapObject

// Contiguous memory allocation, Same data types.

const array = ["a", "b", "c", "d"];

// Operations on array.

// Removes the last item.
array.pop(); //O(1)
console.log(array);

// Adds to the last.
array.push("x"); //O(1)
console.log(array);

// Unshift - Adds at the beginning
array.unshift("k"); //O(n)* (because we have to iterate over array, to update latest index count)
console.log(array);

//slice:- Adds or removes form the b/w.
array.splice(2, 0, "king of kings"); //splice(starting index, number of items to delete, item to add)
console.log(array);

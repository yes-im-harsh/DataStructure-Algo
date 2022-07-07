// Merge the two sorted* Array, in to a Single sorted* Array

//Array 1,2 &3 are sorted*
const array1 = [0, 2, 6, 10];
const array2 = [5, 8, 12, 14];
const array3 = [];

function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  if (arr1.length === 0) {
    return arr2;
  }
  if (arr2.length === 0) {
    return arr1;
  }

  let arr1Items = arr1[0];
  let arr2Items = arr2[0];
  let i = 1;
  let j = 1;

  while (arr1Items || arr2Items) {
    if (arr2Items === undefined || arr1Items < arr2Items) {
      mergedArray.push(arr1Items);
      arr1Items = arr1[i];
      i++;
    } else {
      mergedArray.push(arr2Items);
      arr2Items = arr2[j];
      j++;
    }
  }
  return mergedArray;
}

console.log(mergeSortedArrays(array1, array2));
console.log(mergeSortedArrays(array1, array3));
console.log(mergeSortedArrays(array2, array3));

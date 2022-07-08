//Google Question

//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//---------------------------------------------------------------//
// Method-1 with O(n^2)
function firstRecurringCharacter(input) {
  for (let i = 0; i <= input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      if (input[i] === input[j]) {
        return input[i];
      }
    }
  }
  return undefined;
}

firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]);

// Method-2 (Improved)

function firstRecurringCharacter2(input) {
  let map = {};
  for (let i = 0; i <= input.length; i++) {
    if (map[input[i]] !== undefined) {
      return input[i];
    } else {
      map[input[i]] = i;
    }
  }
  return undefined;
} //He have optimized the time complexity caused due to two for loops(in method-1), By Making a Hash Table. O(n)

firstRecurringCharacter2([2, 5, 1, 2, 3, 5, 1, 2, 4]);

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
//For Method-2
// return 5 because the pairs are before 2,2 .

//For Method-1
// return 2, because, we selected the first item & then comparing with other items, In that case 2 will match first.
//Can you fix this?(Hint: Line 16)

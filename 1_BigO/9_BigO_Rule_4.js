//Rule4: Drop the non Dominants

function printAllNumbersThenAllPairSums(numbers) {
  numbers.forEach((number) => console.log("Numbers are: " + number)); //O(n)

  console.log("And there sums are: ");
  numbers.forEach(function (firstNumber) {
    numbers.forEach(function (secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  }); //O(n^2)
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

//So we have O(n+n^2)
//Upon dropping the non-dominant term
// O(n^2)

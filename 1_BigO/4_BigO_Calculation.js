//Q:
// function funChallenge(input) {
//   let a = 20;
//   a = 20 + 4;

//   for (let i = 0; i <= input.length; i++) {
//     anotherFunction();
//     let beastMode = true;
//     a++;
//   }
//   return a;
// }

function funChallenge(input) {
  let a = 20; //O(1)
  a = 20 + 4; //O(1)

  for (let i = 0; i <= input.length; i++) {
    //O(n)
    anotherFunction(); //O(n)
    let beastMode = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

// 1+1+1+n+n+n+n = 3+4n
//O(3+4n) Or it will be converted into O(n)
//This is not the way to do this, Its just to visualize

/*Big O concerns with how many steps it takes to run, 
because computation powers of different computers are different */

const large = new Array(1000).fill("🌵"); //Try changing the size of this array to 100000;

function findCactus(arr) {
  let t0 = performance.now();
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "🌵") {
      console.log("Found Cactus");
    }
  }
  let t1 = performance.now();
  console.log("Time took to find 🌵: " + (t1 - t0) + " milliseconds");
}

findCactus(large);

//Output:
// 1000VM120:7 Found Cactus
// VM120:11 Time took to find 🌵: 26.200000017881393milliseconds

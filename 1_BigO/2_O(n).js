// O(n) - Liner time

const large = new Array(1000).fill("🌵"); //Try changing the size of this array to 100000;

function findCactus(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "🌵") {
      console.log("Found Cactus");
    }
  }
}

findCactus(large); // O(n) --> Liner Time

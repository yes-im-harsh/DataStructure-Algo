//Different Ways of Lopping in JS.

//Using for Loop
const arr = ["sunflower", "banana", "Lemon", "Mango", "Cactus", "Bamboo"];

const findCactus = (arr) => {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "Cactus") {
      console.log("Found Cactus");
    }
  }
};

findCactus(arr);

//Using forEach
const findCactus2 = (arr) => {
  arr.forEach((item) => {
    if (item === "Cactus") {
      console.log("Found Cactus");
    }
  });
};

findCactus2(arr);

//Using for of

const findCactus3 = (arr) => {
  for (let item of arr) {
    if (item === "Cactus") {
      console.log("Found Cactus");
    }
  }
};

findCactus3(arr);

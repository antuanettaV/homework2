//Age-identify (A future age calculator)
const yearOfBirth = 1987;
const yearFuture = 2027;
const age = yearFuture - yearOfBirth;
console.log(`You will be ${age} years old in ${yearFuture}`);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2027;
let dogYear = dogYearFuture - dogYearOfBirth;git 
const shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
  dogYear *= 7;
  console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}`);
} else {
  console.log(
    `Your dog will be ${dogYear} human years old in ${dogYearFuture}`
  );
}

// Housey pricey (A house price estimator)
function getHouseSize(width, height, depth) {
  return width * height * depth;
}

function getHouseCost(houseSize, gardenSize) {
  return houseSize * 2.5 * 1000 + gardenSize * 300;
}

const houses = [
  {
    friend: "Peter",
    size: getHouseSize(8, 10, 10),
    gardenSize: 100,
    estimatedCost: 2500000,
  },
  {
    friend: "Julia",
    size: getHouseSize(5, 8, 11),
    gardenSize: 70,
    estimatedCost: 1000000,
  },
];

houses.map((house) => {
  const houseCost = getHouseCost(house.size, house.gardenSize);
  if (house.estimatedCost > houseCost) {
    console.log(
      `${
        house.friend
      }, ${houseCost.toLocaleString()} is a fair price. The house estimated cost is ${house.estimatedCost.toLocaleString()}`
    );
  } else {
    console.log(
      `${
        house.friend
      }, ${houseCost.toLocaleString()} is too much. The house estimated cost is ${house.estimatedCost.toLocaleString()}`
    );
  }
});

// Ez Namey (Startup name generator)
const firstWords = [
  "NextGen",
  "Hyper",
  "Ultra",
  "Quantum",
  "Synergy",
  "Neon",
  "Prime",
  "Apex",
  "Fusion",
  "Infinity",
];

const secondWords = [
  "Innovations",
  "Dynamics",
  "Solutions",
  "Ventures",
  "Labs",
  "Technologies",
  "Concepts",
  "Works",
  "Systems",
  "Industries",
];

function getRandomIndex(arrayLength) {
  return Math.floor(Math.random() * arrayLength);
}

const randomFirstIndex = getRandomIndex(firstWords.length);
const randomSecondIndex = getRandomIndex(secondWords.length);
const startupName = `${firstWords[randomFirstIndex]} ${secondWords[randomSecondIndex]}`;

console.log(
  `The startup: "${startupName}" contains ${startupName.length} characters`
);

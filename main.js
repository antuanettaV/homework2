// Formal fullname /
function getFullname(
  firstName,
  surname,
  useFormalName = false,
  gender = "male"
) {
  if (!firstName && !surname) {
    return "";
  }

  let fullName = `${firstName} ${surname}`;

  if (useFormalName) {
    if (gender === "female") {
      fullName = "Lady: " + fullName;
    } else {
      fullName = "Lord: " + fullName;
    }
  }

  return fullName.trim();
}

const fullName1 = getFullname("Benjamin", "Hughes");
const fullName2 = getFullname("Benjamin", "Hughes", true);
const fullName3 = getFullname("Margaret", "White", true, "female");

console.log(fullName1);
console.log(fullName2);
console.log(fullName3);

//Event application/
function getEventWeekday(dayEvent) {
  let daysWeek = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thuesday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = new Date().getDay();

  const eventDay = (day + dayEvent) % 7;

  return daysWeek[eventDay];
}
console.log(getEventWeekday(9));
console.log(getEventWeekday(2));

// Weather wear/
function getClothesRecommendation(temperature) {
  if (temperature >= 30) {
    return "summer clothes";
  } else if (temperature >= 20) {
    return "light clothes";
  } else if (temperature >= 10) {
    return "warm clothes";
  } else {
    return "very warm clothes";
  }
}
let clothesWeather = getClothesRecommendation(35);
console.log(clothesWeather);

let clothesWeather1 = getClothesRecommendation(15);
console.log(clothesWeather1);

let clothesWeather2 = getClothesRecommendation(-5);
console.log(clothesWeather2);

//Student manager/
const class07Students = [];
function addStudentToClass(studentName) {
  if (studentName === "") {
    console.log("You can't register without writing the name");
    return;
  }

  if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName}is in the class`);
    return;
  }

  if (class07Students.length >= 6 && studentName !== "Queen") {
    console.log("We can't add more students to the class 07");
    return;
  }

  class07Students.push(studentName);
  console.log(`Student ${studentName} is already in the class`);
}

function getNumberOfStudents() {
  return class07Students.length;
}

//Candy Shop/
const buyCandyPrices = [];
function addCandy(candyType, weight) {
  let pricePerGram;
  switch (candyType) {
    case "sweet":
      pricePerGram = 0.5;
      break;
    case "chocolate":
      pricePerGram = 0.7;
      break;
    case "toffee":
      pricePerGram = 1.1;
      break;
    case "chewing-gum":
      pricePerGram = 0.03;
      break;
    default:
      console.log("Wrong candies");
      return;
  }

  const candyPrice = pricePerGram * weight;
  buyCandyPrices.push(candyPrice);
  console.log(
    `You have added ${candyType} weight ${weight} for ${candyPrice}`);
}

const sumToSpend = Math.random() * 100;
console.log(`The spent amount: ${sumToSpend.toFixed(2)}`);
function canBuyMoreCandy() {
  let totalCost = 0;
  for (let i = 0; i < buyCandyPrices.length; i++) {
    totalCost += buyCandyPrices[i];
  }

  if (totalCost < sumToSpend) {
    return true;
  } else {
    return false;
  }
}
if (canBuyMoreCandy()) {
  console.log("You can buy more, so please do!");
} else {
  console.log("Enough candy for you!");
}

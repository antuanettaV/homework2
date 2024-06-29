// //item array removal/
const names = [
  "Peter",
  "Ahmad",
  "Yana",
  "kristina",
  "Rasmus",
  "Samuel",
  "katrine",
  "Tala",
];

const nameToRemove = "Ahmad";

const findIndex = names.indexOf(nameToRemove);
names.splice(findIndex, 1);

console.log(names);

// // //When will we be there??/
function travelTime(speed, distance) {
  const totalTimeInHours = distance / speed;
  const hours = Math.floor(totalTimeInHours);
  const minutes = Math.round((totalTimeInHours - hours) * 60);
  return `${hours} hours and ${minutes} minutes`;
}
const speed = 80;
const distance = 500;
console.log(travelTime(speed, distance));

//Series duration of my life/
const seriesDurations = [
  {
    title: "Queen's Gambit",
    days: 1,
    hours: 3,
    minutes: 2,
  },
  {
    title: "Shantaram",
    days: 0,
    hours: 20,
    minutes: 30,
  },
  {
    title: "Inventing Anna",
    days: 0,
    hours: 9,
    minutes: 54,
  },
];
const averageLife = 80 * 365 * 24 * 60;

function seriesDurationsMinutes(series) {
  return series.days * 24 * 60 + series.hours * 60 + series.minutes;
}

function calculationLifePercents(durationMinutes) {
  return (durationMinutes / averageLife) * 100;
}

function logOutSeries() {
  let totalLifePercents = 0;

  seriesDurations.forEach((series) => {
    const durationMinutes = seriesDurationsMinutes(series);
    const lifePercents = calculationLifePercents(durationMinutes);

    totalLifePercents += lifePercents;

    console.log(`${series.title} took ${lifePercents.toFixed(4)}% of my life.`);
  });
  console.log(
    `I spent amount of time ${totalLifePercents.toFixed(4)}% of my life`
  );
}

logOutSeries();

//notepad/
const notes = [];
function saveNote(content, id) {
  if (typeof content !== "string" || typeof id !== "number") {
    return console.error("Write the correct data");
  }
  notes.push({ content, id });
}

function getNote(id) {
  if (id === undefined || typeof id !== "number") {
    console.log("error:id is not correct");
    return;
  }

  for (let note of notes) {
    if (note.id === id) {
      return note;
    }
  }
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes);

const firstNote = getNote(1);
console.log(firstNote);

// //CactusIO-interactive/
const activities = [];
function addActivity(date, activity, duration) {
  const activityObject = { date, activity, duration };

  activities.push(activityObject);
}

addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Reading", 30);
addActivity("23/7-18", "YouTube Watching", 60);

console.log(activities);

function showStatus() {
  if (activities.length === 0) {
    return "Add some activities before calling showStatus.";
  }

  //sum of activities
  const totalActivities = activities.length;
  const totalDuration = activities.reduce(
    (sum, activity) => sum + activity.duration,
    0
  );
  const limit = 120;

  if (totalDuration > limit) {
    return "You have reached your limit, no more smartphoning for you!";
  }
  return `You have added ${totalActivities} activities. They amount to ${totalDuration} min. of usage.`;
}

console.log(showStatus());

function mostTimeSpentActivity() {
  if (activities.length === 0) {
    return "No activities have been added.";
  }

  let maxDuration = 0;
  let maxActivity = "";

  activities.forEach((activity) => {
    if (activity.duration > maxDuration) {
      maxDuration = activity.duration;
      maxActivity = activity.activity;
    }
  });

  return `The activity you spent the most time on is: ${maxActivity}, with a duration of ${maxDuration} minutes.`;
}
console.log(mostTimeSpentActivity());

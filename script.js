/******************************************************
 * Part 1: Variable Declarations and Conditionals
 ******************************************************/
let userName = "Alex";
let hour = new Date().getHours();
let greetingMessage = "";

if (hour < 12) {
  greetingMessage = "Good morning, " + userName + "!";
} else if (hour < 18) {
  greetingMessage = "Good afternoon, " + userName + "!";
} else {
  greetingMessage = "Good evening, " + userName + "!";
}

// DOM Interaction #1: Set greeting text
document.getElementById("greeting").textContent = greetingMessage;

/******************************************************
 * Part 2: Custom Functions
 ******************************************************/
// Function to get current time as a string
function getCurrentTime() {
  let now = new Date();
  return now.toLocaleTimeString();
}

// Function to create a list of numbers up to a limit
function generateNumberList(limit) {
  let listElement = document.getElementById("numberList");
  listElement.innerHTML = ""; // clear existing items

  for (let i = 1; i <= limit; i++) {
    let listItem = document.createElement("li");
    listItem.textContent = `Item ${i}`;
    listElement.appendChild(listItem);
  }
}

/******************************************************
 * Part 3: Loops
 ******************************************************/
// Loop Example #1: for loop
for (let i = 0; i < 3; i++) {
  console.log("For Loop Count:", i);
}

// Loop Example #2: while loop
let count = 0;
while (count < 2) {
  console.log("While Loop Count:", count);
  count++;
}

/******************************************************
 * Part 4: DOM Interactions
 ******************************************************/
// DOM Interaction #2: Show current time on button click
document.getElementById("showTimeBtn").addEventListener("click", function () {
  let currentTime = getCurrentTime();
  document.getElementById("timeDisplay").textContent = "Current Time: " + currentTime;
});

// DOM Interaction #3: Generate number list on button click
document.getElementById("generateListBtn").addEventListener("click", function () {
  generateNumberList(5);
});

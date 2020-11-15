function scuberGreetingForFeet(range) {
  // Write your code here!
  if (range <= 400) {
    return "This one is on me!";
  } else if (range > 2500) {
    return "No can do.";
  } else {
    return "I will gladly take your thirty bucks.";
  }
}

function ternaryCheckCity(city) {
  // Write your code here!
  if (city === "NYC") {
    return "Ok, sounds good.";
  } else if (city == "Pittsburgh") {
    return "No go.";
  }
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  if (tip === "generous") {
    return "Thank you so much.";
  }
  if (tip === "not as generous") {
    return "Thank you.";
  } else {
    return "Bye.";
  }
}

let stake = 100;
const goal = 200;
let bets = 0;
let wins = 0;

while (stake > 0 && stake < goal) {
  bets++;
  if (Math.random() < 0.5) {
    stake++;
    wins++;
  } else {
    stake--;
  }
}

console.log("Number of bets made: " + bets);
console.log("Number of times won: " + wins);
console.log("Final amount: " + stake);

// question 1
// (a, b) => a - b;

// question 2
const gamesUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(gamesUrl)
  .then(response => response.json())
  .then(json => gamesfunctionLoop(json))
  .catch(error => console.dir(error));

function gamesfunctionLoop(json) {
  const games = json.results;
  games.forEach(game => {
    console.log(game.name);
  });
}

// question 3
const sentence1 = 'These cats are outrageous.'
const sentence2 = sentence1.replace('cat','giraffes' )

// your answer for question 1 goes here

// question 4

// your answer for question 1 goes here

// question 5

// your answer for question 1 goes here

// question 6

// your answer for question 1 goes here

// question 7

// your answer for question 1 goes here

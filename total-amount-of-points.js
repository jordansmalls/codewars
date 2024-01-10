// Total amount of points
/*
Our football team has finished the championship. Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

if x > y: 3 points (win)
if x < y: 0 points (loss)
if x = y: 1 point (tie)
We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

our team always plays 10 matches in the championship
0 <= x <= 4
0 <= y <= 4
*/


// function points(games){
//   let points = 0;
//   let losses = 0;
//   games.forEach(game => {
//     let temp = game.split(':');
//     if(temp[0] > temp[1]){
//       points += 3;
//     }else if(temp[0] === temp[1]){
//       points += 1;
//     }else{
//       losses++;
//     }
//   });
//   console.log(`Losses: ${losses}`);
//   return points;
// };

const points = games => games.reduce((total, game) => total + (game[0] > game[2] ? 3 : game[0] === game[2] ? 1 : 0), 0);


let test = ["3:1", "2:2", "0:1", "5:4"]
const expectedOutput = 7;

console.log(points(test) === expectedOutput) // true
// test pass

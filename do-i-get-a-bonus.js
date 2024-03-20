// Do I get a bonus?
/*
It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
*/

// input -> salary (integer) & bonus (boolean)
// return -> if bonus true: return salary * 10 as string
//        -> if bonus false: return normal salary as string
// return value needs an "£" added to string

// function bonusTime(salary, bonus) {
//   if(bonus === true){
//     return `£${salary*10}`
//   }else{
//     return `£${salary}`
//   }
// };


const bonusTime = (salary, bonus) => bonus === false ? `£${salary}` : `£${salary * 10}`

console.log(bonusTime(120000, false)) // "£120000"
console.log(bonusTime(5000, true)) // "£50000"

// tests pass
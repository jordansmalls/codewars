// Growth of a Population
/*
In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

At the end of the first year there will be: 
1000 + 1000 * 0.02 + 50 => 1070 inhabitants

At the end of the 2nd year there will be: 
1070 + 1070 * 0.02 + 50 => 1141 inhabitants (** number of inhabitants is an integer **)

At the end of the 3rd year there will be:
1141 + 1141 * 0.02 + 50 => 1213

It will need 3 entire years.
More generally given parameters:

p0, percent, aug (inhabitants coming or leaving each year), p (population to equal or surpass)

the function nb_year should return n number of entire years needed to get a population greater or equal to p.

aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)

Examples:
nb_year(1500, 5, 100, 5000) -> 15
nb_year(1500000, 2.5, 10000, 2000000) -> 10
*/


/*
  @params integer, float, integer, integer
  @return integer
*/

function nbYearLong(population,percent, aug, p){
  // convert percent to decimal 
  percent = (percent / 100);

  // init var to count number of years passed
  var numberOfYearsPassed = 0;

  // while loop; while population is less than p var
  while(population < p){
  // each time thru the loop, do the following:
    // add (population * percent) + aug --> curr population
    // add one year to numberOfYearsPassed variable
    // check if population is greater than or equal to p

  // add (population * percent) + aug --> curr population
  population += Math.floor(((population * percent) + aug))
  // add one year to numberOfYearsPassed var 
  numberOfYearsPassed += 1;

  // once population == or > p, return number of years passed
  if(population == p || population > p){
    return numberOfYearsPassed;
  }
}
}

var nbYear = function(population, percent, aug, p){
  var years = 0;
  while(population < p){
    population += Math.floor((population * percent/100) + aug)
    years++
  }
  return years;
}



// recursive solution
const nbYearR = (p0, percent, aug, p, years = 0) => {
  if(p0 < p){
    return nbYearR(p0 + Math.floor(p0 * percent / 100) + aug, percent, aug, p, ++years);
  }
  return years;
}


console.log(nbYearLong(1000, 2.0, 50, 1214)) // 4 
console.log(nbYearLong(1500, 5, 100, 5000)) // 15
console.log(nbYearLong(1500000, 2.5, 10000, 2000000)) // 10

console.log(nbYear(1000, 2.0, 50, 1214)) // 4 
console.log(nbYear(1500, 5, 100, 5000)) // 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)) // 10


console.log(nbYearR(1000, 2.0, 50, 1214)) // 4 
console.log(nbYearR(1500, 5, 100, 5000)) // 15
console.log(nbYearR(1500000, 2.5, 10000, 2000000)) // 10


// all tests pass
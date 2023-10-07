// Drink About

/*
Make a function that receive age, and return what they drink.

Rules:

Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
Examples: (Input --> Output)

13 --> "drink toddy"
17 --> "drink coke"
18 --> "drink beer"
20 --> "drink beer"
30 --> "drink whisky"
*/

const peopleWithAgeDrink = x => {
    if(x < 14){
        return 'drink toddy'
    }else if(x >= 14 && x < 18){
        return 'drink coke'
    }else if(x >= 18 && x < 21 ){
        return 'drink beer'
    }else{
        return 'drink whisky'
    }
}

// tests pass

// diff syntax

const peopleWithAgeDrinkTwo = (age) =>
  age < 14 ? "drink toddy" :
  age < 18 ? "drink coke" :
  age < 21 ? "drink beer" : "drink whisky"
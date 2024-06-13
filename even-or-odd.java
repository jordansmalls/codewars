// Even or Odd
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/


// public class Kata {
//   public static String evenOrOdd(int number){
//     if(number % 2 != 0){
//       return "Odd";
//     }else{
//       return "Even";
//     }
//   }
// }

public class Kata {
  public static String evenOrOdd(int number){
    return (number % 2 == 0) ? "Even" : "Odd";
  }
}

// tests pass
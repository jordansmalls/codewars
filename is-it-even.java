// Is It Even
/*
In this Kata we are passing a number (n) into a function.
Your code will determine if the number passed is even (or not).
The function needs to return either a true or false.
Numbers may be positive or negative, integers or floats.
Floats with decimal part non equal to zero are considered UNeven for this kata.
*/

public class Original {
    public static boolean isEven(double n) {
        // Check if the number is a float with a decimal part non equal to zero
        if (n % 1 != 0) {
            return false;
        }

        // Check if the integer part of the number is even
        return ((int) n) % 2 == 0;
    }

    public static void main(String[] args) {
        System.out.println(isEven(4));    // true
        System.out.println(isEven(3));    // false
        System.out.println(isEven(2.0));  // true
        System.out.println(isEven(2.5));  // false
        System.out.println(isEven(-2));   // true
        System.out.println(isEven(-3.5)); // false
    }
}



// alt
class Number {
  static boolean isEven(double n) {
    return n % 2 == 0;
  }
}
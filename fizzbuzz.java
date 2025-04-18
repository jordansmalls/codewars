// Fizzbuzz (https://leetcode.com/problems/fizz-buzz/description/)
// Given an integer n, return *a string array answer (1-indexed) where*:
// * answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// * answer[i] == "Fizz" if i is divisible by 3.
// * answer[i] == "Buzz" if i is divisible by 5.
// * answer[i] == i (as a string) if none of the above conditions are true.
 
// Example 1:
// Input: n = 3
// Output: ["1","2","Fizz"]

// Example 2:
// Input: n = 5
// Output: ["1","2","Fizz","4","Buzz"]

class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> array = new ArrayList();
        int i = 1;
        while(i <= n) {
            if(i % 15 == 0) {
                array.add("FizzBuzz");
            }else if(i % 3 == 0) {
                array.add("Fizz");
            }else if(i % 5 == 0) {
                array.add("Buzz");
            }else {
                array.add(String.valueOf(i));
            }
            i++;
        }
        return array;
    }
}
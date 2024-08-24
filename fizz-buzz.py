# Fizz Buzz
'''
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

Example 1:
Input: n = 3
Output: ["1","2","Fizz"]

Example 2:
Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
'''

'''
@params {number} num
@return {list[str]}

create result variable to store result of:
    instantiate a loop to iterate from 1 - input num
    use mod:
        if curr_num % 15 (both 3 and 5) == 0 --> push "FizzBuzz" into array
        if curr_num % 3 == 0 --> insert "Fizz" to array
        if curr_num % 5 == 0 --> insert "Buzz" to array
        else --> insert curr_num as a string into array (str(curr_num))

'''

from typing import List

class Solution:
    def fizzBuzz(self, num: int) -> List[str]:
        result = []
        curr_num = 1
        while curr_num <= num:
            if curr_num % 15 == 0:
                result.append("FizzBuzz")
            elif curr_num % 3 == 0:
                result.append("Fizz")
            elif curr_num % 5 == 0:
                result.append("Buzz")
            else:
                result.append(str(curr_num))
            curr_num += 1
        
        return result
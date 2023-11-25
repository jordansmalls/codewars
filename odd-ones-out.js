// Odd Ones Out!
/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!
Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.
*/

const oddOnesOut = nums => {
    const count = {};
    for(let num of nums){
      count[num] = (count[num] || 0) + 1;
    }
    return nums.filter(num => count[num] % 2 === 0);
  }

console.log(oddOnesOut([1, 1, 2, 2, 3, 3, 3]), [1, 1, 2, 2])
console.log(oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]), [26, 24, 24, 26])
console.log(oddOnesOut([1, 2, 3]), [])
console.log(oddOnesOut([1]), [])
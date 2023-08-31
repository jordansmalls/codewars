// Highest Rank Number in an Array

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

const highestRank = arr => {
    return arr.sort(function(a,b){
          return (arr.filter(function(v){ return v===a }).length)-(arr.filter(function(v){ return v===b }).length)||a-b
      }).pop();
  }
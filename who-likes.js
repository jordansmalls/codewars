// Who Likes it?
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.
// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

const likes = array => {
  var len = array.length;
  if(len < 1){
    return "no one likes this";
  }else if(len == 1){
    return `${array[0]} likes this`;
  }else if(len == 2){
    return `${array[0]} and ${array[1]} like this`;
  }else if(len == 3){
    return `${array[0]}, ${array[1]} and ${array[2]} like this`;
  }else{
    return `${array[0]}, ${array[1]} and ${len - 2} others like this`;
  }
}


// Examples
console.log(likes([])) // "no one likes this"
console.log(likes(["Jacob", "Alex"])) // "Jacob and Alex like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"] )) // "Alex, Jacob and 2 others like this"\
// tests pass
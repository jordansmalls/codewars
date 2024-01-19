// Smallest unused ID
/*
Hey awesome programmer!

You've got much data to manage and of course you use zero-based and non-negative ID's to make each data item unique!

Therefore you need a method, which returns the smallest unused ID for your next new data item...

Note: The given array of used IDs may be unsorted. For test reasons there may be duplicate IDs, but you don't have to find or remove them!

Go on and code some pure awesomeness!


*/

function nextId(usedIDs) {
  usedIDs.sort((a, b) => a - b); // Sort the array in ascending order

  let smallestID = 0;

  for (let i = 0; i < usedIDs.length; i++) {
    if (usedIDs[i] === smallestID) {
      smallestID++;
    } else if (usedIDs[i] > smallestID) {
      return smallestID;
    }
  }

  return smallestID;
}


// passes
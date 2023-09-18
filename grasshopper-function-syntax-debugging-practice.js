// Grasshopper - Function syntax debugging

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// students code:

function main [verb, noun]
  return verb + noun
}


// corrected

const main = (verb, noun) => verb + noun

// another declaration

function main(verb, noun){
    return verb + noun
}
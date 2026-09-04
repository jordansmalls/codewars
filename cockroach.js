// Cockroach
/*
 The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the nearest integer (= floored).

For example: 1.08 --> 30
*/

// input -> speed, in km/hr
// output -> speed, in cm/hr
// formula is: 1 km/hr == 27.778
// simple ans: return input * 27.778, rounded down using math.floor built in method

const cockroachSpeed = s => Math.floor(s * 27.778);

// Correct the Time-String
/*
A new task for you!

    You have to create a method, that corrects a given time string.
    There was a problem in addition, so many of the time strings are broken.
    Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples

"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)
*/


// params -> input str of "time"
// return -> corrected and formatted time string
// if input str is empty ==> return empty str
// if input str === null, return null
// if else checks before operation
// split str into an array delim :
// 3 vals => hours, minutes, seconds
// if secs > 59  --> secs = 0 & min + 1 ...
// so on for rest of time vals
// either join arr and return as res, init string variable to hold result then return


// function timeCorrect(str) {
//     // if input str is empty
//     if(str === '') return '';
//     // if input str === null
//     if(str === null) return null;
//     // split input str into array
//     let arr = str.split(':');
//     // check if str needs manipulation
//     if(+arr[0] < 24 && +arr[1] < 60 && +arr[2] < 60) return str;
//     // initializing variables for different time vals -> changing to int type
//     let hours = Number(arr[0]);
//     let minutes = Number(arr[1]);
//     let seconds = Number(arr[2]);
//     // if any of the time parts are not valid numbers
//     if(isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;
//     // if seconds is greater than 59
//     if(seconds > 59){
//         seconds -= 60;
//         minutes += 1;
//     };
//     // if minutes is greater than 59
//     if(minutes > 59){
//         // subtracting 60 "minutes" aka an hour
//         minutes -= 60;
//         // adding the subtracted hour to the hours var
//         hours += 1;
//     }
//     // if hours is greater than or equal to 24
//     if(hours >= 24) {
//         // get the remainder after dividing by 24
//         hours %= 24;
//     }
//     // if any of the time parts are negative
//     if(hours < 0 || minutes < 0 || seconds < 0) {
//         // calculate the absolute value and add leading zeros
//         hours = Math.abs(hours);
//         minutes = Math.abs(minutes);
//         seconds = Math.abs(seconds);
//         return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
//     }
//     // join the corrected time parts and return
//     return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
// }

// concise

const timeCorrect = str => {
    if (!str) return str === '' ? '' : null;
    const [hours, minutes, seconds] = str.split(':').map(Number);
    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) return null;
    let totalSeconds = hours * 3600 + minutes * 60 + seconds;
    totalSeconds = (totalSeconds + (totalSeconds < 0 ? 86400 : 0)) % 86400;
    const correctedHours = Math.floor(totalSeconds / 3600);
    const correctedMinutes = Math.floor((totalSeconds % 3600) / 60);
    const correctedSeconds = totalSeconds % 60;
    return `${String(correctedHours).padStart(2, '0')}:${String(correctedMinutes).padStart(2, '0')}:${String(correctedSeconds).padStart(2, '0')}`;
};

// alternate solution 
function timeCorrectAgain(str) {
	const date = new Date(); 
  if (str == '') return str;
	if (!/^\d{2}\:\d{2}\:\d{2}$/g.test(str)) return null;
  date.setUTCHours(...str.split(':'));
  return date.toLocaleTimeString('en', {hour12: false});
}


const x = "09:10:01"; 
const y = "11:70:10";
const z = "19:99:99";
console.log(timeCorrect(x) === "09:10:01"  ); // true
console.log(timeCorrect(y) === "12:10:10" ); // true
console.log(timeCorrect(z) === "20:40:39" ); // true

// tests pass

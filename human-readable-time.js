// Human Readable Time
/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

    doTest(     0, '00:00:00');
    doTest(    59, '00:00:59');
    doTest(    60, '00:01:00');
    doTest(    90, '00:01:30');
    doTest(  3599, '00:59:59');
*/

/*
* @params {integer} seconds
* @return {string}
*/

// input --> number: seconds
// return --> string: formatted in HH:MM:SS

function humanReadable(seconds) {
    // Calculate hours
    function getHours() {
        return Math.floor(seconds / 3600);
    }

    // Calculate minutes
    function getMinutes() {
        return Math.floor((seconds % 3600) / 60);
    }

    // Calculate remaining seconds
    function getRemainingSeconds() {
        return seconds % 60;
    }

    // Get the hours, minutes, and seconds
    let hours = getHours();
    let minutes = getMinutes();
    let remainingSeconds = getRemainingSeconds();

    // Pad the values to ensure they are two digits
    let h = String(hours).padStart(2, '0');
    let m = String(minutes).padStart(2, '0');
    let s = String(remainingSeconds).padStart(2, '0');

    // Return the formatted time
    return `${h}:${m}:${s}`;
}
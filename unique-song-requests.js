// Unique Song Requests
/*
You're building a song request system for a DJ. Given an array of song requests (where each song is represented by its title as a string), write a function that removes duplicate requests and returns an array of unique song titles, maintaining their original order.

Requirements:

    The function should take an array of strings as input.
    The function should return a new array with duplicates removed, preserving the original order of first occurrences.
*/

/**
 * @param {string[]} songs
 * @return {string[]}
 */

const uniqueRequests = songs => {
    const set = new Set();
    const result = [];
    for(let song of songs) {
        let lowercaseSong = song.toLowerCase();
        if(!set.has(lowercaseSong)) {
            set.add(lowercaseSong);
            result.push(song);
        };
    };
    return result;
};

console.log(uniqueRequests(["Song A", "Song B", "Song A", "Song C", "Song B", "Song D"])) // ["Song A", "Song B", "Song C", "Song D"]
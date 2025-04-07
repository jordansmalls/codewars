# Valid Anagram
# Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
# An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.


class Solution:
    def isAnagram(self, s: str, t: str):
        if len(s) != len(t):
            return False

        s = s.lower()
        t = t.lower()

        store = dict()

        for letter in s:
            store[letter] = store.get(letter, 0) + 1

        for letter in t:
            if letter in store:
                store[letter] -= 1
                if store[letter] == 0:
                    del store[letter]
            else:
                return False
        return len(store) == 0





# Example 1: Input: s = "racecar", t = "carrace"
# Output: true

# Example 2: Input: s = "jar", t = "jam"
# Output: false

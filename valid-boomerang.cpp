// Valid Boomerang
/*
Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

A boomerang is a set of three points that are all distinct and not in a straight line.


Example 1:

Input: points = [[1,1],[2,3],[3,2]]
Output: true

*/

class Solution {
    public:
        bool isBoomerang(vector<vector<int>>& points) {
            int x = points[0][0];
            int y = points[0][1];
            int x1 = points[1][0];
            int y1 = points[1][1];
            int x2 = points[2][0];
            int y2 = points[2][1];

        // Check for collinearity
        if ((y1 - y) * (x2 - x1) == (y2 - y1) * (x1 - x))
            return false;
        else
            return true;
    }
};

// tests pass
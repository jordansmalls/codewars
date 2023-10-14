# String Transformer
# Given a string, return a new string that has transformed based on the input:
# Change case of every character, ie. lower case to upper case, upper case to lower case.
# Reverse the order of words from the input.
# Note: You will have to handle multiple spaces, and leading/trailing spaces.

# For example:
# "Example Input" ==> "iNPUT eXAMPLE"
# You may assume the input only contain English alphabet and spaces.

def string_transformer(str):
    result = []
    lower = str.lower()
    upper = str.upper()
    arr = list(str)
    arrL = list(lower)
    arrU = list(upper)
    for i in range(len(arr)):
        if arr[i] == arrU[i]:
            result.append(arrL[i])
        else:
            result.append(arrU[i])
    ans = ''.join(result)
    ans1 = ' '.join(ans.split(' ')[::-1])
    return ans1

# tests pass
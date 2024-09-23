// Regex Validate Pin Code
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/

/*
* @param {string} pin
* @return {boolean}
*/

export class Kata {
    static validatePin(pin: string): boolean {
         // if input pin is less than 4 nums
        if(pin.length < 4) return false;
        // if input pin is greater than 6 nums
        if(pin.length > 6) return false;
        // if input pin is 5 nums
        if(pin.length == 5) return false;
        
        // creating copy replacing/removing any chars that are not nums
        let copy = pin.replace(/[^0-9]/g,'')
        // if the adjusted strings length and the input are the same and have passed all of the checks, you have a valid PIN
        return copy.length === pin.length;
    }
}

// test cases pass
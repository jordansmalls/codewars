// The 'AA' Number Notation

/*
Your task is to write a function that accepts a floating point number and formats it using the notation given above.

The resulting number should include 3 most significant digits and be rounded down towards zero (for example, 1238 should be 1.23K, and -1238 should be -1.23K). All trailing zeroes after the decimal point should be removed, and the decimal point should be excluded if the resulting number is whole number of units after the rounding down. If the number is too small and it's rounded down to 0, then 0 should be returned. Beware of the negative zero, which should not appear in the output, insted the regular zero 0 should be returned.

Input limitation
The input is a finite floating point number in range -10³⁰³ < x < 10³⁰³.

***More given information on codewars site***
*/


function formatNumber(x) { 
    const alph = "abcdefghijklmnopqrstuvwxyz";
    const pr = "KMBT";
    const getSig = (ns) => {
      let l = ns.length%3||3;
      let s = ns.slice(0, l);
      if (l < 3) {
        let p = ns.slice(l, 3).replace(/0+$/, "");
        return s + (p.length !== 0? "." + p: "");
      }
      return s;
    }  
    let xs = ""+Math.abs(x);
    let es = xs.split("e");
    if (es.length > 1) {
      let ep = es[0].split(".");
      let en = +es[1];
      if (en < 0) {
        xs = "0." + ep[0].padStart(Math.abs(en), "0") + ep[1];
      } else {
        xs = (ep[0] + (ep[1]? ep[1]: "")).padEnd(en+1, "0");
      }
    }
    let prts = xs.split(".");
    let h = prts[0];
    if (h.length < 4) {
      let l = 3 - h.length;
      let res = h + (l > 0 && prts[1] && +prts[1].slice(0,l) > 0? "." + prts[1].slice(0,l): "");
      return (+res !== 0 && x < 0? "-": "") + res;
    }
    let n = Math.floor(h.length/3) - (h.length%3? 1: 2);
    if (n <= 3) {
      return (x < 0? "-": "") + getSig(h) + pr[n];
    }
    n -= 3;  
    let a1 = alph[Math.floor((n-1)/26)];
    let a2 = alph[((n-1)%26)];
    return (x < 0? "-": "") + getSig(h) + a1 + a2;
  }
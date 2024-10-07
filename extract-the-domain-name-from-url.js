// Extract the Domain Name from a URL
/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
*/

/*
* @params {string} url
* @return {string}
*/

const domainName = function(url){
    // remove http
    if(url.indexOf("http://") !== -1){
      url = url.replace("http://", '')
    }
    // remove https
    if(url.indexOf("https://") !== -1){
      url = url.replace("https://",'')
    }
    // remove www.
    if(url.indexOf("www.") !== -1 ){
      url = url.replace("www.",'')
    }
    let temp = url.indexOf('.')
    let pointer = 0
    let res = new Array()
    while(pointer < temp){
      res.push(url[pointer])
      pointer++
    }
    return res.join('')
  }

console.log(domainName("http://github.com/carbonfive/raygun")) // "github"
// remove the "http://"
// remove the ".com" & everything that follows.com
// return github

console.log(domainName("http://www.zombie-bites.com")) // "zombie-bites"

console.log(domainName("https://www.cnet.com")) // "cnet"

console.log(domainName('google.co.jp')) // "google"

// all tests pass
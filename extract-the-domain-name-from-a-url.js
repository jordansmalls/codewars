// Extract the domain name from a URL

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const domainName = (url) =>
   url.includes("www")
    ? url.split(".")[1]
    : url.includes("http")
    ? url.split("//")[1].split(".")[0]
    : url.split(".")[0]


// alt solutions

let domainNameTwo = url => url.replace("https://", "").replace("http://", "").replace("www.", "").split(".")[0];

//

const domainNameThree = url => url.replace(/.+\/\/|www.|\..+/g, '')
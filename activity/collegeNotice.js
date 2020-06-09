let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");
console.log("Sending Request. . .");
request("https://www.abes.ac.in/about-us/notices-circulars/",
    function (err, response, bodyhtml) {
        if (err == null && response.statusCode == 200) {

            // console.log("File Saved!");
            parseHTML(bodyhtml);
        } else if (response.statusCode == 404) {
            console.log("PAGE NOT FOUND!");
        } else {
            console.log("error: " + err);
            console.log("RESPONSE STATUS CODE: " + response.statusCode);
        }
    }
);

function parseHTML(html) {
    console.log(". . . Parsing HTML");
    let $ = cheerio.load(html);
    let nameOnNotice = $('td[data-title="Branch Code"]');
    let date = $('td[data-title="Duration"]');
    for(let i=0;i<nameOnNotice.length;i++){
        console.log("Notice",i+1,": ", $(nameOnNotice[i]).text()," ","Date: ",$(date[i]).text());
    }
}
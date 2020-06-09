let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

//npm install cheerio
//npm install request
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/commentary/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20"
//cb will be called when request recieves the data
request(url,cb);
function cb(err,response,html){
    console.log("Recieved Response");
    if(err==null && response.statusCode==200){
        fs.writeFileSync("lbc.html",html);
        console.log("File Saved");
        parseHtml(html);
    }
    else if(response.statusCode==404){
        console.log("Page not Found");
    }
    else{
        console.log(err);
        console.log(response.statusCode);
    }
}

function parseHtml(html){
    console.log('Parsing HTML');
    let $=cheerio.load(html);

    //let title = $('title');
    //let title = $('.header-title.label');
    let elementArr = $('.match-comment-wrapper');
    console.log("```````````````````````````````````````````````````````````````````````````````````````````````````````````````");
    
    let lbc=$(elementArr[0]).text();
    console.log(lbc);
    //console.log(elementArr.text());//print text of all the selected elements
    console.log("```````````````````````````````````````````````````````````````````````````````````````````````````````````````");

}
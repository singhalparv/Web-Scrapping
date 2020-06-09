let request = require("request");
let fs = require("fs");
let cheerio = require("cheerio");

//npm install cheerio
//npm install request
console.log("Sending Request");
let url = "https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20"
//cb will be called when request recieves the data
request(url,cb);
function cb(err,response,html){
    console.log("Recieved Response");
    if(err==null && response.statusCode==200){
        fs.writeFileSync("hw.html",html);
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
    console.log("`````````````````````````")
    let players=$(".table.bowler tbody tr");
    let cnt=0;
    let name;
    for(let i=0;i<players.length;i++){
        let allColOfAPlayer=$(players[i]).find("td");
        let cPlayerName= $(allColOfAPlayer[0]).text();
        let wickets= $(allColOfAPlayer[4]).text();
        
        
        if(cnt<=Number(wickets)){
            cnt=Number(wickets);
            name=cPlayerName;
        }
        console.log(cPlayerName+"--->"+wickets);
    }
    console.log("``````````````````````````````````````````````````````````````````");
    console.log("Highest Wickets taken by  "+name+"--->"+cnt);
    //fs.writeFileSync("bowlers.html",players);
}
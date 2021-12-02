const file  = "sample"

//FROM TEXT FILE TO ARRAY:
var fs = require("fs");
//required since node 6 to convert to string to use split.
var text = fs.readFileSync(`./${file}.txt`).toString('utf-8');
//drops newline and \r
var textByLine = text.split("\r\n")

// store all in array (will output a nested array) 
var nextDepthLevelsArray= [];
nextDepthLevelsArray.push(textByLine.map(string => (string)))
//unnnest array 
nextDepthLevelsArray = nextDepthLevelsArray.reduce((a, b) => a.concat(b), []);

console.log(nextDepthLevelsArray)
//splice strings to 3 arrays for specific direction.


function getDirection(arr){
    for(let i = 0; i < arr.length; i++  ){
    let string = arr[i];
    let withoutNum  = arr[i].slice(0,-1);
    let getNum = string.slice(string.length -1);

    if(withoutNum.includes('forward')){
        console.log('forward')
    }
    console.log(getNum);
    // console.log(withoutNum);
}}
getDirection(nextDepthLevelsArray);



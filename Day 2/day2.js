const file  = "input"

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



// //function that splits string in direction and number. Takes in an array
function getDirection(arr){
    //counters
    let up = 0;
    let down = 0;
    let forward = 0;
    
    //loops over array. splits every string for relevant data
    for(let i = 0; i < arr.length; i++  ){
    let string = arr[i];
    
    let withoutNum  = arr[i].slice(0,-1); //direction
    let getNum = parseInt(string.slice(string.length -1)); //integer

    if(withoutNum.includes('forward')){
        forward += getNum;
    } else if(withoutNum.includes('up')){
        up += getNum;
    } else {
        down += getNum;
    }
    console.log(`The answer to the first question is ${forward * (down - up)}`);
    // console.log(answer);
    // return answer;
    
}}
getDirection(nextDepthLevelsArray);




//function that splits string in direction and number. Takes in an array
function getDirectionWithAim(arr){
    //counters
    let position = 0;
    let aim = 0;
    let depth = 0;

    //loops over array. splits every string for relevant data
    for(let i = 0; i < arr.length ; i++  ){
    let string = arr[i];
    
    let withoutNum  = arr[i].slice(0,-1); //direction
    let getNum = parseInt(string.slice(string.length -1)); //integer

    if(withoutNum.includes('forward')){
        position += getNum;
        depth += getNum * aim;
    } else if(withoutNum.includes('up')){
        
        aim -= getNum;
    } else if(withoutNum.includes('down')){
        
        aim += getNum;
    }
    console.log(`The answer to the second question is ${position * depth}`);
    
}}
getDirectionWithAim(nextDepthLevelsArray);

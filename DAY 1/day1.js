/*
Day 1 PART 1
*/


//FROM TEXT FILE TO ARRAY:
var fs = require("fs");
//required since node 6 to convert to string to use split.
var text = fs.readFileSync("./input.txt").toString('utf-8');
//drops newline and \r
var textByLine = text.split("\r\n")

// store all in array (will output a nested array) 
var nextDepthLevelsArray= [];
nextDepthLevelsArray.push(textByLine.map(string => parseInt(string)))
//unnnest array 
nextDepthLevelsArray = nextDepthLevelsArray.reduce((a, b) => a.concat(b), []);

//-1 because we give a + 1 to our count from the start in the first iteration
let count = -1
let depthlevel = 0
nextDepthLevelsArray.forEach(nextDepthLevel =>{
    //starts with 0, because input starts with an increase
    if(depthlevel < nextDepthLevel){
        //we dive deeper and depthlevel becomes the (previous) deeper level
        depthlevel = nextDepthLevel
        //we count an increase in depth
        count++
        } else {
            //not going deeper, our depthLevel becomes the nextDepthLevel as well, but we count no increase
            depthlevel = nextDepthLevel
    }
})
        
console.log(count)



// console.log(counter)
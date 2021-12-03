const file  = "sample"

//FROM TEXT FILE TO ARRAY:
var fs = require("fs");
//required since node 6 to convert to string to use split.
var text = fs.readFileSync(`./${file}.txt`).toString('utf-8');
//drops newline and \r
var textByLine = text.split("\r\n")

// store all in array (will output a nested array) 
var binaryNumbersArray= [];
binaryNumbersArray.push(textByLine.map(string => (string)))
//unnnest array 
binaryNumbersArray = binaryNumbersArray.reduce((a, b) => a.concat(b), []);



function sortBinary(arr){
    // // store gamma and epsilon
    // let gamma  = 0;
    // let epsilon = 0; 
    // // count if one or zeroes are more / less common
    // let ones = 0;
    // let zeroes = 0;
    // //checks first char in arr place
    // arr[0][0] == '1' ? ones += 1 : zeroes +=1;
    // // tallies and finds gamma : epsilon    
    // ones > zeroes ? gamma += 1 : epsilon += 1
    // console.log(gamma);
   
    for(column = 0; column < arr[0].length; column += 1){
        for(row = 0; arr.length; row += 1){
            // store gamma and epsilon
            let gamma  = 0;
            let epsilon = 0; 
            // count if one or zeroes are more / less common
            let ones = 0;
            let zeroes = 0;
            //checks first char in arr place
            arr[column][row] == '1' ? ones += 1 : zeroes +=1;
            // tallies and finds gamma : epsilon    
            ones > zeroes ? gamma += 1 : epsilon += 1
            console.log(gamma);
        }
    }
}

sortBinary(binaryNumbersArray)





// arr.forEach(number => {
//     // count if one or zeroes are more / less common
//     let ones = 0;
//     let zeroes = 0;
//     //checks first char in arr place
//     binaryNumbersArray[row][column] == '1' ? ones += 1 : zeroes +=1;
//     // tallies and finds gamma : epsilon  
//     ones > zeroes ? gamma = 1 : epsilon = 1;
//     row += 1;









// let row = 0;

// let gamma = 0;
// let epsilon = 0;

// function getBinary(binaryNumbersArray){
//     for(i = 0; i < 7 ; column++){
//         binaryNumbersArray.forEach(number => {
//             // count if one or zeroes are more / less common
//             let ones = 0;
//             let zeroes = 0;
//             //checks first char in arr place
//             binaryNumbersArray[row][column] == '1' ? ones += 1 : zeroes +=1;
//             // tallies and finds gamma : epsilon  
//             ones > zeroes ? gamma = 1 : epsilon = 1;
//             row += 1;
//             if (row == 12) { } 
//         })
//     }
// }

// getBinary(binaryNumbersArray);
// console.log(row, gamma)

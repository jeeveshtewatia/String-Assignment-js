// Count the Heads
// Tina is given a string  S which contains the first letter of all the student names in her class. She got a curiosity to check how many people have their names starting from the same alphabet. So given a string  S , she decided to write a code that finds out the count of characters that occur more than once in the string.

// Note: You have to complete Count Head function. No need to take any input.


var Count_Occ = (s) => 
{
    let countA=0;
    let countD=0;
    for(let i = 0;i<S.length;i++){
        if(S[i]==="A"){
            countA++;
            // console.log(countA);
        }else if (S[i]==="D"){
            countD++;
            // console.log(countD);

        }
    }
    let B =[countA,countD]
    console.log(B)
    
};
Count_Occ("prepbytes")
 

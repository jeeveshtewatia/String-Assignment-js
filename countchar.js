// Count Characters
// You are given a string 
// S
// , and your task is to return an array 
// B
 
// (
// having a size of 
// 2
// )
// , where 
// B
// [
// 0
// ]
//  contains the count of character A (uppercase) in string S and 
// B
// [
// 1
// ]
//  contains the count of character D (uppercase) in string S.

// Note: You have to complete countCharacters function. No need to take any input.


const countCharacters = (S) => 
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
 
countCharacters("AbaDd")
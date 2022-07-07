// Count the Vowels
// You are given a string 
// S
//  containing both uppercase and lowercase letters. You need to find out the number of vowels in the given string.

// Note: You have to complete Count_Vowel function. No need to take any input.


var Count_Vowels= (S) => 
{
      let count=0;
      for(let i = 0 ;i<S.length;i++){
        if((S[i]=="a")||(S[i]=="e")||(S[i]=="i")||(S[i]=="o")||(S[i]=="u")){
          count++;
        }
      }
      return count;
};
 

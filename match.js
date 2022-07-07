// Match the Strings
// You are given two strings 
// S
// 1
//  and 
// S
// 2
// , Your task is to print 
// Y
// E
// S
//  if both strings are same else print 
// N
// O
// .

// Note: You have to complete String_Match function. No need to take any input.


var String_Match = (S1,S2) => 
{
   if(typeof S1=="string" && typeof S2=="string" && S1 === S2){
    console.log("YES")
}  else{
       console.log("NO")

   }
};
String_Match("prepbytes","prepbytes")

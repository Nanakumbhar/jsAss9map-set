// 1."Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"
//ans=>

let s="abcadeecfb";

let set=new Set(s);

console.log(set);

//  ouput:
//  0: "a"
//  1: "b"
//  2: "c"
//  3: "d"
//  4: "e"


// 2."Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"
// ans=>

let STR = ["a","b","c","a","d","e","e","c","f","b"];
    
let mp=new Map()
for(let i=0;i<STR.length;i++){
  if (mp.has(STR[i])==true){
    let count=mp.get(STR[i])
    mp.set(STR[i] ,count+1)
  }
  else{mp.set(STR[i],1)}
}
console.log(mp)
    // output:
    // a=2
    // b=2
    // c=2
    // d=1
    // e=2
    // f=1

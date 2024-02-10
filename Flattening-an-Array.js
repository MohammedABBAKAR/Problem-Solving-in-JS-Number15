// Fix the Error: Flattening an Array

// I'm trying to write a function to flatten an array of subarrays into one array.
//  (Suppose I am unware there is a .flat() method in the Array prototype). 
//  In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].


// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }

// The concat method returns a new array, 
// and it does not modify the original array. 
// Therefore, you need to assign the result of arr2.concat(arr[i]) back to arr2.
//  Here's the corrected code:

function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
     arr2 = arr2.concat(arr[i]);
    }
    return arr2;
  }
flatten([[1, 2], [3, 4]])
console.log(flatten([[1, 2], [3, 4]]))
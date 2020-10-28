'use strict';

// Complete this algo
const minJumps = arr => {
  // if array.length < array[0] to check for base case

  if (arr.length - 1 <= arr[0]) return 1

  // let count = 0 , currentIndexValue = 0
  // while loop (currentIndex < arr.length) 
    // jump to another index 
    // for loop (let i = currentIndexValue, i > 0; i--)
    // for (let i = currentIndex; i < currentIndex + currentIndex Value; i++) -- LEFT OFF HERE

      //check array value of currentIndex + i
        //is this the largest value in the for loop?
    //currentIndexValue += arr[currentIndexValue]

    //increase count

    //return count


};

module.exports = minJumps
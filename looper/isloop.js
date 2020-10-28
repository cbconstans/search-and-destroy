'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    //take the list, check to see if the nexts loop
    //comparator that looks at next and previous
    const comparator = (node) => {
        if (node.next.previous !== node){
            return true
        } else {
            return false;
        }
        //check nodes previous and next

        //if you get a node thats next isnt itself its a loop

        //to make sure their previous and/or nexts aren't looping
    }

    //check if tail has a next then true
    if (linkedlist.tail.next){
        return true
    } else {
        linkedlist.search(comparator)
    }

    return false


    //return true if there is a loop in the nexts // 

    //return false if there is no loop //
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
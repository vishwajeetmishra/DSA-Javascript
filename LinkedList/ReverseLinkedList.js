//Reverse Linked List
/*
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]
Example 2:

Input: head = []

Output: []
*/

function listTypeHelper(head){
    if(!head || head === null){
        return null; // empty list
    }else if(head.next === null){
        return 0; // single node list 
    }else{
        return 1; // multi node list
    }
}

function reverseList(head){
    const listType = listTypeHelper(head);
    if(listType === null || listType === 0) return null;

    let previousNode = null;
    let currentNode = head;

    while(currentNode){
        let next = currentNode.next;
        currentNode.next = previousNode; // flipping the pointer
        previousNode = currentNode; // new head in first iteration
        currentNode = next;
    }
    return previousNode; // new head after reversing
}

/*
original list 
H              T
1 -> 2 -> 3 -> 4 -> null 

reversed list
        T              H
null <- 1 <- 2 <- 3 <- 4
*/
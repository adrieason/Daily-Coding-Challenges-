/*Given the head of a singly linked list, return true if it is a 
palindrome
 or false otherwise.*/


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let current = head 
    let array = []
    while (current !== null){
        array.push(current.val)
        current = current.next
    }
    let num = array.length / 2
    for (i=0;i<num;i++){
        if (array[i]!==array[array.length-i-1]){
            return false 
        }
    }
    return true
};
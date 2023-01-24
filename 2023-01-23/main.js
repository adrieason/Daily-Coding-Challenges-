/*Given the head of a singly linked list, reverse the list, and return the reversed list.*/ 

var reverseList = function(head) {
  let current = head;
  let prev = null; 
  while (current !== null){
      let next = current.next
      current.next = prev
      prev = current
      current = next 
  }
  return prev
};
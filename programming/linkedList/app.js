/**
 * LINKED LIST
 * ==> Literally, a linked list is a chained data strucutre which each node consisting of two piece of information 
 * 1. the data of the node and 
 * 2. pointer to the next node
 * both array and linked list are linear data structure with serialised storage but some diffrences are
 *
 *	ARRAY
 *	1. static memory allocation, happens during compilng and sequential
 *	2. GET element from index, faster in speed
 *	3. add and delete are slow due to sequential and static memory
 *	4. spatial structure 1-Dimension or multi dimension
 *
 *  Linked-list
 *  1. Dynamic memory allocation happens during running and non siquential
 *  2. get element by reading all node so it is slower
 *  3. Due to dynamic memory allocation, only require minor memory overhead, faster in speed
 *  4. spatial structure :- unilateral/bilateral or circular linked list
 *
 *  UNILATERAL linked list method
 *  1. size :- return the number of node
 *  2. head :- Return the element of head
 *  3. add :- add another node into tail
 *  4. remove :- remove certain node
 *  5. indexOf :- return the index of node
 *  6. elementAt :- return the node of an index
 *  7. addAt :- insert a node at specific index
 *  8. deletAt :- delete a node at a specific index
 *
 * --> Insertion O(1)
 * --> Random access O(n)
 * --> Find O(n)
 * --> Random removal O9n
 *
 * https://medium.com/better-programming/8-common-data-structures-in-javascript-3d3537e69a27
 * https://www.collectionsjs.com/list
 * https://medium.com/better-programming/basic-interview-data-structures-in-javascript-stacks-and-queues-b68b5a7c82a6
 */

 const insertAfter = (node, data) => {
     const newNode = createNode(data);
     newNode.next = node.next;
     node.next = newNode;
     return node;
 }

 const insertBefore = (head, data) => {
    const newHead = createNode(data);
    newHead.next = head;
    return newHead;
 }

 let head = createNode('one');

 insertAfter(head, 'two');

 head = insertBefore(head, 'zero')
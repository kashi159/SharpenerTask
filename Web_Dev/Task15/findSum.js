// Find the sum of odd elements in a linked list
var findSumOfOddElements = function(head) {
    
	// return the sum of odd values of the linkedlist
	let p=head;
	let sum=0;
	
	while(p!= null){
	    if(p.val%2 !== 0){
	        sum=sum+p.val;
	    }
	    p=p.next;
	}
	return sum;
};
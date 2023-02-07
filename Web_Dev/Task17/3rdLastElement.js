var remove3rdlastElem = function(head) {

    let current = head;

if(current.next.next && current.next.next.next){
    
    while (current.next.next && current.next.next.next && current.next.next.next.next) {
      
        current = current.next; 
        // console.log(current);
    }
    current.next=current.next.next;
}
    
    //Dont change anything below. If changed click on reset.
    printLinkList(head)
};
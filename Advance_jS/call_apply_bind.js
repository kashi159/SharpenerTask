var obj = {
    val: 100 
    }

    function fun(){
    console.log(this.val);
    }
    
fun.call(obj); //100

function addToThis(a,b,c){
    console.log(this.val + a + b +c);
}
// call method
// addToThis.call(obj,1,2,3);  //106

var arr= [1,2,3];
//apply Method
// addToThis.apply(obj,arr); //106

var bound= addToThis.bind(obj);
// bound method
bound(1,2,3) //106
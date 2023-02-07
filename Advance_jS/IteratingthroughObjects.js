function findAverage(obj){
    //complete this function such that it return the average of all keys
    //returns average value
     let sum =0 ;
     let avg;
    for(let key in obj){
        sum= sum + obj[key];
        avg= sum/Object.keys(obj).length;
    }
    return avg;
    
     
 }
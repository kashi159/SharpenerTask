function findStudent(obj, age){
    //Complete this function by yourself
    //it takes in student Object and age of student which is to be found
    //should return name of student whose age matches
    //If nothing matches return -1
      for(let key in obj){
          if(obj[key] === age){
              return key;
          }else{
              return -1;
          } 
     }
     
}
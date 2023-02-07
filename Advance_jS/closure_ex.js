var count = 0;
const name = (arr)=>{

        return () => {
            console.log("Hello"+' '+arr[count]);
            count++;
        } 
        
    }


const person = name(["Ram", "Shayam"]);
person();
person()
person()
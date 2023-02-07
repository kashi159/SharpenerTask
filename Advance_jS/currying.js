function addToConstant(constant){
    return (value) => {
        console.log(value+constant) 
    }
}

addToConstant(15)(2)
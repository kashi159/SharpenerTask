console.log('Person 1');
console.log('Person 2')

async function Movie() {
    try{
   const ticket = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                reject('ticket')
            },3000)
        })
        console.log(ticket);

    const popcorn = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('popcorn')
            },2000)
        })
        console.log(popcorn);

    const butter = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Butter')
            },1000)
        })
        console.log(butter);

    const coke = await new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Coke')
            },1000)
        })
        console.log(coke);
        return ticket

    }catch(e){
        ticket = new Error("No Ticket");
    }

    return ticket;
}
Movie().then((msg)=> console.log(`Show's ${msg}`));
console.log('Person 4')
console.log('Person 5')

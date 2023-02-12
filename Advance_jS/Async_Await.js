console.log('Person 1');
console.log('Person 2')

async function Movie() {

    function wifeBringsTicket(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('ticket')
            },3000)
        })
    }

    function getPopcorn(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('popcorn')
            },2000)
        })
    }

    function getButter(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Butter')
            },1000)
        })
    }

    function getCoke(){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                resolve('Coke')
            },1000)
        })
    }

    let ticket = await wifeBringsTicket();
    // Promise.all method
   await Promise.all([getPopcorn(),getButter(),getCoke()]).then((item)=> console.log(`${item}`))
  
    
    
    //Await method
    // console.log (`I have ${ticket}`)
    // await getPopcorn().then((msg)=> console.log(`Let's eat ${msg}`));
    // await butter().then((msg)=> console.log(`Here's the ${msg}`))

    return ticket;
}
Movie().then((msg)=> console.log(`Myself: Here's my ${msg}`));
console.log('Person 4')
console.log('Person 5')

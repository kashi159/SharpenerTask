async function task(){

    const posts = [];

    function createPost(post) {
        return new Promise( (resolve, reject) => {
            
            setTimeout( () => {
                if(post === undefined && posts.length<1){
                reject("ERROR")
                }else{
                    posts.push(post);
                    resolve(posts)
                }
                
            },1000)
        }) 
    }


    function upadteLastUserActivityTime(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                const time = new Date();
                resolve(`User Last Activity Time: ${time}`)
            },1000)
        })
    }

    function printPost() {
            posts.forEach((post) => {
                console.log(post)
            })
    }


    function deletePost(){
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                if(posts.length > 0){
                    const poppedElement  = posts.pop();
                    resolve(poppedElement);
                } else {
                    reject("ERROR: ARRAY IS EMPTY")
                }
            }, 1000)
        })
    }

        await createPost('HI');
        await Promise.all([printPost(),upadteLastUserActivityTime()]).then(msg => console.log(`${msg}`))

}

// Promise.all

task()
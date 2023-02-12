const posts = [];

function createPost(post) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push(post);
            resolve()
        },1000)
    }) 
}

function printPost() {
    posts.forEach((post) => {
        console.log(post)
    })
}

function upadteLastUserActivityTime(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const time = new Date()
            resolve(console.log(`User Last Activity Time: ${time}`))
        },1000)
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

createPost('HI')
.then(printPost)
.then(upadteLastUserActivityTime)
.then(createPost("Hello"))
.then(printPost)
.then(upadteLastUserActivityTime)
.then(deletePost)
.then(printPost)
.then(upadteLastUserActivityTime)
.catch(err => console.log(err))

// Promise.all

// Promise.all([createPost('HI'),printPost,upadteLastUserActivityTime,createPost('HELLO'),printPost,upadteLastUserActivityTime,deletePost,printPost,upadteLastUserActivityTime]).then(values => console.log(values))
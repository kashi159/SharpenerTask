const posts = [{title: 'POST1'}];
//Do not touch this function
function create2ndPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST2'});
            resolve()
        }, 3000)
    }) 
}
//Do not touch this function
function create3rPost() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            posts.push({title: 'POST3'});
            resolve();
        }, 2000)
    }) 
}

//Do not touch this function
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

//Modify the lines below and use .then and .catch smartly to get the correct output.
//1st method
create2ndPost().then(()=>{
    deletePost().then((deletedPost1)=>{
        console.log(deletedPost1.title)
        create3rPost().then(()=>{
            deletePost().then((deletedPost2)=>{
                console.log(deletedPost2.title)
                deletePost().then((deletedPost3)=>{
                    console.log(deletedPost3.title)
                    deletePost().catch((msg)=>{
                        console.log(msg)
                    })
                })
            })
        })
    })
})

//2nd method

// create2ndPost().then(()=>{return deletePost()})
// .then((deletedPost2)=>{console.log(deletedPost2.title)})
// .then(()=>{ return create3rPost() })
// .then(()=>{ return deletePost()})
// .then((deletedPost3)=>{console.log(deletedPost3.title)})
// .then(()=>{ return deletePost()})
// .then((deletedPost1)=>{console.log(deletedPost1.title)})
// .then(()=>{ return deletePost()})
// .catch((msg)=>{console.log(msg)})
            
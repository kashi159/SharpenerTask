const blogs =[];

//Do not touch these functions below at all
function create1stBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG1'});
            resolve();
        }, 3000)
    }) 
}

//Do not touch these functions below at all
function create2ndBlog() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            blogs.push({title: 'BLOG2'});
            resolve()
        }, 2000)
    }) 
}


function deleteBlog(){
   //complete this function such that it removes the last element from the blog Array and resolves the deleted blog in 1 second timeout
   //If no blog present , it breaks the promise with ERROR (reject) in 1 second timeout
   return new Promise((resolve, reject) => {
       setTimeout(()=> {
           
           if(blogs.length > 0){
              const popped= blogs.pop();
              resolve(popped)
           }else{
                reject("ERROR")
           }
       },1000)
   })
}

//Call the function in the right way so that we can get the desired output
create1stBlog()
.then(create2ndBlog)
.then(deleteBlog).then(blog => console.log(blog.title))
.then(deleteBlog).then(blog => console.log(blog.title))
.then(deleteBlog)
.catch(err => console.log(err))

//Another Method

// create1stBlog()
// .then( ()=>{return create2ndBlog()})
// .then( ()=>{return deleteBlog().then(blog2 => console.log(blog2.title)) })
// .then( ()=>{return deleteBlog().then(blog1 => console.log(blog1.title)) })
// .then( ()=>{return deleteBlog()})
// .catch(err => console.log(err))
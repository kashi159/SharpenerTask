// const array = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];

// console.log(array.map(item =>{
//     if(item === ' '){
//         item = 'empty string'
//     }
//     return item
// }))

// const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

// const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}



// console.log(obj1)

// console.log(obj2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// const { key1, key3} = { ...obj1}



// console.log(key1, key3)

// const arr1 = ['value1', 'value2']

// const [ val1, val2 ] = arr1



// console.log(val1)

// console.log(val2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// let { key1, key3} = obj1



// key1 = 20;

// key3 = 123

// console.log(obj1.key1, obj1.key3)

// const a = ()=>{
//    return new Promise((resolve, reject)=>{
//     resolve((console.log('a')))
// })}

// const b = () =>{
//     return new Promise((resolve, reject)=>{
//     resolve((console.log('b')))
// })}


// function c(){
//    return new Promise((resolve, reject)=>{
//     setTimeout(() =>{
//          resolve(console.log('c'))
//         },3000)
//     })
// }

// function d(){
//     return new Promise((resolve, reject)=>{
//     setTimeOut(() =>{
//          resolve(console.log('d'))
//         },0)
//     })
// }

// function e(){
//     console.log('e')  
// }

// a().then(b).then(c).then(d).then(e)

// const printA = () => {
//     return new Promise((resolve, reject) => {
//       console.log('a');
//       resolve();
//     });
//   };
  
//   const printB = () => {
//     return new Promise((resolve, reject) => {
//       console.log('b');
//       resolve();
//     });
//   };
  
//   const printC = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('c');
//         resolve();
//       }, 3000);
//     });
//   };
  
//   const printD = () => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log('d');
//         resolve();
//       }, 0);
//     });
//   };
  
//   const printE = () => {
//     return new Promise((resolve, reject) => {
//       console.log('e');
//       resolve();
//     });
//   };
  
//   printA()
//     .then(printB)
//     .then(printC)
//     .then(printD)
//     .then(printE)
//     .catch((error) => {
//       console.error(error);
//     });
  
const printA = () => {
    return new Promise((resolve, reject) => {
      console.log('a');
      resolve();
    });
  };
  
  const printB = () => {
    return new Promise((resolve, reject) => {
      console.log('b');
      resolve();
    });
  };
  
  const printC = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('c');
        resolve();
      }, 3000);
    });
  };
  
  const printD = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('d');
        resolve();
      }, 0);
    });
  };
  
  const printE = () => {
    return new Promise((resolve, reject) => {
      console.log('e');
      resolve();
    });
  };
  
  const printSequence = async () => {
    try {
      await printA();
      await printB();
      await printC();
      await printD();
      await printE();
    } catch (error) {
      console.error(error);
    }
  };
  
  printSequence();
  
//TRAVERSING THE DOM//
var itemList= document.querySelector('#items');

//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor='#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


// childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor='orange';

// //First Child
// console.log(itemList.firstChild);

// // firstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.innerText="Hello 1";


// //Last Child
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.innerText="Hello 4";


// // NEXT SIBLINGS
// console.log(itemList.nextSibling);

// //nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color='green';

// Create Element

// Create new Div
var newDiv = document.createElement('div');

//Adding Class
newDiv.className= 'hello';

//Add id
newDiv.id= 'hello1'

// Add Attribute
newDiv.setAttribute('title','Hello Div');

//Create text node
var newDivText= document.createTextNode('HEllo Word');

//Add text to Div
newDiv.appendChild(newDivText);

//Inserting in DOM
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

// console.log(newDiv);
// newDiv.style.fontSize='30px'

container.insertBefore(newDiv, h1);
// Add Hello Word before lister
// var newDiv = document.createElement('div');
// newDiv.className='HEllo';
// newDiv.id='HEllo';
// newDiv.setAttribute('title','HEllo Word');
// var newDivText=document.createTextNode('HEllo Word');
// newDiv.appendChild(newDivText);
// var container = document.querySelector('.class .container');
// var h2= document.querySelector('.class h2');
// console.log(newDiv);
// container.insertBefore(newDiv, h2)
// console.log(itemList)
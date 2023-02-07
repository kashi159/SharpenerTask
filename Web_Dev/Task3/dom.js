// console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// document.title = 123;
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10]) 
// console.log(document.forms)
// console.log(document.links)
// var headerTitle= document.getElementById("header-title");
// var header=document.getElementById("main-header");
// console.log(headerTitle)
// headerTitle.textContent="Hello";
// headerTitle.innerText="GoodBye";
// headerTitle.innerHTML="<h3>Hello</h3>";
// header.style.borderBottom='solid 3px #000';
var items= document.getElementsByClassName('list-group-item');
items[0].textContent="Hello 2";
items[0].style.fontWeight='bold';
items[0].style.backgroundColor='green';
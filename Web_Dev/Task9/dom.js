var form= document.getElementById('addForm');
var itemList=document.getElementById('items');
var filter= document.getElementById('filter');

// Form Submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);


// Add Item
function addItem(e) {
    e.preventDefault();
// Get Input Value
var newItem= document.getElementById('item').value;
var description= document.getElementById('description').value;
// Create new li element
var li= document.createElement('li');
//Add Class
li.className='list-group-item';
// Add text node with input value
li.appendChild(document.createTextNode(newItem));
li.appendChild(document.createTextNode(" " + description));


//Create delete button
 var deleteBtn = document.createElement('button');
//  //Add classes to delete btn
 deleteBtn.className='btn btn-danger btn-sm float-right delete';
 // Append text node
 deleteBtn.appendChild(document.createTextNode('X'));
 // Append delete btn to li
 li.appendChild(deleteBtn);

// Create Edit button
var editBtn= document.createElement('button')
editBtn.className='btn btn-sm float-right editBtn';
editBtn.appendChild(document.createTextNode('Edit'));
li.appendChild(editBtn);
itemList.appendChild(li);

}

//Remove Item
function removeItem(e){
   if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
        var li= e.target.parentElement;
        itemList.removeChild(li);
    }
   }
}

//Filter Items
function filterItems(e){
    // convert text to lower case
    var text= e.target.value.toLowerCase();
    //Get list
    var items= itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(item){
        var itemName=item.firstChild.textContent;
        var description= item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text)!= -1 || description.toLowerCase().indexOf(text)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    })
}
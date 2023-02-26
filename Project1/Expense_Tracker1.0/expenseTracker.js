const myForm = document.getElementById('my-form');
const amount = document.getElementById('expense-amount');
const description = document.getElementById('description');
const category = document.getElementById('category');
const expense = document.getElementById('collection');
const msg = document.querySelector('.msg');

// listen on submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();
    if(amount.value === '' || description.value === '') {
        // alert('Please enter all fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
    
        // Remove error after 3 seconds
        setTimeout(() => msg.remove(), 3000);
    }else{
         const li = document.createElement('li');
         const textNode= `${amount.value}-  ${description.value}-  ${category.value}`
         li.appendChild(document.createTextNode(textNode));
         expense.appendChild(li);

         // Save user input in local storage //
         var usereExpense = {
         amount : amount.value,
         description : description.value,
         category : category.value
         };
         let userStringified= JSON.stringify(usereExpense);
         localStorage.setItem(description.value, userStringified);

         //Adding delete button//
         var deleteBtn = document.createElement('button');

         //  //Add classes to delete btn
         deleteBtn.className='btn btn-danger btn-sm float-right delete';
         // Append text node
         deleteBtn.appendChild(document.createTextNode('DELETE'));
         // Append delete btn to li
         li.appendChild(deleteBtn);
         expense.appendChild(li);

         // Add Edit Button//
         var editBtn= document.createElement('button');
         editBtn.className='btn btn-edit btn-sm float-right edit';
         editBtn.appendChild(document.createTextNode('EDIT'));
         li.appendChild(editBtn);
         expense.appendChild(li);
 
         //clear fields
         amount.value = '';
         description.value = '';
        }
     //Remove item
     expense.addEventListener('click', removeItem);

     function removeItem(e){
        if(e.target.classList.contains('delete')){
         if(confirm('Are You Sure?')){
            var li= e.target.parentElement;
            expense.removeChild(li);
            localStorage.removeItem(usereExpense.description)
          } 
         }
        }
     //Edit item//
     expense.addEventListener('click', editItem);
  
     function editItem(e){
      if(e.target.classList.contains('edit')){
        var li=e.target.parentElement;
        expense.removeChild(li);
        localStorage.removeItem(usereExpense.description)
        amount.value=usereExpense.amount;
        description.value=usereExpense.description;
      }
    }
   
}
console.log(myForm)
console.log(amount)
// console.log(description)
// console.log(category)
// console.log(expense)
// console.log(msg)

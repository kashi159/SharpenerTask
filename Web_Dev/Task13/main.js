const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');



// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();
  
  if(nameInput.value === '' || emailInput.value === '') {
    // alert('Please enter all fields');
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    // Create new list item with user
    const li = document.createElement('li');

    // Add text node with input values
    const textNode= `${nameInput.value}: ${emailInput.value}`
    li.appendChild(document.createTextNode(textNode));

    // Save user input in local storage //
    var user = {
        name : nameInput.value,
        email : emailInput.value
    };
    let userStringified= JSON.stringify(user);
    localStorage.setItem(emailInput.value, userStringified);

    //Adding delete button//
    var deleteBtn = document.createElement('button');

    //  //Add classes to delete btn
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     // Append text node
     deleteBtn.appendChild(document.createTextNode('DELETE'));
     // Append delete btn to li
     li.appendChild(deleteBtn);
     userList.appendChild(li);
    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
  //Remove item//
  userList.addEventListener('click', removeItem);

    function removeItem(e){
        if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li= e.target.parentElement;
            userList.removeChild(li);
            localStorage.removeItem(user.email)
        }
        }
    }
}



//  Savng user data on CURD CURD

const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

// when window is reloaded
window.addEventListener("DOMContentLoaded", ()=> {
  axios.get("https://crudcrud.com/api/19c3766cbff0478d98608e03cf5d21ef/appointmentData")
  .then((response) => {
      console.log(response)
    for(var i = 0; i< response.data.length; i++){
      // userList.innerHTML= JSON.stringify(response.data[i])
      showOnScreen(response.data[i])
    }
  })
  .catch((err) => {console.error(err)})
})

// Show User Detail on Screen
function showOnScreen(user){
    
  userList.innerHTML += `<li>name: ${user.name} email: ${user.email}</li><button class="btn btn-danger btn-sm float-right delete">DELETE</button> <button class="btn btn-edit btn-sm float-right edit">EDIT</button> <br>` 

 
}


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

    // Save user input in server storage //
    var user = {
        name : nameInput.value,
        email : emailInput.value
    };
    // let userStringified= JSON.stringify(user);
    // localStorage.setItem(emailInput.value, userStringified);
    // Making a network Call

    axios.post('https://crudcrud.com/api/19c3766cbff0478d98608e03cf5d21ef/appointmentData',user)
    .then((response) => {
      console.log(response)
    }).catch((err) => {
      console.error(err)
    });


    //Adding delete button//
    var deleteBtn = document.createElement('button');

    //  //Add classes to delete btn
     deleteBtn.className='btn btn-danger btn-sm float-right delete';
     // Append text node
     deleteBtn.appendChild(document.createTextNode('DELETE'));
     // Append delete btn to li
     li.appendChild(deleteBtn);
     userList.appendChild(li);

     // Add Edit Button//
     var editBtn= document.createElement('button');
     editBtn.className='btn btn-edit btn-sm float-right edit';
     editBtn.appendChild(document.createTextNode('EDIT'));
     li.appendChild(editBtn);
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
   //Edit item//
    userList.addEventListener('click', editItem);

    function editItem(e){
      if(e.target.classList.contains('edit')){
        var li=e.target.parentElement;
        userList.removeChild(li);
        localStorage.removeItem(user.email)
        nameInput.value=user.name;
        emailInput.value=user.email;
      }
    }
    
   
}



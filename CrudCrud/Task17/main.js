  //  Savng user data on CURD CURD

  const myForm = document.querySelector('#my-form');
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');
  const msg = document.querySelector('.msg');
  const userList = document.querySelector('#users');

  // when window is reloaded
  window.addEventListener("DOMContentLoaded", ()=> {
    axios.get("https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData")
    .then((response) => {
        console.log(response)
      for(var i = 0; i< response.data.length; i++){
        // userList.innerHTML= JSON.stringify(response.data[i])
        showOnScreen(response.data[i])
      }
    })
    .catch((err) => {console.error(err)})
  })

  function remove(userId) {
    axios.delete(`https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData/${userId}`)
    .then(response => {
      userList.remove(userId)
    })
    .catch(err => console.log(err))
  }

  // function editUserDetails(userId){
  //   axios.get(`https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData/${userId}`)
  //   .then((response)=> console.log(response))
  //   .catch(err => console.log(err))

  // }
  // Show User Detail on Screen
  function showOnScreen(user){
      // let _id = user._id
      const childHTML = `<li id=${user._id}> name: ${user.name}<br> email: ${user.email}
          <button onclick=remove('${user._id}')>DELETE</button>
          <button onclick=editUserDetails('${user._id}','${user.name}','${user.email})>EDIT
          </li>`
    userList.innerHTML =userList.innerHTML + childHTML
    
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

      axios.post('https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData',user)
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



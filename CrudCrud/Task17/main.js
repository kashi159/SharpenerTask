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
      response.data.forEach(user => showOnScreen(user))
    })
    .catch((err) => {console.error(err)})
})

function remove(userId) {
  axios.delete(`https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData/${userId}`)
    .then(() => {
      const userLi = document.querySelector(`#${userId}`)
      if (userLi) {
        userList.removeChild(userLi)
      }
    })
    .catch(err => console.log(err))
}

function editUserDetails(userId) {
  axios.get(`https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData/${userId}`)
    .then((response)=> {
      const user = response.data;
      nameInput.value = user.name;
      emailInput.value = user.email;
    })
    .catch(err => console.log(err))
}

// Show User Detail on Screen
function showOnScreen(user){
  const childHTML = `
    <li id=${user._id}>
      name: ${user.name}<br>
      email: ${user.email}
      <button onclick="remove('${user._id}')">DELETE</button>
      <button onclick="editUserDetails('${user._id}')">EDIT</button>
    </li>
  `
  userList.innerHTML += childHTML
}

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === '') {
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';

    // Remove error after 3 seconds
    setTimeout(() => msg.remove(), 3000);
  } else {
    const user = {
      name : nameInput.value,
      email : emailInput.value
    };

    axios.post('https://crudcrud.com/api/a377e15694c6483495e34f6a9228c240/appointmentData', user)
      .then((response) => {
        console.log(response.data)
        showOnScreen(response.data)
      })
      .catch((err) => {
        console.error(err)
      });

    // Clear fields
    nameInput.value = '';
    emailInput.value = '';
  }
}

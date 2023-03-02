const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

let editUserId = null;

// when window is reloaded
window.addEventListener("DOMContentLoaded", ()=> {
  axios.get("http://localhost:4000/")
    .then((response) => {
      console.log(response)
      response.data.forEach(user => showOnScreen(user))
    })
    .catch((err) => {console.error(err)})
})

function remove(userId) {
  axios.post(`http://localhost:4000/delete/${userId}`)
    .then(() => {
      // const userLi = document.querySelector(`#${userId}`)
      if (userId) {
        userList.remove(userId)
      }
      showOnScreen()
    })
    .catch(err => console.log(err))
}

// function editUserDetails(userId) {
//   axios.get(`https://crudcrud.com/api/3d1ab59567db465ea23fa3d597402f4e/appointmentData/${userId}`)
//     .then((response)=> {
//       const user = response.data;
//       nameInput.value = user.name;
//       emailInput.value = user.email;
//       editUserId = user._id;
//       myForm.removeEventListener('submit', onSubmit);
//       myForm.addEventListener('submit', onEdit);
//     })
//     .catch(err => console.log(err))
// }

// Show User Detail on Screen
function showOnScreen(user){
  const childHTML = `
    <li id=${user.id}>
      Name: ${user.name}<br>
      Email: ${user.email}
      <button onclick="remove('${user.id}')">DELETE</button>
      <button onclick="editUserDetails('${user.id}')">EDIT</button>
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

    axios.post('http://localhost:4000/user', user)
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

// function onEdit(e) {
//   e.preventDefault();

//   if(nameInput.value === '' || emailInput.value === '') {
//     msg.classList.add('error');
//     msg.innerHTML = 'Please enter all fields';

//     // Remove error after 3 seconds
//     setTimeout(() => msg.remove(), 3000);
//   } else {
//     const user = {
//       name : nameInput.value,
//       email : emailInput.value
//     };

//     axios.put(`https://crudcrud.com/api/3d1ab59567db465ea23fa3d597402f4e/appointmentData/${editUserId}`, user)
//       .then((response) => {
//         console.log(response)
//         myForm.addEventListener('submit', onSubmit);
//         myForm.removeEventListener('submit', onEdit);
//         })
//         .catch((err) => {console.error(err)})
//         myForm.addEventListener('submit', onSubmit);
//         myForm.removeEventListener('submit', onEdit);
//       }
// }
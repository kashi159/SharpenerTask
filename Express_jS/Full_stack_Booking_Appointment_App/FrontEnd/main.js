const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

let editUserId = null;

// when window is reloaded
window.addEventListener("DOMContentLoaded", async()=> {
  try{
    const response = await axios.get("http://localhost:4000/")
      // console.log(response)
    response.data.forEach(user => showOnScreen(user))
  } catch (err){
    console.error(err)
  }
})

async function remove(userId) {
  try{
   await axios.delete(`http://localhost:4000/delete/${userId}`)
      // const userLi = document.querySelector(`#${userId}`)
      if (userId) {
        userList.remove(userId)
      }
  } catch (err) {
    console.log(err)
  }
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
      <button onclick="remove('${user.id}')">DELETE</button></form>
      <button onclick="editUserDetails('${user.id}')">EDIT</button>
    </li>
  `
  userList.innerHTML += childHTML
}

// Listen for form submit
myForm.addEventListener('submit', onSubmit);

async function onSubmit(e) {
  e.preventDefault();
  try{

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
  
      const response = await axios.post('http://localhost:4000/user', user)
          // console.log(response)
          showOnScreen(response.data)
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  } catch (err) {
    console.error(err)
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
const myForm = document.getElementById('my-form');
const amount = document.getElementById('expense-amount');
const dish = document.getElementById('dish');
const table = document.getElementById('table');
const tables = document.getElementsByClassName('expense-list')
const table1 = document.getElementById('collection1');
const table2 = document.getElementById('collection2');
const table3 = document.getElementById('collection3');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit)

window.addEventListener("DOMContentLoaded", ()=> {
    axios.get('https://crudcrud.com/api/a4ad6238366944c29f802780f50f5750/orders')
      .then((response) => {
        // console.log(response)
        response.data.forEach(order => {
            showOnScreen(order)
            // console.log(order.table)
        })
      })
      .catch((err) => {
        msg.innerHTML=err;
        setTimeout(() => msg.remove(), 3000);
      })
  })

function onSubmit(e){
    if(amount.value === '' || dish.value === '') {
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';
        setTimeout(() => msg.remove(), 3000);
    }else{
        const order = {
            table: table.value,
            amount : amount.value,
            dish : dish.value
          };
      
        axios.post('https://crudcrud.com/api/a4ad6238366944c29f802780f50f5750/orders', order)
        .then((response) => {
            // console.log(response.data)
            showOnScreen(response.data)
          })
    }
    // clear fields
    amount.value='';
    dish.value='';
    e.preventDefault();
}

function showOnScreen(order){
    // console.log(order)
    const childHTML = `
      <li id=${order._id}>
        Amount: ${order.amount}<br>
        Dish: ${order.dish}
        <button onclick="remove('${order._id}')">DELETE</button>
        <hr>
      </li>
    `
        // console.log(order.table)
        if(table.value && order.table === table.value){
            table1.innerHTML += childHTML;
        }else if(order.table  === 'table1'){
            table1.innerHTML += childHTML;
        }else if(order.table === 'table2'){
            table2.innerHTML +=childHTML;
        }else{
            table3.innerHTML += childHTML;
        }
       
  }

  function remove(orderId) {
    axios
      .delete(`https://crudcrud.com/api/a4ad6238366944c29f802780f50f5750/orders/${orderId}`)
      .then(() => {
        const orderLi = document.getElementById(orderId);
        if (orderLi) {
          orderLi.remove();
        }
      })
      .catch((err) => console.log(err));
  }

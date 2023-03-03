const myForm = document.getElementById('my-form');
const amount = document.getElementById('expense-amount');
const dish = document.getElementById('dish');
const table = document.getElementById('table');
const tables = document.getElementsByClassName('expense-list')
const table1 = document.getElementById('collection1');
const table2 = document.getElementById('collection2');
const table3 = document.getElementById('collection3');
const msg = document.querySelector('.msg');

myForm.addEventListener('submit', onSubmit);

window.addEventListener("DOMContentLoaded", async () => {
  try {
    const response = await axios.get('https://crudcrud.com/api/9952c51675fd4da2986351bb22b1e647/orders');
    response.data.forEach(order => {
      showOnScreen(order);
    });
  } catch (err) {
    console.error(err);
  }
});

async function onSubmit(e) {
  e.preventDefault();
  try {
    if (amount.value === '' || dish.value === '') {
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
      setTimeout(() => msg.remove(), 3000);
    } else {
      const order = {
        table: table.value,
        amount: amount.value,
        dish: dish.value
      };

      const response = await axios.post('https://crudcrud.com/api/9952c51675fd4da2986351bb22b1e647/orders', order);
      showOnScreen(response.data);
    }

    // clear fields
    amount.value = '';
    dish.value = '';
  } catch (err) {
    console.error(err);
  }
}

function showOnScreen(order) {
  const childHTML = `
    <li id=${order._id}>
      Amount: ${order.amount}<br>
      Dish: ${order.dish}
      <button onclick="remove('${order._id}')">DELETE</button>
      <hr>
    </li>
  `;

  if (table.value && order.table === table.value) {
    table1.innerHTML += childHTML;
  } else if (order.table === 'table1') {
    table1.innerHTML += childHTML;
  } else if (order.table === 'table2') {
    table2.innerHTML += childHTML;
  } else {
    table3.innerHTML += childHTML;
  }
}

async function remove(orderId) {
  try {
    await axios.delete(`https://crudcrud.com/api/9952c51675fd4da2986351bb22b1e647/orders/${orderId}`);
    const orderLi = document.getElementById(orderId);
    if (orderLi) {
      orderLi.remove();
    }
  } catch (err) {
    console.log(err);
  }
}

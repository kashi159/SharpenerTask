const myForm = document.querySelector('.login-form');
const msg = document.querySelector('.msg')
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

myForm.addEventListener('submit', onSubmit);

async function onSubmit(e){
    e.preventDefault();
    try{
            const user = {
                email: emailInput.value,
                password: passwordInput.value
            }
            const response = await axios.post('http://localhost:4000/user/login', user)
            console.log(response)
            if(response.status === 200){
                alert('Login Success!!!')
                // window.location.href = "../Login/login.html"
            }else{
                throw new Error('Failed to login')
            }
        }catch(err) {
        // console.log(err)
        msg.classList.add('warning');
        msg.textContent = err.response.data.error;
        setTimeout(() => msg.remove(), 3000);
    } 
}

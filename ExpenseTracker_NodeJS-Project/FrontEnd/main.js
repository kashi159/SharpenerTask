const myForm = document.querySelector('.signup-form');
const msg = document.querySelector('.msg')
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const rePasswordInput = document.querySelector('#password2')

myForm.addEventListener('submit', onSubmit);

async function onSubmit(e){
    e.preventDefault();
    try{
        if(passwordInput.value !== rePasswordInput.value){
            msg.classList.add('error');
            msg.textContent = 'Please check your Password'
            setTimeout(() => msg.remove(), 3000);
        }else{
            const user = {
                name: nameInput.value,
                email: emailInput.value,
                password: passwordInput.value
            }
            const response = await axios.post('http://localhost:4000/user/signup', user)
        }
    } catch(err) {
        console.log(err);
    } 
}

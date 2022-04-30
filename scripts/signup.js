import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

const submit = document.querySelector('#submit');
submit.addEventListener('click', async ( event ) =>
{
    event.preventDefault();
    let form_data = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value,
        username: document.getElementById('username').value,
        mobile: document.getElementById('mobile').value,
        description: document.getElementById('description').value
    };
    form_data = JSON.stringify(form_data);
    console.log(form_data);
    let response = await fetch('https://masai-api-mocker.herokuapp.com/auth/register', 
    {
        method: 'POST',
        body: form_data,
        // mode: 'no-cors'
        headers: 
        {
            'Content-Type':'application/json'
        }
    });

    response = await response.json();
    console.log(response);
});
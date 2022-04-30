import navbar from "../components/navbar.js";
document.getElementById('navbar').innerHTML = navbar();

const login = async ( event ) => 
{
    event.preventDefault();   
    let user_data = 
    {
        username: document.getElementById('username').value,
        password: document.getElementById('password').value
    };
    console.log(user_data);

    user_data = JSON.stringify(user_data);
    try
    {
        let response = await fetch('https://masai-api-mocker.herokuapp.com/auth/login',
        {
            method: 'POST',
            body: user_data,
            headers: 
            {
                'Content-Type': 'application/json'
            }
        });
        response = await response.json();
        console.log(response);

        let username = document.getElementById('username').value;
        getUserDetail(username, response.token);
    }
    catch(error)
    {
        console.log(error);
    }
    
};

document.getElementById('submit').addEventListener('click', login);
const getUserDetail = async (username, token) =>
{
    let response = await fetch(`https://masai-api-mocker.herokuapp.com/user/${username}`,
    {
        headers:
        {
            Authorization:`Bearer ${token}`
        }
    });

    response = await response.json();
    console.log(response);
}
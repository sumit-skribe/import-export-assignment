import navbar from "../components/navbar.js";
import { getData, append } from "./fetch.js";
document.getElementById('navbar').innerHTML = navbar();

const submit = document.querySelector('#search');

submit.addEventListener('click', async ( event ) =>
{
    let search = document.querySelector('#search-data').value;
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    let container = document.getElementById('container');

    getData(url).then(( response ) => 
    {
        console.log(response);
        append(response, container);
    });

});
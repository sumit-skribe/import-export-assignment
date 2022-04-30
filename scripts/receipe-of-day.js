import navbar from "../components/navbar.js";
import { getData, append } from "./fetch.js";
document.getElementById('navbar').innerHTML = navbar();

let url = 'https://fakestoreapi.com/products/category/electronics';
let container = document.getElementById('products');

getData(url).then(( response ) => 
{
    append(response, container);
});

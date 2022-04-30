const getData = async ( url ) =>
{
    try
    {
        let response = await fetch(url);
        let {meals} = await response.json();
        return meals;
    }
    catch(error)
    {
        console.log('error:', error);
    }
};

const append = ( data,container ) => 
{
    if(data)
    {
        container.innerHTML = null;
        data.forEach( ( {strMeal, strInstructions} ) =>
        {

            let div = document.createElement('div');
            let p = document.createElement('p');
            p.innerText = strMeal;
            let p_ = document.createElement('p');
            p_.innerText = strInstructions;

            div.append(p, p_);
            container.append(div);
        });
    }
};

export {getData, append};
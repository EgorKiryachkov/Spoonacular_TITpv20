
document.addEventListener("DOMContentLoaded", function(){
    console.log('onload');
    let url = "https://api.spoonacular.com/recipes/random/?apiKey=ec8d2789aa434327aa7eea602b550db8"
 
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(data => {

        let recipe = data.recipes[0];
        let title = recipe.title;
        let imageUrl = recipe.image;
        let ingredients = recipe.extendedIngredients;
        let summary = recipe.summary;
        let instructions = recipe.instructions;

        document.querySelector(".main").innerHTML = `
        <h1>${title}</h1>
        <img src="${imageUrl}"/>
        `;

        document.querySelector('.summary').innerHTML = `<p>${summary}</p>`;
        document.querySelector('.instructions').innerHTML = `
        <h2>instructions</h2>
        ${instructions}
        `;

        let output = '';

        ingredients.forEach(ingredient => {
           output += `<li>${ingredient.name}: ${ingredient.amount} ${ingredient.unit} </li>`
        });

        document.querySelector('.list').innerHTML = output;

    });


});
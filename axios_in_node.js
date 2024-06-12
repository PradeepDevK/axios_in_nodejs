const axios = require('axios');

async function getRandomRecipe() {
    try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');

        const randomRecipe = response.data.meals[0];

        console.log("Random Recipe: ");
        console.log("Name:", randomRecipe.strMeal);
        console.log("Category:", randomRecipe.strCategory);
        console.log("Instructions:", randomRecipe.strInstructions);
        console.log("Ingredients:");
        for (let i = 0; i < 20; i++) {
            const ingredient = randomRecipe['strIngredient' + i];
            const measure = randomRecipe['strMeasure' + i];
            if (ingredient && measure) {
                console.log(`${measure} ${ingredient}`);
            }
        }
    } catch (error) {
        console.error(error);
    }
}

getRandomRecipe();
const loadUserFetch = async () => {
    try {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=a`;
        const res = await fetch(url);
        const data = await res.json();
        displayMealsCard(data.meals);
    }
    catch(error) {
        console.log(error)
    }
}


const displayMealsCard = meals => {
    const mealsContainer = document.getElementById('meals-container');
    meals.forEach(meal => {
        // console.log(meal)
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = 
        `
            <div onclick="loadIdFetch(${meal.idMeal})" class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 120)}</p>
                </div>
            </div>
        `
        mealsContainer.appendChild(mealDiv);
    })

}









loadUserFetch();
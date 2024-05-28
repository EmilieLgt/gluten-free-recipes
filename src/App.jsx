/* eslint-disable react/jsx-key */
import { useState } from "react";
import Title from "./components/Title";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
  // store recipes
  const [allRecipes, setAllRecipes] = useState();

  // fetching api data for all gluten recipes
  const getRecipe = async () => {
    let url =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=6f68faa9&app_key=4b488ecf195a74775ba2963c41b8718d&health=gluten-free&random=true";

    // adding condition for selected meal, change the API url by adding the meal(s) selected, joined by "&mealType="
    if (selectedMeals.length > 0) {
      url += `&mealType=${selectedMeals.join("&mealType=")}`;
    }
    // adding condition for selected diet, change the API url by adding the diet(s) selected, joined by "&mealType="
    if (selectedDiets.length > 0) {
      url += `&health=${selectedDiets.join("&health=")}`;
    }

    if (selectedDishes.length > 0) {
      url += `&dishType=${selectedDishes.join("&dishType=")}`;
    }

    const result = await fetch(url);
    const datas = await result.json();
    setAllRecipes(datas);
    setChoicesMade(true);
  };

  // using states to update recipes according to user choices (meals, diets ...)

  const [selectedMeals, setSelectedMeals] = useState([]);

  const [selectedDiets, setSelectedDiets] = useState([]);

  const [selectedDishes, setSelectedDishes] = useState([]);


  // using state to put a conditon on the display of message error

  const [choicesMade, setChoicesMade] = useState(false);

  

  
  return (
    <>
      <Title />
      <section className="research-section">
        <h2>What are you looking for ?</h2>
        <div className="filters-section">
        <div className="meal-diet-section">
          <div className="meal-section-research">
            <h3>Meal </h3>
            <div className="choices-list-research">
            <label>
              {/* every input value represents what will be written in the api request when it's selected. if something is slected, it will be added to the selectedMeals array. 
          If something is unselected, selectedMeals will be filtered and become an array without the unselected meals */}
              <input
                type="checkbox"
                value="breakfast"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMeals([...selectedMeals, e.target.value]);
                  } else {
                    setSelectedMeals(
                      selectedMeals.filter((meal) => meal !== e.target.value)
                    );
                  }
                }}
              />
              Breakfast
            </label>
            <label>
              <input
                type="checkbox"
                value="lunch"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMeals([...selectedMeals, e.target.value]);
                  } else {
                    setSelectedMeals(
                      selectedMeals.filter((meal) => meal !== e.target.value)
                    );
                  }
                }}
              />
              Lunch
            </label>
            <label>
              <input
                type="checkbox"
                value="snack"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMeals([...selectedMeals, e.target.value]);
                  } else {
                    setSelectedMeals(
                      selectedMeals.filter((meal) => meal !== e.target.value)
                    );
                  }
                }}
              />
              Snack
            </label>
            <label>
              <input
                type="checkbox"
                value="dinner"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedMeals([...selectedMeals, e.target.value]);
                  } else {
                    setSelectedMeals(
                      selectedMeals.filter((meal) => meal !== e.target.value)
                    );
                  }
                }}
              />
              Dinner
            </label>
            </div>
          </div>
          <div className="diet-section-research">
            <h3>Diet</h3>
            <div className="choices-list-research">
            <label>
              <input
                type="checkbox"
                value="vegan"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDiets([...selectedDiets, e.target.value]);
                  } else {
                    setSelectedDiets(
                      selectedDiets.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Vegan
            </label>
            <label>
              <input
                type="checkbox"
                value="vegetarian"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDiets([...selectedDiets, e.target.value]);
                  } else {
                    setSelectedDiets(
                      selectedDiets.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Vegetarian
            </label>
            <label>
              <input
                type="checkbox"
                value="fodmap-free"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDiets([...selectedDiets, e.target.value]);
                  } else {
                    setSelectedDiets(
                      selectedDiets.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Fodmap
            </label>
            </div>
          </div>
          </div>

          <div className="dish-section-research">
            <h3>Type of Dish</h3>
            <div className="choices-list-research" id="choices-dish">
            <label>
              <input
                type="checkbox"
                value="Biscuits%20and%20cookies"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Biscuits
            </label>
            <label>
              <input
                type="checkbox"
                value="bread"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Bread
            </label>
    
            <label>
              <input
                type="checkbox"
                value="Condiments%20and%20sauces"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Condiments or sauces
            </label>
            <label>
              <input
                type="checkbox"
                value="desserts"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Desserts
            </label>
            <label>
              <input
                type="checkbox"
                value="drinks"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Drinks
            </label>
            <label>
              <input
                type="checkbox"
                value="main%20course"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Main Course
            </label>
            <label>
              <input
                type="checkbox"
                value="salads"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Salads
            </label>
            <label>
              <input
                type="checkbox"
                value="Preps"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Preps
            </label>
            <label>
              <input
                type="checkbox"
                value="sandwiches"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Sandwiches
            </label>
      
            <label>
              <input
                type="checkbox"
                value="soup"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Soup
            </label>
            <label>
              <input
                type="checkbox"
                value="starter"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Starter
            </label>
            <label>
              <input
                type="checkbox"
                value="sweets"
                onChange={(e) => {
                  if (e.target.checked) {
                    setSelectedDishes([...selectedDishes, e.target.value]);
                  } else {
                    setSelectedDishes(
                      selectedDishes.filter((diet) => diet !== e.target.value)
                    );
                  }
                }}
              />
              Sweets
            </label>
            </div>
         
          </div>
         
        
        </div>
        <button className="research-button" onClick={getRecipe}>
            Search Recipes
          </button>
      </section>
      <section className="recipes-section">
        {allRecipes && allRecipes.hits && allRecipes.hits.length > 0 ? (
          allRecipes.hits.map((recipe) => (
            <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
          ))
        ) : choicesMade ? (
          <div>No results 😟 Try some other filters ! </div>
        ) : (
          <h3>Select some filters to get recipes </h3>
        )}
      </section>
    </>
  );
}

export default App;

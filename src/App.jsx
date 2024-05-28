/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import Title from "./components/Title";
import Recipe from "./components/Recipe";
import "./App.css";

function App() {
  // store recipes
  const [allRecipes, setAllRecipes] = useState();

  // fetching api data for all gluten recipes
  const getRecipe = async () => {
    let url =
      "https://api.edamam.com/api/recipes/v2?type=public&app_id=6f68faa9&app_key=4b488ecf195a74775ba2963c41b8718d&health=gluten-free&random=true&q=eggs";

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

    if (selectedIngredients.length > 0) {
      url += `&q=${selectedIngredients.join("&q=")}`;
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

  // using state to deal with the value added by the user to research by ingredients

  const [inputValue, setInputValue] = useState("");
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddIngredient = () => {
      setSelectedIngredients([...selectedIngredients, inputValue]); // add the value of input to the list
      setInputValue(""); // set input to orginal state 
      console.log(`ingredients après add function : ${selectedIngredients}`)
    }
  ;

  const handleRemoveIngredient = () => {
    setSelectedIngredients([]);
    console.log(`ingredients après clear function  : ${selectedIngredients}`)
  };

  useEffect(() => {
    console.log("Ingredients après modification :", selectedIngredients);
  }, [selectedIngredients]);
  return (
    <>
      <Title />
      <section className="research-section">
        <h2 >What are you looking for ?</h2>
        <p>Pick at least one filter to start your research</p>
        <div className="filters-section">
          <div className="meal-diet-section">
            <div className="meal-section-research">
              <h3 >Meal </h3>
             <div className="choices-list-research">
                <label>
                  {/* every input value represents what will be written in the api request when it's selected. if something is selected, it will be added to the selectedMeals array. 
          If something is unselected, selectedMeals will be filtered and become an array without the unselected meals */}
                  <input
                    type="checkbox"
                    value="breakfast"
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedMeals([...selectedMeals, e.target.value]);
                      } else {
                        setSelectedMeals(
                          selectedMeals.filter(
                            (meal) => meal !== e.target.value
                          )
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
                          selectedMeals.filter(
                            (meal) => meal !== e.target.value
                          )
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
                          selectedMeals.filter(
                            (meal) => meal !== e.target.value
                          )
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
                          selectedMeals.filter(
                            (meal) => meal !== e.target.value
                          )
                        );
                      }
                    }}
                  />
                  Dinner
                </label>
              </div>
            </div>
            <div className="diet-section-research">
               <h3 >Diet</h3>
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
                          selectedDiets.filter(
                            (diet) => diet !== e.target.value
                          )
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
                          selectedDiets.filter(
                            (diet) => diet !== e.target.value
                          )
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
                          selectedDiets.filter(
                            (diet) => diet !== e.target.value
                          )
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
            <div className="ingredients-section-research">
              <h3>Ingredient </h3>
 
              <div className="ingredients-choice">
              <p>You will get recipes with at least one of the ingredients</p>
                <input
                  type="text"
                  className="input-research"
                  value={inputValue}
                  onChange={handleInputChange}
                />

                <button className="add-button" onClick={handleAddIngredient}>
                  Add
                </button>
              </div>
              <ul className="list-ingredients-filter">
                {selectedIngredients.map((ingredient, index) => (
                  <li className="ingredient-filter" key={index}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              {selectedIngredients.length > 0 && (
                <button
                  className="clear-button"
                  onClick={handleRemoveIngredient}
                >
                  
                  ❌ Clear
                </button>
              )}
            </div>
          </div>
          <button className="research-button" onClick={getRecipe}>
            Search Recipes
          </button>
        </div>
      </section>
      <section className="recipes-section">
        {allRecipes && allRecipes.hits && allRecipes.hits.length > 0 ? (
          allRecipes.hits.map((recipe) => (
            <Recipe key={recipe.recipe.uri} recipe={recipe.recipe} />
          ))
        ) : choicesMade ? (
          <div>No results 😟 Try with other filters ! </div>
        ) : (
          <h3> Select some filters to get recipes </h3>
        )}
      </section>
    </>
  );
}

export default App;

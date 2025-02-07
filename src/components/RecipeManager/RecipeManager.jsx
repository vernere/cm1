import React, { useState } from 'react';
import './RecipeManager.css';

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: [],
  })

  // Handle input change for name and instructions
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewRecipe({ ...newRecipe, [name]: value });
  }

  // Handle input change for ingredients
  function handleIngredientChange(event) {
    setNewRecipe({ ...newRecipe, ingredients: event.target.value.split(',').map(ingredient => ingredient.trim()) });
  }

  // Add a new recipe to the list
  function addRecipe() {
    if (newRecipe.name.trim() !== "" && newRecipe.ingredients.length > 0 && newRecipe.instructions.trim() !== "") {
      setRecipes([...recipes, { ...newRecipe } ]);
      setNewRecipe({ name: "", ingredients: [], instructions: [] });
    }
  }

  // Delete a recipe from the list
  function deleteRecipe(index) {
    const updatedRecipes = recipes.filter((_, i) => i !== index);
    setRecipes(updatedRecipes);
  }

  return (
    <div className="recipe-manager">
      <h1>Recipe Manager</h1>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Enter recipe name..."
          value={newRecipe.name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="ingredients"
          placeholder="Enter ingredients (comma-separated)..."
          value={newRecipe.ingredients.join(',')}
          onChange={handleIngredientChange}
        />
        <textarea
          name="instructions"
          placeholder="Enter instructions..."
          value={newRecipe.instructions}
          onChange={handleInputChange}
          rows="4"
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <li key={index}>
            Name: {recipe.name} Ingredients: {recipe.ingredients} Instructions: {recipe.instructions}
            <button onClick={() => deleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  )
}

export default RecipeManager;
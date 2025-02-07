import React from 'react'

function RecipeManager() {
  const [recipes, setRecipes] = useState([]);
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  // Handle input change for name
  function handleNameChange(event) {
    setName(event.target.value);
  }

  // Handle input change for ingredients
  function handleIngredientsChange(event) {
    setIngredients(event.target.value);
  }

  // Handle input change for instructions
  function handleInstructionsChange(event) {
    setInstructions(event.target.value);
  }

  // Add a new recipe to the list
  function addRecipe() {
    if (name.trim() !== "" && ingredients.trim() !== "") {
      setRecipes((r) => [...r, { name, ingredients, instructions }]);
      setName("");
      setIngredients(""); // Clear the input fields
      setInstructions("");
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
          placeholder="Enter recipe name..."
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="text"
          placeholder="Enter ingredients..."
          value={ingredients}
          onChange={handleIngredientsChange}
        />
        <input
          type="text"
          placeholder="Enter instructions..."
          value={instructions}
          onChange={handleInstructionsChange}
        />
        <button onClick={addRecipe}>Add Recipe</button>
      </div>
      <ol>
        {recipes.map((recipe, index) => (
          <li key={index}>
            {recipe.name}: {recipe.ingredients}: {recipe.instructions}
            <button onClick={() => deleteRecipe(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeManager;
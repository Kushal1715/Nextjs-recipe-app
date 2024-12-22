async function fetchRecipeDetail(recipeId) {
  try {
    const response = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
    const data = await response.json();
    return data;

  } catch (e) {
    throw new Error(e)
  }
}
export default async function RecipeDetails(props) {
  const resipeId = await props.params.recipe_details;
  const recipeDetail = await fetchRecipeDetail(resipeId);
  return <div>
    <h1>Recipe Name: {recipeDetail.name}</h1>

  </div>
}
import RecipeList from "@/components/recipeList";

async function getRecipes() {
  try {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data?.recipes;

  } catch (e) {
    throw new Errow(e);
  }
}

export default async function RecipeListPage() {
  const recipeList = await getRecipes();
  return <div>
    <RecipeList recipeList={recipeList} />
  </div>
}
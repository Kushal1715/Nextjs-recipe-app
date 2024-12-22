import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link"

export default function RecipeList({ recipeList }) {
  return <div>
    <h1 className="font-bold text-3xl">Recipes</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {
        recipeList && recipeList.length > 0 ?
          recipeList.map((recipe, index) =>
            <Link key={index} href={`/recipe-list/${recipe.id}`}>
              <Card>
                <CardContent className="bg-white overflow-hidden shadow-lg rounded-lg">
                  <div className="w-full ">
                    <img src={recipe.image} className="h-full w-full object-cover" />
                  </div>

                </CardContent>
              </Card>
            </Link>
          )
          : null

      }
    </div>
  </div >
}
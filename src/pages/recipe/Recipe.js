import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../../hooks/useFetch"
import { useTheme } from "../../hooks/useTheme"
import "./Recipe.css"


export default function Recipe() {
  const {id} = useParams()
  const url ="http://localhost:3000/recipes/"+ id
  const { data:recipe, isPending,error} = useFetch(url)
  const {mode}= useTheme()

  return (
    <div className={`recipe ${mode}`}>
       { isPending && <div className="loading">Loading...</div>}
       {error?<div className="error">{error}</div>:""}
        {recipe &&(
          <div >
            <h2 className="page-title">{recipe.title}</h2>
            <p>Takes {recipe.cookingTime} to cook</p>
            <ul>
              {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
            </ul>
            <p className="method">{recipe.method}</p>
          </div>
        )}
    </div>
  )
}

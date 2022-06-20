import "./Home.css"
import { useFetch } from "../../hooks/useFetch"
import { useState } from "react"
import RecipeList from "../../componets/RecipeList"


export default function Home() {
const [url] =useState('http://localhost:3000/recipes')
const { data, isPending,error} = useFetch(url)

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
    </div>
  )
}

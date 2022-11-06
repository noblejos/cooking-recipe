import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useTheme } from "../../hooks/useTheme"
import { projectFirestore } from '../../firebase/config'
import "./Recipe.css"


export default function Recipe() {
  const {id} = useParams()
  const {mode}= useTheme()

  const [recipe, setRecipe] = useState(null)
  const [isPending, setIspending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(()=>{
    setIspending(true)
    const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
     if (doc.exists){
      setIspending(false)
      setRecipe(doc.data())
     }else{
      setIspending(false)
      setError('could not find recipe')
     }
    }) 
    return ()=> unsub()

  },[id])

  const handleClick=()=>{
    projectFirestore.collection('recipes').doc(id).update({
      title:'something completly diffrent'
    })
  }

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
            <button onClick={handleClick}>Update  me</button>
          </div>
        )}
    </div>
  )
}

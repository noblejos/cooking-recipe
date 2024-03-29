import "./Home.css"
import { projectFirestore } from '../../firebase/config'

import RecipeList from "../../componets/RecipeList"
import { useEffect, useState } from "react"


export default function Home() {
  const [data, setData] = useState(null)
  const [isPending, setIspending] = useState(false)
  const [error, setError] = useState(null)

useEffect(()=>{
  setIspending(true)
  const unsub  = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{
    if(snapshot.empty){
      setError('No recipies to load')
      setIspending(false)
    }else{
      let result = []
      snapshot.docs.forEach(doc=>{
        result.push({ id: doc.id, ...doc.data()})
      })
      setData(result)
      setIspending(false)
    }
  },(err)=>{
    setError(err.message)
    setIspending(false)
  })

  return ()=>  unsub()

},[])

  return (
    <div className="home">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {data && <RecipeList recipes={data} />}
    </div>
  )
}

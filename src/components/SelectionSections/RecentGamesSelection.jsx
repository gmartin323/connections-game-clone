import React from 'react'
import { getDocs, query, orderBy, limit } from "firebase/firestore"
import { gamesCollectionRef } from '../../../firebase'

import GameSelectCarousel from './GameSelectCarousel'


export default function RecentGamesSelection() {

  const [recentGames, setRecentGames] = React.useState([])

  async function getRecentGames() {
    const q = query(gamesCollectionRef, orderBy("createdAt", "desc"), limit(10))
    const snapshot = await getDocs(q)
    const recentGamesData = snapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id
    }))
    
    setRecentGames(recentGamesData)
  }  

  console.log("recent games", recentGames)

  React.useEffect(()=>{
    getRecentGames()
  }, []) 


  return (
    <>
      <GameSelectCarousel gameArray={recentGames} />
    </>
  )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../../firebase'
import { doc } from 'firebase/firestore'

export default function PlayPage() {
  const [currentGame, setCurrentGame] = React.useState(null)
  const { id, title } = useParams()

  console.log(id)
  console.log(title)
  console.log(currentGame)


  // use promise object correctly to setCurrentGame state
  async function getData(id) {
    const data = await getGame(id)
    return data
  }

  React.useEffect(()=> {
    setCurrentGame(getData(id))
  }, [])

  return (
    <div className='page-container'>
      <section>
        <h1>Game Title</h1>
      </section>
      <section>
        <h3>Game play section</h3>
      </section>
    </div>

  )
}
import React from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../../firebase'
import { doc } from 'firebase/firestore'

import getAnswersArray from '../util/getAnswersArray'
import WordGrid from '../components/WordGrid'
import GuessButton from '../components/GuessButton'
import CorrectSetsSection from '../components/CorrectSetsSection'

export default function PlayPage() {

  const [currentGame, setCurrentGame] = React.useState(null)
  const [answersArray, setAnswersArray] = React.useState()

  const [selected, setSelected] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [guesses, setGuesses] = React.useState([])

  console.log(selected)

  const { id, title } = useParams()
  
  async function getData(id) {
    const data = await getGame(id)
    setCurrentGame(data)
  }

  React.useEffect(()=> {
    getData(id)
  }, [])

  React.useEffect(() => {
    if (currentGame) {
    setAnswersArray(getAnswersArray(currentGame))
  }
  }, [currentGame])

  return (
    <div className='page-container'>
      <section>
        <h1>Game Title</h1>
        <p>Create four groups of four!</p>
      </section>
      <section>
        {correct && 
          <CorrectSetsSection 
            correct={correct} 
            currentGame={currentGame} 
          />}
        {answersArray && 
          <WordGrid 
            answersArray={answersArray} 
            correct 
            setCorrect 
            selected={selected}
            setSelected={setSelected}
            guesses 
            setGuesses
          />}
      </section>
      <section>
        <GuessButton 
          selected={selected}
          setSelected={setSelected}
          guesses={guesses}
          setGuesses={setGuesses}
          correct={correct}
          setCorrect={setCorrect}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
        />
      </section>
    </div>

  )
}
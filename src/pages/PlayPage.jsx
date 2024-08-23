import React from 'react'
import { useParams } from 'react-router-dom'
import { getGame } from '../../firebase'
import { doc } from 'firebase/firestore'

import getAnswersArray from '../util/getAnswersArray'
import CorrectSetsSection from '../components/CorrectSetsSection'
import WordGrid from '../components/WordGrid'
import ShuffleButton from '../components/ShuffleButton'
import DeselectAllButton from '../components/DeselectAllButton'
import GuessButton from '../components/GuessButton'

export default function PlayPage() {
  
  const GUESSES_ALLOWED = 4

  const [currentGame, setCurrentGame] = React.useState(null)
  const [answersArray, setAnswersArray] = React.useState()
  
  const [selected, setSelected] = React.useState([])
  const [correct, setCorrect] = React.useState([])
  const [guesses, setGuesses] = React.useState(GUESSES_ALLOWED)
  const [buttonVisible, setButtonVisible] = React.useState(true)

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
    <div className='page-container play-page'>
      <section className='play-page-header-section'>
        <h1>{title}</h1>
        <p>Create four groups of four!</p>
      </section>
      <section className='game-play-section'>
        {correct.length > 0 && 
          <CorrectSetsSection 
            correct={correct} 
            currentGame={currentGame} 
          />}
        {answersArray && correct.length !== 4 &&
          <WordGrid 
            answersArray={answersArray} 
            correct={correct}
            selected={selected}
            setSelected={setSelected}
          />}
      </section>
      <section className='play-page-mistakes-section'>
        <p>Mistakes remaining: </p>
        <span>{guesses}</span>
      </section>
      <section className='play-page-btn-section'>
        <ShuffleButton 
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
          buttonVisible={buttonVisible}
        />
        <DeselectAllButton 
          selected={selected}
          setSelected={setSelected}
          buttonVisible={buttonVisible}
        />
        <GuessButton 
          selected={selected}
          setSelected={setSelected}
          guesses={guesses}
          setGuesses={setGuesses}
          correct={correct}
          setCorrect={setCorrect}
          answersArray={answersArray}
          setAnswersArray={setAnswersArray}
          buttonVisible={buttonVisible}
          setButtonVisible={setButtonVisible}
        />
      </section>
    </div>

  )
}
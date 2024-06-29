import React from "react"
import SetInputCard from "../components/SetInputCard"

import { addDoc } from "firebase/firestore/lite";
import { gamesCollectionRef } from "../../firebase";

export default function GameCreationPage() {

  const [sets, setSets] = React.useState({
    
  })

  const [AnswerSet1, setAnswerSet1] = React.useState({})
  const [AnswerSet2, setAnswerSet2] = React.useState({})
  const [AnswerSet3, setAnswerSet3] = React.useState({})
  const [AnswerSet4, setAnswerSet4] = React.useState({})

  console.log("set1", AnswerSet1)
  // console.log("set2", AnswerSet2)
  // console.log("set3", AnswerSet3)
  // console.log("set4", AnswerSet4)
  
  
  const [newGame, setNewGame] = React.useState(
    {
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now(),
      sets: {
        'set1': {
          title: 'titleString',
          answer1: '1',
          answer2: '1',
          answer3: '1',
          answer4: '1',
        },
        'set2': {
          title: 'titleString',
          answer1: '1',
          answer2: '1',
          answer3: '1',
          answer4: '1',
        },
        'set3': {
          title: 'titleString',
          answer1: '1',
          answer2: '1',
          answer3: '1',
          answer4: '1',
        },
        'set4': {
          title: 'titleString',
          answer1: '1',
          answer2: '1',
          answer3: '1',
          answer4: '1',
        },
      }
    }
  )
  
  // console.log(newGame)

  React.useEffect(()=>{

  }, [sets])

  function handleChange(event){
    setNewGame({...newGame, [event.target.name]: event.target.value})
  }

  async function createGame(event){
    event.preventDefault()
    // modify user inputted tags to array with no whitespace before or after strings
    const tagsArray = newGame.Tags.split(',').map((tag)=>{return tag.trim()})
    const newGameData = {...newGame, Tags: tagsArray}
    const addedGame = await addDoc(gamesCollectionRef, newGameData)
    console.log("id", `${addedGame.id} submitted succesfully`)
    setNewGame({
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now()
    })
  }

  return (
    <div className="input-section">
      <form method="POST" onSubmit={createGame}>
        <div className="sets-input-section">
          <SetInputCard set={AnswerSet1} setSet={setAnswerSet1}/>
          {/* <SetInputCard set={AnswerSet2} setSet={setAnswerSet2}/> */}
          {/* <SetInputCard set={AnswerSet3} setSet={setAnswerSet3}/> */}
          {/* <SetInputCard set={AnswerSet4} setSet={setAnswerSet4}/> */}
        </div>
        <div className="info-input-section">
          {/* info: title, author, difficulty, tags */}
          <input 
            type="text" 
            name="Title" 
            placeholder="title"
            value={newGame.Title}
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <input 
            type="text" 
            name="Author" 
            placeholder="author"
            value={newGame.Author}
            onChange={handleChange}
            autoComplete="off" 
            required
          />
          <input 
            type="range" 
            min="0" 
            max="5" 
            name="Difficulty"
            value={newGame.Difficulty}
            onChange={handleChange}
            required
          />
          <input 
            type="text" 
            name="Tags" 
            placeholder="tags"
            value={newGame.Tags}
            onChange={handleChange} 
            autoComplete="off" 
          />
        </div>
        <section className="confirm-section">
          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  )
}
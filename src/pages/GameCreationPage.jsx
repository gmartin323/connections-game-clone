import React from "react"
import SetInputCard from "../components/SetInputCard"

import { addDoc } from "firebase/firestore/lite";
import { gamesCollectionRef } from "../../firebase";

export default function GameCreationPage() {

  const [AnswerSet1, setAnswerSet1] = React.useState({})
  const [AnswerSet2, setAnswerSet2] = React.useState({})
  const [AnswerSet3, setAnswerSet3] = React.useState({})
  const [AnswerSet4, setAnswerSet4] = React.useState({})

  // console.log("set1", AnswerSet1)
  // console.log("set2", AnswerSet2)
  // console.log("set3", AnswerSet3)
  // console.log("set4", AnswerSet4)
  
  
  const [newGame, setNewGame] = React.useState(
    {
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now()
    }
  )
  
  console.log(newGame)

  function handleChange(event){
    setNewGame({...newGame, [event.target.name]: event.target.value})
  }

  // not getting set title when setting newGame object
  
  async function createGame(event){
    event.preventDefault()
    const addedGame = await addDoc(gamesCollectionRef, newGame)
    console.log("id", `${addedGame.id} submitted succesfully`)
    setNewGame({
      Title: '',
      Author: '',
      Difficulty: 0,
      Tags: [''],
      createdAt: Date.now()
    })
  }

  /* /* async function createGame(){
    setNewGame({
      sets: 
        [AnswerSet1.title]: [
          AnswerSet1.answer1, 
          AnswerSet1.answer2, 
          AnswerSet1.answer3, 
          AnswerSet1.answer4
          ]
        ,
        AnswerSet2.title = [
          AnswerSet2.answer1, 
          AnswerSet2.answer2, 
          AnswerSet2.answer3, 
          AnswerSet2.answer4
        ],
        AnswerSet3.title = [
          AnswerSet3.answer1, 
          AnswerSet3.answer2, 
          AnswerSet3.answer3, 
          AnswerSet3.answer4
        ],
        AnswerSet4.title = [
          AnswerSet4.answer1, 
          AnswerSet4.answer2, 
          AnswerSet4.answer3, 
          AnswerSet4.answer4
        ]
      ]
    })
    console.log(newGame)
  } */

  return (
    <div className="input-section">
      <form method="POST" onSubmit={createGame}>
        {/* <div className="sets-input-section">
          <SetInputCard set={AnswerSet1} setSet={setAnswerSet1}/>
          <SetInputCard set={AnswerSet2} setSet={setAnswerSet2}/>
          <SetInputCard set={AnswerSet3} setSet={setAnswerSet3}/>
          <SetInputCard set={AnswerSet4} setSet={setAnswerSet4}/>
        </div> */}
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
            defaultValue={0}
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
            required
          />
        </div>
        <section className="confirm-section">

          <button type="submit">Submit</button>
        </section>
      </form>
    </div>
  )
}
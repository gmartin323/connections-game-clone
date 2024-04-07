import React from "react"
import SetInputCard from "../components/SetInputCard"

export default function GameCreationPage() {

  const [AnswerSet1, setAnswerSet1] = React.useState({})
  const [AnswerSet2, setAnswerSet2] = React.useState({})
  const [AnswerSet3, setAnswerSet3] = React.useState({})
  const [AnswerSet4, setAnswerSet4] = React.useState({})

  console.log("set1", AnswerSet1)
  console.log("set2", AnswerSet2)
  console.log("set3", AnswerSet3)
  console.log("set4", AnswerSet4)


  return (
    <div>
      <form className="input-section">
        <div className="sets-input-section">
          <SetInputCard set={AnswerSet1} setSet={setAnswerSet1}/>
          <SetInputCard set={AnswerSet2} setSet={setAnswerSet2}/>
          <SetInputCard set={AnswerSet3} setSet={setAnswerSet3}/>
          <SetInputCard set={AnswerSet4} setSet={setAnswerSet4}/>
        </div>
        <div className="info-input-section">
          {/* info: title, author, difficulty, tags */}
          <p>title</p>
          <p>author</p>
          <p>difficulty</p>
          <p>tags</p>
        </div>
      </form>
      <section className="confirm-section">
        <button type="submit">Submit</button>
      </section>
    </div>
  )
}
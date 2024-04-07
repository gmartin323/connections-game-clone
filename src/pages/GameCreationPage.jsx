import React from "react"
import SetInputCard from "../components/SetInputCard"

export default function GameCreationPage() {

  const [set1, setSet1] = React.useState([])
  const [set2, setSet2] = React.useState([])
  const [set3, setSet3] = React.useState([])
  const [set4, setSet4] = React.useState([])

  console.log("set1", set1)
  console.log("set2", set1)
  console.log("set3", set1)
  console.log("set4", set1)


  return (
    <div>
      <form className="input-section">
        <div className="sets-input-section">
          <SetInputCard set={set1} setSet={setSet1}/>
          <SetInputCard set={set2} setSet={setSet2}/>
          <SetInputCard set={set3} setSet={setSet3}/>
          <SetInputCard set={set4} setSet={setSet4}/>
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
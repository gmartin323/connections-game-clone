import React from "react"
import SetInputCard from "../components/SetInputCard"

export default function GameCreationPage() {

  const [sets, setSets] = React.useState([])


  return (
    <div>
      <form className="input-section">
        <div className="sets-input-section">
          <SetInputCard sets setSets/>
          <SetInputCard sets setSets/>
          <SetInputCard sets setSets/>
          <SetInputCard sets setSets/>
        </div>
        <div className="info-input-section">
          {/* info: title, author, difficulty, tags */}
          Game Info
        </div>
      </form>
      <section className="confirm-section">
        <button type="submit">Submit</button>
      </section>
    </div>
  )
}
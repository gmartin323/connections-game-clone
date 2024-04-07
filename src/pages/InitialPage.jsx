import React from "react"

import { Link } from 'react-router-dom'

export default function InitialPage() {
  return (
    <>
      <header className="header">
        <h1>Connections</h1>
      </header>
      <section className="section-container">
        <Link to="/create" className="create-btn">
          Create
        </Link>
      </section>
      <section className="section-container">
        {/* Link to each game board after mapping over array */}
      </section>
    </>
  )
}
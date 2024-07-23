import React from "react"
import { Link } from 'react-router-dom'
import RecentGamesSelection from "../components/SelectionSections/RecentGamesSelection"
import TopRatedGamesSelection from "../components/SelectionSections/TopRatedGameSelection"

export default function InitialPage() {
  return (
    <>
      <header className="header">
        <h1>Connections</h1>
      </header>
      <section className="section-container">
        <h2>Recently Created Games</h2>
        <RecentGamesSelection />
      </section>
      <section className="section-container">
        {/* Link to each game board after mapping over array */}
        <h2>Top Rated Games</h2>
        <TopRatedGamesSelection />
      </section>
      <section className="section-container">
        <Link to="/create" className="create-btn">
          Create
        </Link>
      </section>
    </>
  )
}
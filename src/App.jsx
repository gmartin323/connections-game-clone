import React, { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

const InitialPage = lazy(()=> import ('./pages/InitialPage'))
const GamesListPage = lazy(()=> import ('./pages/GamesListPage'))
const GameCreationPage = lazy(()=> import ('./pages/GameCreationPage'))
const PlayPage = lazy(()=> import ('./pages/PlayPage'))

import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

export default function Start() {
  return (
    <HashRouter>
      <Suspense fallback={<div className='page-container'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<InitialPage />}/>
            <Route path='/games' element={<GamesListPage />}/>
            <Route path='/create' element={<GameCreationPage />}/>
            <Route path='/play/:title/:id' element={<PlayPage />}/>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}


import React, { lazy, Suspense } from 'react'
import { HashRouter, Routes, Route } from "react-router-dom"

const InitialPage = lazy(()=> import ('./pages/InitialPage'))
const GameCreationPage = lazy(()=> import ('./pages/GameCreationPage'))
const GamePage = lazy(()=> import ('./pages/GamePage'))

import Layout from './components/Layout'
import LoadingSpinner from './components/LoadingSpinner'

export default function Start() {
  return (
    <HashRouter>
      <Suspense fallback={<div className='page-container'><LoadingSpinner /></div>}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<InitialPage />}/>
            <Route path='/create' element={<GameCreationPage />}/>
            <Route path='/:name/:id' element={<GamePage />}/>
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  )
}


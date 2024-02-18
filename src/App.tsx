import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import SignIn from './pages/SignIn'

function App() {
  return (
    <Routes>
      <Route path='/' element={<SignIn />} />
    </Routes>
  )
}

export default App

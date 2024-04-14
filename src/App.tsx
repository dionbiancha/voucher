import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Header } from './components/Layout'
import { Home, SignIn } from './pages'
import { useDataUser } from './context/userContext'
import { useCustomNavigate } from './context/navigationContext'
import { Box } from '@mui/material'

function App() {
  const { userData } = useDataUser()
  const { goToLogin } = useCustomNavigate()

  useEffect(() => {
    if (!userData.uid) {
      goToLogin()
    }
  }, [location.pathname, userData])

  return (
    <>
      <Box sx={{ marginBottom: '100px' }}>
        <Header />
      </Box>
      <Routes>
        <Route path='/' element={userData ? <Home /> : <Navigate to='/login' />} />
        <Route path='/login' element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App

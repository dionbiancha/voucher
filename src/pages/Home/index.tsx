import { Container } from '@mui/material'
import { useDataUser } from '../../context/userContext'
import { useEffect } from 'react'

function Home() {
  const { userData } = useDataUser()

  return <Container>home</Container>
}

export default Home
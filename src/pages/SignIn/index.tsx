import { Box, Button, Container, Flex, Heading, Link, Text } from '@radix-ui/themes'
import { FaGoogle } from 'react-icons/fa'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'

function SignIn() {
  const [user, setUser] = useState<User>({} as User)

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user)
      })
      .catch((error) => {})
  }

  return (
    <Container>
      <Flex style={{ height: '90vh' }} direction='column' align='center' justify='center'>
        <Heading as='h1' mb='2' size='6'>
          Welcome to Voucher
        </Heading>
        <Text>Crie vouchers de maneira rapida e simples</Text>
        <Button
          onClick={handleGoogleSignIn}
          style={{ width: '300px' }}
          mt='5'
          color='tomato'
          radius='large'
          size='2'
        >
          <FaGoogle width='16' height='16' /> Google
        </Button>
        <Text mt='5' size='1'>
          By registration you agree to <Link>Terms of Use</Link> and{' '}
          <Link>Privacy Policy</Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default SignIn

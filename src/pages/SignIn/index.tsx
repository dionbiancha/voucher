import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Link,
  Text,
  TextField
} from '@radix-ui/themes'
import { FaGoogle, FaFacebookF } from 'react-icons/fa'

import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  FacebookAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'

function SignIn() {
  const [user, setUser] = useState<User>({} as User)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  function handleGoogleSignIn() {
    const provider = new GoogleAuthProvider()
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user)
      })
      .catch((error) => {})
  }

  function handleFacebookSignIn() {
    const provider = new FacebookAuthProvider()
    signInWithPopup(auth, provider)
      .then((res) => {
        console.log(res.user)
      })
      .catch((error) => {})
  }

  function handleEmailAndPasswordSignIn() {
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user)
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
          style={{ width: '300px', cursor: 'pointer' }}
          mt='5'
          color='tomato'
          radius='large'
          size='2'
        >
          <FaGoogle width='16' height='16' /> Google
        </Button>

        <Button
          onClick={handleFacebookSignIn}
          style={{ width: '300px', cursor: 'pointer' }}
          mt='2'
          color='blue'
          radius='large'
          size='2'
        >
          <FaFacebookF width='16' height='16' /> Facebook
        </Button>
        <Text mt='3'>or</Text>
        <Flex direction='column' gap='3' mt='3' style={{ width: 300 }}>
          <TextField.Input
            onChange={(e) => setEmail(e.target.value)}
            variant='surface'
            placeholder='Enter your email'
          />
          <TextField.Input
            onChange={(e) => setPassword(e.target.value)}
            variant='surface'
            placeholder='Enter your password'
            type='password'
          />
          <Button
            onClick={handleEmailAndPasswordSignIn}
            style={{ width: '300px', cursor: 'pointer', backgroundColor: '#000' }}
            mt='5'
            radius='large'
            size='3'
          >
            Create Account
          </Button>
        </Flex>

        <Text mt='5' size='1'>
          By registration you agree to <Link>Terms of Use</Link> and{' '}
          <Link>Privacy Policy</Link>
        </Text>
      </Flex>
    </Container>
  )
}

export default SignIn

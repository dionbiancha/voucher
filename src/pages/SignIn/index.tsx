import {
  GoogleAuthProvider,
  signInWithPopup,
  User,
  FacebookAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth'
import { auth } from '../../services/firebase'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField
} from '@mui/material'
import { FaFacebookF } from 'react-icons/fa'
import GoogleIcon from '/assets/icons/google-icon.png'
import { useSnack } from '../../components/Snack'
import { LoadingButton } from '@mui/lab'
import { MdVisibilityOff, MdVisibility } from 'react-icons/md'
import { useDataUser } from '../../context/userContext'

type Inputs = {
  email: string
  password: string
}

function SignIn() {
  const { setUserData } = useDataUser()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const snack = useSnack()
  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setIsLoading(true)
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((res) => {
        setUserData(res.user)
      })
      .catch((error) => {
        setIsLoading(false)
        snack.connectionFail()
      })
  }

  function handleGoogleSignIn() {
    if (isLoading) return
    const provider = new GoogleAuthProvider()
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((res) => {
        setUserData(res.user)
      })
      .catch((error) => {})
  }

  function handleFacebookSignIn() {
    if (isLoading) return
    const provider = new FacebookAuthProvider()

    signInWithPopup(auth, provider)
      .then((res) => {
        setUserData(res.user)
      })
      .catch((error) => {})
  }

  return (
    <Container>
      <Stack
        sx={{ height: '90vh' }}
        direction='column'
        justifyContent='center'
        alignItems='center'
      >
        <h1>Sign up for Voucher</h1>

        <Button
          variant='outlined'
          onClick={handleGoogleSignIn}
          sx={{
            ...styleSocialButton,
            color: '#000'
          }}
        >
          <img width='15px' src={GoogleIcon} alt='logo google' />
          <span>Continue with Google</span>
          <Box />
        </Button>

        <Button
          variant='contained'
          onClick={handleFacebookSignIn}
          sx={{ ...styleSocialButton }}
        >
          <FaFacebookF />
          <span>Continue with Facebook</span>
          <Box />
        </Button>
        <p style={{ marginBottom: '25px' }}>or</p>

        <form onSubmit={handleSubmit(onSubmit)} style={{ ...styleForm }}>
          <TextField
            error={errors.email ? true : false}
            fullWidth
            helperText={errors.email && 'Campo inválido'}
            disabled={isLoading}
            {...register('email', {
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Email inválido'
              },
              maxLength: 32,
              minLength: 6
            })}
            variant='outlined'
            placeholder='Enter your email'
            sx={{ marginBottom: '20px' }}
          />

          <TextField
            error={errors.password ? true : false}
            helperText={errors.password && 'Campo inválido'}
            fullWidth
            disabled={isLoading}
            {...register('password', {
              required: true,
              maxLength: 32,
              minLength: 6
            })}
            variant='outlined'
            placeholder='Enter your password'
            type={showPassword ? 'text' : 'password'}
            sx={{ marginBottom: '20px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton onClick={handleClickShowPassword} edge='end'>
                    {showPassword ? <MdVisibility /> : <MdVisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />

          <LoadingButton
            fullWidth
            loading={isLoading}
            variant='contained'
            disabled={isLoading}
            type='submit'
            sx={{
              textTransform: 'none',
              backgroundColor: '#000',
              height: '50px'
            }}
          >
            Create Account
          </LoadingButton>
        </form>

        <p style={{ fontSize: '15px' }}>
          By registration you agree to <Link href='#'>Terms of Use</Link> and{' '}
          <Link href='#'>Privacy Policy</Link>
        </p>
      </Stack>
    </Container>
  )
}

const styleForm = {
  maxWidth: '400px',
  width: '100%',
  marginBottom: '20px'
}

const styleSocialButton = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  maxWidth: '400px',
  width: '100%',
  height: '50px',
  cursor: 'pointer',
  marginBottom: '15px',
  textTransform: 'none'
}

export default SignIn

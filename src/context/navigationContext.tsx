import { useNavigate } from 'react-router-dom'

export function useCustomNavigate() {
  const navigate = useNavigate()

  function goBack() {
    navigate(-1)
  }

  function goToLogin() {
    navigate('/login')
  }

  return {
    goBack,
    goToLogin
  }
}

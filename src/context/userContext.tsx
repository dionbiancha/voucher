import { User } from 'firebase/auth'
import React, { createContext, useState, ReactNode, useContext } from 'react'

interface UserContextProps {
  userData: User
  setUserData: React.Dispatch<React.SetStateAction<User>>
  clearUserData: () => void
}

export const UserContext = createContext<UserContextProps | undefined>(undefined)

interface UserProviderProps {
  children: ReactNode
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<User>({} as User)

  function clearUserData() {
    setUserData({} as User)
  }

  return (
    <UserContext.Provider
      value={{
        clearUserData,
        setUserData,
        userData
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useDataUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider')
  }

  return context
}

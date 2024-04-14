import React, { createContext, useContext, useState, ReactNode } from 'react'

export enum SelectType {
  'hotel' = 1,
  'transfer',
  'tour',
  'ticket'
}

interface DataContextProps {
  selectType: SelectType | null
  setSelectType: React.Dispatch<React.SetStateAction<SelectType | null>>
}

const DataContext = createContext<DataContextProps | undefined>(undefined)

interface DataProviderProps {
  children: ReactNode
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [selectType, setSelectType] = useState<SelectType | null>(null)

  return (
    <DataContext.Provider
      value={{
        setSelectType,
        selectType
      }}
    >
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)

  if (!context) {
    throw new Error('usePreview must be used within a PreviewProvider')
  }

  return context
}

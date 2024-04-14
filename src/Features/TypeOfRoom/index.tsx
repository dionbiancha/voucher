import React, { useEffect, useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'
import { SelectType, useData } from '../../context/dataContext'

function TypeOfRoom() {
  const [value, setValue] = useState('')

  return (
    <ContentInput>
      <TextField
        fullWidth
        label='Tipo de quarto'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ContentInput>
  )
}

export default TypeOfRoom

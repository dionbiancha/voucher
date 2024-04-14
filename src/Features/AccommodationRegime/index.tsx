import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'

function AccommodationRegime() {
  const [value, setValue] = useState('')
  return (
    <ContentInput>
      <TextField
        fullWidth
        label='Regime da hospedagem'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ContentInput>
  )
}

export default AccommodationRegime

import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'

function Hotel() {
  const [value, setValue] = useState('')
  return (
    <ContentInput>
      <TextField
        fullWidth
        label='Hotel'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ContentInput>
  )
}

export default Hotel

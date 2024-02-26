import React, { useState } from 'react'
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import { IoIosAdd } from 'react-icons/io'

const SelectLogo: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [list, setList] = useState<File[]>([])

  const handleChange = (event: SelectChangeEvent<string>) => {
    const fileName = event.target.value as string
    const file = list.find((item) => item.name === fileName) || null
    setSelectedFile(file)
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0]

    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setList([...list, file])
      }
      reader.readAsDataURL(file)
      setSelectedFile(file)
    }
  }

  return (
    <Box>
      <FormControl fullWidth>
        <InputLabel>Selecionar Logo</InputLabel>
        <Select
          title={'Clique e selecione uma logo'}
          value={selectedFile?.name ?? ''}
          label='Selecionar Logo'
          onChange={handleChange}
          startAdornment={
            <Button
              variant='contained'
              sx={{
                fontSize: '10px',
                padding: '1px',
                textTransform: 'none',
                marginRight: '10px'
              }}
            >
              <label htmlFor='select-logo' style={{ cursor: 'pointer' }}>
                Adicionar
                <input
                  id='select-logo'
                  type='file'
                  accept='image/*'
                  style={{ display: 'none' }}
                  onChange={handleImageUpload}
                />
              </label>
            </Button>
          }
        >
          {list.map((item, index) => (
            <MenuItem key={index} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectLogo

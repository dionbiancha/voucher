import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent
} from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'

interface Props {
  idVoucher?: number
}

const SelectPartnerLogo = ({ idVoucher }: Props) => {
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
    <ContentInput>
      <FormControl fullWidth>
        <InputLabel>Selecionar logo do parceiro</InputLabel>
        <Select
          title={'Clique e selecione uma logo'}
          value={selectedFile?.name ?? ''}
          label='Selecionar logo do parceiro'
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
              <label htmlFor='select-logo-partner' style={{ cursor: 'pointer' }}>
                Adicionar
                <input
                  id='select-logo-partner'
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
    </ContentInput>
  )
}

export default SelectPartnerLogo

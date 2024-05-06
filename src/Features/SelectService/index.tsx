import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField
} from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'
import { SelectType, useData } from '../../context/dataContext'

interface Props {
  name: string
  id: SelectType
}

const items = [
  { name: 'Hotel', id: SelectType.hotel },
  { name: 'Transfer', id: SelectType.transfer },
  { name: 'Passeio', id: SelectType.tour },
  { name: 'Ticket', id: SelectType.ticket }
]

interface SelectServiceProps {
  idVoucher?: number
}

const SelectService = ({ idVoucher }: SelectServiceProps) => {
  const { setSelectType } = useData()
  const [selectItem, setSelectItem] = useState<Props | null>(null)

  const handleChange = (event: SelectChangeEvent<SelectType>) => {
    const fileName = event.target.value as SelectType
    const file = items.find((item) => item.id === fileName) || null
    setSelectItem(file)
    setSelectType(file?.id || null)
  }

  return (
    <ContentInput>
      <FormControl fullWidth>
        <InputLabel>Serviço</InputLabel>
        <Select
          title={'Clique e selecione um serviço'}
          label='Serviço'
          value={selectItem?.id}
          onChange={handleChange}
        >
          {items.map((item, index) => (
            <MenuItem key={index} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </ContentInput>
  )
}

export default SelectService

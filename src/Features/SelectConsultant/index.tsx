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

interface Item {
  id: number
  name: string
}

const SelectConsultant: React.FC = () => {
  const [items, setItems] = useState<Item[]>([])
  const [selectItem, setSelectItem] = useState<Item | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [newItemName, setNewItemName] = useState('')

  const handleModalOpen = () => {
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setNewItemName('')
  }

  const handleAddItem = () => {
    if (newItemName.trim() !== '') {
      const newItem: Item = {
        id: items.length + 1,
        name: newItemName.trim()
      }
      setItems([...items, newItem])
      setSelectItem(newItem)
      handleModalClose()
    }
  }

  const handleChange = (event: SelectChangeEvent<string>) => {
    const fileName = event.target.value as string
    const file = items.find((item) => item.name === fileName) || null
    setSelectItem(file)
  }

  return (
    <ContentInput>
      <FormControl fullWidth>
        <InputLabel>Consultor</InputLabel>
        <Select
          title={'Clique e selecione um consultor'}
          label='Consultor'
          value={selectItem?.name ?? ''}
          onChange={handleChange}
          startAdornment={
            <Button
              onClick={handleModalOpen}
              variant='contained'
              sx={{
                fontSize: '10px',
                padding: '1px',
                textTransform: 'none',
                marginRight: '10px'
              }}
            >
              Adicionar
            </Button>
          }
        >
          {items.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Modal open={modalOpen} onClose={handleModalClose}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '8px'
          }}
        >
          <TextField
            label='Novo item'
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            fullWidth
          />
          <Button
            variant='contained'
            onClick={handleAddItem}
            style={{ marginTop: '10px' }}
          >
            Adicionar
          </Button>
        </div>
      </Modal>
    </ContentInput>
  )
}

export default SelectConsultant

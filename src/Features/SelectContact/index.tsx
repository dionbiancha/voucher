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
  Stack,
  TextField
} from '@mui/material'
import Divider from '@mui/material/Divider'
import ContentInput from '../../components/Layout/ContentInput'
import OkCancelButton from '../../components/Buttons/OkCancelButton'

interface Item {
  id: number
  name: string
  agency: string
  emergency: string
}

interface Props {
  idVoucher?: number
}

const SelectContact = ({ idVoucher }: Props) => {
  const [items, setItems] = useState<Item[]>([])
  const [selectItem, setSelectItem] = useState<Item | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [newItemName, setNewItemName] = useState('')
  const [newItemAgency, setNewItemAgency] = useState('')
  const [newItemEmergency, setNewItemEmergency] = useState('')

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
        name: newItemName.trim(),
        agency: newItemAgency.trim(),
        emergency: newItemEmergency.trim()
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
        <InputLabel>Selecione um contato</InputLabel>
        <Select
          title={'Clique e selecione um contato'}
          label='Selecione um contato'
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
        <Stack
          spacing={3}
          alignItems={'center'}
          style={{
            width: '100%',
            maxWidth: '600px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            padding: '50px',
            borderRadius: '8px'
          }}
        >
          <h3>Criar contato</h3>
          <Divider flexItem />
          <TextField
            label='Nome do Operador'
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            fullWidth
          />
          <TextField
            label='Agência'
            value={newItemAgency}
            onChange={(e) => setNewItemAgency(e.target.value)}
            fullWidth
          />
          <TextField
            label='Telefone de Emergência'
            value={newItemEmergency}
            onChange={(e) => setNewItemEmergency(e.target.value)}
            fullWidth
          />
          <OkCancelButton
            cancelText='Cancelar'
            handleCancel={handleModalClose}
            handleOk={handleAddItem}
            okText='Adicionar'
            cancelTitle='Clique para fechar'
            okTitle='Clique para adicionar'
          />
        </Stack>
      </Modal>
    </ContentInput>
  )
}

export default SelectContact

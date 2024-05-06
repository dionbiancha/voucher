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
  qrCode: string
  address: string
  city: string
  state: string
  country: string
}

interface Props {
  idVoucher?: number
}

const SelectLocalization = ({ idVoucher }: Props) => {
  const [items, setItems] = useState<Item[]>([])
  const [selectItem, setSelectItem] = useState<Item | null>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [newItemName, setNewItemName] = useState('')
  const [newItemQrCode, setNewItemQrCode] = useState('')
  const [newItemAddress, setNewItemAddress] = useState('')
  const [newItemCity, setNewItemCity] = useState('')
  const [newItemState, setNewItemState] = useState('')
  const [newItemCountry, setNewItemCountry] = useState('')

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
        qrCode: newItemQrCode.trim(),
        address: newItemAddress.trim(),
        city: newItemCity.trim(),
        state: newItemState.trim(),
        country: newItemCountry.trim()
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
        <InputLabel>Selecione uma localização</InputLabel>
        <Select
          title={'Adicione uma localização'}
          label='Selecione uma localização'
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
            label='Nome'
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
            fullWidth
          />
          <TextField
            label='Link QR Code'
            value={newItemQrCode}
            onChange={(e) => setNewItemQrCode(e.target.value)}
            fullWidth
          />
          <TextField
            label='Endereço'
            value={newItemAddress}
            onChange={(e) => setNewItemAddress(e.target.value)}
            fullWidth
          />
          <TextField
            label='Cidade'
            value={newItemCity}
            onChange={(e) => setNewItemCity(e.target.value)}
            fullWidth
          />
          <TextField
            label='Estado'
            value={newItemState}
            onChange={(e) => setNewItemState(e.target.value)}
            fullWidth
          />
          <TextField
            label='País'
            value={newItemCountry}
            onChange={(e) => setNewItemCountry(e.target.value)}
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

export default SelectLocalization

import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import ContentInput from '../../components/Layout/ContentInput'
import { PhoneInput } from 'react-international-phone'
import 'react-international-phone/style.css'
import { PhoneNumber } from '../../components/Forms/PhoneNumber'

interface Props {
  idVoucher?: number
}

function PaxPhone({ idVoucher }: Props) {
  const [value, setValue] = useState('')
  return (
    <ContentInput>
      <PhoneNumber
        value={value}
        onChange={setValue}
        placeholder='Digite o telefone'
        label='Telefone do pax'
      />
    </ContentInput>
  )
}

export default PaxPhone

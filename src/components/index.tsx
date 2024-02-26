import React, { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'
import SelectLogo from '../Features/SelectLogo'

function HeaderVoucher() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottom: '1px dotted #0000003e',
        margin: '20px 20px 20px 20px',
        paddingBottom: '20px'
      }}
    >
      <Box
        sx={{
          width: '400px'
        }}
      >
        <SelectLogo />
      </Box>
      <TextField sx={{ width: '400px' }} label='Titulo' value='Voucher' />
    </Box>
  )
}

export default HeaderVoucher

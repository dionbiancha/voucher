import React, { ReactNode, useState } from 'react'
import { Box } from '@mui/material'
import { RiDraggable } from 'react-icons/ri'

interface Props {
  children: React.ReactNode
}

const ContentInput: React.FC<Props> = ({ children }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
      }}
    >
      {children}
      <RiDraggable color='#DDDDDD' style={{ width: '30px', height: '30px' }} />
    </Box>
  )
}

export default ContentInput

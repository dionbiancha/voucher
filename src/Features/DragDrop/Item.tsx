import { Box, TextField } from '@mui/material'
import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import SelectLogo from '../SelectLogo'
import SelectPartnerLogo from '../SelectPartnerLogo'
import SelectConsultant from '../SelectConsultant'
import SelectCompany from '../SelectCompany'

interface ItemProps {
  field: string
  index: number
}

const Item: React.FC<ItemProps> = ({ field, index }) => {
  return (
    <Draggable draggableId={field} index={index}>
      {(provided) => (
        <Box
          sx={{
            marginBottom: '20px'
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {field === '1' && <SelectPartnerLogo />}
          {field === '2' && <SelectConsultant />}
          {field === '3' && <SelectCompany />}
        </Box>
      )}
    </Draggable>
  )
}

export default Item

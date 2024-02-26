import React from 'react'
import Item from './Item'
import { Droppable } from 'react-beautiful-dnd'
import { Box } from '@mui/material'

interface DragDropProps {
  col: {
    id: string
    list: string[]
  }
}

const DragDrop: React.FC<DragDropProps> = ({ col: { list, id } }) => {
  return (
    <Droppable droppableId={id}>
      {(provided) => (
        <Box
          sx={{
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            maxWidth: id === 'left' ? '400px' : '800px'
          }}
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {list.map((field, index) => (
            <Item key={field} field={field} index={index} />
          ))}
          {provided.placeholder}
        </Box>
      )}
    </Droppable>
  )
}

export default DragDrop

import React, { useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import DragDrop from '../../Features/DragDrop'
import { Box } from '@mui/material'
import { initialColumns } from '../../Features/DragDrop/initialColumns'
import HeaderVoucher from '../../components'

function Home() {
  const [columns, setColumns] = useState(initialColumns)

  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return

    const start = columns[source.droppableId]
    const end = columns[destination.droppableId]

    if (start === end) {
      const newList = Array.from(start.list)
      newList.splice(source.index, 1)
      newList.splice(destination.index, 0, columns[source.droppableId].list[source.index])

      const newCol = {
        ...start,
        list: newList
      }

      setColumns((state) => ({ ...state, [newCol.id]: newCol }))
      return
    } else {
      const newStartList = Array.from(start.list)
      newStartList.splice(source.index, 1)
      const newEndList = Array.from(end.list)
      newEndList.splice(
        destination.index,
        0,
        columns[source.droppableId].list[source.index]
      )

      const newColumns = {
        ...columns,
        [start.id]: { ...start, list: newStartList },
        [end.id]: { ...end, list: newEndList }
      }

      setColumns(newColumns)
      return
    }
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HeaderVoucher />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {Object.values(columns).map((col) => (
          <DragDrop col={col} key={col.id} />
        ))}
      </Box>
    </DragDropContext>
  )
}

export default Home

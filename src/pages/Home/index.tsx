import React, { useEffect, useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import DragDrop from '../../Features/DragDrop'
import { Box, Button } from '@mui/material'
import HeaderVoucher from '../../components'
import { SelectType, useData } from '../../context/dataContext'

interface ColumnType {
  id: string
  list: string[]
}

const initialColumns: Record<string, ColumnType> = {
  left: {
    id: 'left',
    list: ['1']
  },
  center: {
    id: 'center',
    list: ['4', '5']
  }
}

function Home() {
  const { selectType } = useData()
  const [columns, setColumns] = useState(initialColumns)
  const [additionalAreas, setAdditionalAreas] = useState<Record<string, unknown>[]>([])

  useEffect(() => {
    if (selectType === SelectType.hotel) {
      setColumns((prevColumns) => ({
        ...prevColumns,
        left: {
          ...prevColumns.left,
          list: ['1', '11', '12', '6', '18', '2', '8']
        },
        center: {
          ...prevColumns.center,
          list: ['5', '15', '16', '17', '13', '14']
        }
      }))
    }
    if (selectType === SelectType.transfer) {
      setColumns((prevColumns) => ({
        ...prevColumns,
        left: {
          ...prevColumns.left,
          list: ['1', '11', '10', '20', '9', '19', '12', '7', '3', '2', '8']
        },
        center: {
          ...prevColumns.center,
          list: ['5', '13', '14']
        }
      }))
    }
    if (selectType === SelectType.tour) {
      setColumns((prevColumns) => ({
        ...prevColumns,
        left: {
          ...prevColumns.left,
          list: ['1', '11', '12', '6', '7', '3', '2', '8']
        },
        center: {
          ...prevColumns.center,
          list: ['5', '13', '14']
        }
      }))
    }
    if (selectType === SelectType.ticket) {
      setColumns((prevColumns) => ({
        ...prevColumns,
        left: {
          ...prevColumns.left,
          list: ['1', '11', '12', '6', '7', '3', '2', '8']
        },
        center: {
          ...prevColumns.center,
          list: ['5', '13', '14']
        }
      }))
    }
  }, [selectType])

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

  const addAdditionalArea = () => {
    setAdditionalAreas((prevAreas) => [...prevAreas, {}])
  }

  const removeAdditionalArea = (index: number) => {
    setAdditionalAreas((prevAreas) => prevAreas.filter((_, i) => i !== index))
  }

  return (
    <>
      <HeaderVoucher />
      {additionalAreas.map((_, index) => (
        <DragDropContext onDragEnd={onDragEnd} key={index}>
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
      ))}
      <Button onClick={addAdditionalArea}>Add</Button>
    </>
  )
}

export default Home

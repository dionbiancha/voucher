import React, { useEffect, useState } from 'react'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'
import DragDrop from '../../Features/DragDrop'
import {
  Box,
  Button,
  Collapse,
  Divider,
  Fab,
  IconButton,
  Stack,
  SxProps,
  Tooltip,
  Zoom,
  useTheme
} from '@mui/material'
import HeaderVoucher from '../../components'
import { SelectType, useData } from '../../context/dataContext'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import AddIcon from '@mui/icons-material/Add'
import { TransitionGroup } from 'react-transition-group'
import { useSnack } from '../../components/Snack'

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

interface DragAreaProps {
  id?: number
}

function DragArea({ id }: DragAreaProps) {
  const { selectType } = useData()
  const [columns, setColumns] = useState(initialColumns)
  const [enabledService, setEnabledService] = useState(false)

  useEffect(() => {
    if (!enabledService) return
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
    setEnabledService(false)
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

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Box
        onClick={() => setEnabledService(true)}
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}
      >
        {Object.values(columns).map((col) => (
          <DragDrop col={col} key={col.id} idVoucher={id} />
        ))}
      </Box>
    </DragDropContext>
  )
}

function Home() {
  const [additionalAreas, setAdditionalAreas] = useState<Record<string, unknown>[]>([])
  const theme = useTheme()
  const snack = useSnack()

  const fabStyle = {
    position: 'fixed',
    bottom: 30,
    right: 30
  }

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  }

  const addAdditionalArea = () => {
    setAdditionalAreas((prevAreas) => [...prevAreas, { id: prevAreas.length + 1 }])
  }

  const removeAdditionalArea = (index: number) => {
    setAdditionalAreas((prevAreas) => prevAreas.filter((_, i) => i !== index))
    snack.info('Voucher removido')
  }

  useEffect(() => {
    if (additionalAreas.length === 0) {
      addAdditionalArea()
    }
  }, [])

  return (
    <Box sx={{ maxWidth: '1500px', margin: 'auto' }}>
      <HeaderVoucher />
      <TransitionGroup>
        {additionalAreas.map((_, index) => (
          <Collapse key={index}>
            <Stack direction='row' justifyContent='end' margin={'10px 30px 10px 10px'}>
              <Button
                onClick={() => removeAdditionalArea(index)}
                variant='contained'
                color='error'
                sx={{
                  fontSize: '10px',
                  padding: '1px',
                  textTransform: 'none'
                }}
              >
                Remover
              </Button>
            </Stack>

            <DragArea id={index} />
            <Divider sx={{ marginY: '30px' }} />
          </Collapse>
        ))}
      </TransitionGroup>
      <Tooltip
        title='Adicionar'
        onClick={() => {
          addAdditionalArea()
          snack.success('Voucher adicionado')
        }}
      >
        <Zoom
          in={true}
          timeout={transitionDuration}
          style={{
            transitionDelay: `${transitionDuration.exit}ms`
          }}
          unmountOnExit
        >
          <Fab sx={fabStyle as SxProps} aria-label={'Add'} color={'primary'}>
            <AddIcon />
          </Fab>
        </Zoom>
      </Tooltip>
    </Box>
  )
}

export default Home

interface ColumnType {
  id: string
  list: string[]
}

export const initialColumns: Record<string, ColumnType> = {
  left: {
    id: 'left',
    list: ['1', '2', '3']
  },
  center: {
    id: 'center',
    list: []
  }
}

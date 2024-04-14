import { forwardRef, useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/pt-br'

interface Props {
  onChange: (value: Date | null) => void
  label?: string
}

const DateField = forwardRef<HTMLInputElement, Props>(({ onChange, label }, ref) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
      <DemoContainer sx={{ width: '100%' }} components={['DatePicker']}>
        <DatePicker sx={{ width: '100%' }} label={label} format='LL' />
      </DemoContainer>
    </LocalizationProvider>
  )
})

export default DateField

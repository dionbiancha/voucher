import { forwardRef, useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import 'dayjs/locale/pt-br'
import { TimePicker } from '@mui/x-date-pickers'
import { Dayjs } from 'dayjs'

interface Props {
  onChange: (value: Dayjs | null) => void
  label?: string
}

const TimeField = forwardRef<HTMLInputElement, Props>(({ onChange, label }, ref) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='pt-br'>
      <DemoContainer sx={{ width: '100%' }} components={['DatePicker']}>
        <TimePicker
          label={label}
          sx={{ width: '100%' }}
          onChange={(newValue: any) => onChange(newValue)}
        />
      </DemoContainer>
    </LocalizationProvider>
  )
})

export default TimeField

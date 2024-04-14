import React, { useState } from 'react'
import ContentInput from '../../components/Layout/ContentInput'
import 'react-international-phone/style.css'
import DateField from '../../components/Forms/DateField'
import dayjs, { Dayjs } from 'dayjs'

function CheckIn() {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <ContentInput>
      <DateField label='Data de chegada' onChange={setValue} />
    </ContentInput>
  )
}

export default CheckIn

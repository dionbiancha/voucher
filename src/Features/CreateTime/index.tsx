import React, { useState } from 'react'
import ContentInput from '../../components/Layout/ContentInput'
import 'react-international-phone/style.css'
import dayjs, { Dayjs } from 'dayjs'
import TimeField from '../../components/Forms/TimeField'

function CreateTime() {
  const [value, setValue] = React.useState<Dayjs | null>(null)
  return (
    <ContentInput>
      <TimeField label='Horario' onChange={setValue} />
    </ContentInput>
  )
}

export default CreateTime

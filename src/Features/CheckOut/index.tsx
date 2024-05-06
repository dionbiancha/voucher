import React, { useState } from 'react'
import ContentInput from '../../components/Layout/ContentInput'
import 'react-international-phone/style.css'
import DateField from '../../components/Forms/DateField'
import dayjs, { Dayjs } from 'dayjs'

interface Props {
  idVoucher?: number
}

function CheckOut({ idVoucher }: Props) {
  const [value, setValue] = useState<Date | null>(null)
  return (
    <ContentInput>
      <DateField label='Data de saída' onChange={setValue} />
    </ContentInput>
  )
}

export default CheckOut

import { Box, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import SelectLogo from '../SelectLogo'
import SelectPartnerLogo from '../SelectPartnerLogo'
import SelectConsultant from '../SelectConsultant'
import SelectCompany from '../SelectCompany'
import SelectService from '../SelectService'
import SelectContact from '../SelectContact'
import ConfirmationNumber from '../ConfirmationNumber'
import PaxPhone from '../PaxPhone'
import CreateDate from '../CreateDate'
import Flight from '../Flight'
import Airport from '../Airport'
import CheckIn from '../CheckIn'
import CheckOut from '../CheckOut'
import CancellationPolicy from '../CancellationPolicy'
import Observations from '../Observations'
import TypeOfRoom from '../TypeOfRoom'
import AccommodationDetails from '../AccommodationDetails'
import AccommodationRegime from '../AccommodationRegime'
import SelectLocalization from '../SelectLocalization'
import Hotel from '../Hotel'
import CreateTime from '../CreateTime'

interface ItemProps {
  field: string
  index: number
  idVoucher?: number
}

const Item: React.FC<ItemProps> = ({ field, index, idVoucher }) => {
  useEffect(() => {
    console.log('idVoucher', idVoucher)
  }, [])
  return (
    <Draggable draggableId={field} index={index}>
      {(provided) => (
        <Box
          sx={{
            marginBottom: '20px'
          }}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {field === '1' && <SelectPartnerLogo idVoucher={idVoucher} />}
          {field === '2' && <SelectConsultant idVoucher={idVoucher} />}
          {field === '3' && <SelectCompany idVoucher={idVoucher} />}
          {field === '5' && <SelectService idVoucher={idVoucher} />}
          {field === '4' && <SelectContact idVoucher={idVoucher} />}
          {field === '6' && <ConfirmationNumber idVoucher={idVoucher} />}
          {field === '7' && <PaxPhone idVoucher={idVoucher} />}
          {field === '8' && <CreateDate idVoucher={idVoucher} />}
          {field === '9' && <Flight idVoucher={idVoucher} />}
          {field === '10' && <Airport idVoucher={idVoucher} />}
          {field === '11' && <CheckIn idVoucher={idVoucher} />}
          {field === '12' && <CheckOut idVoucher={idVoucher} />}
          {field === '13' && <CancellationPolicy idVoucher={idVoucher} />}
          {field === '14' && <Observations idVoucher={idVoucher} />}
          {field === '15' && <TypeOfRoom idVoucher={idVoucher} />}
          {field === '16' && <AccommodationDetails idVoucher={idVoucher} />}
          {field === '17' && <AccommodationRegime idVoucher={idVoucher} />}
          {field === '18' && <SelectLocalization idVoucher={idVoucher} />}
          {field === '19' && <Hotel idVoucher={idVoucher} />}
          {field === '20' && <CreateTime idVoucher={idVoucher} />}
        </Box>
      )}
    </Draggable>
  )
}

export default Item

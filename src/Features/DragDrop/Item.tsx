import { Box, TextField } from '@mui/material'
import React from 'react'
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
}

const Item: React.FC<ItemProps> = ({ field, index }) => {
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
          {field === '1' && <SelectPartnerLogo />}
          {field === '2' && <SelectConsultant />}
          {field === '3' && <SelectCompany />}
          {field === '5' && <SelectService />}
          {field === '4' && <SelectContact />}
          {field === '6' && <ConfirmationNumber />}
          {field === '7' && <PaxPhone />}
          {field === '8' && <CreateDate />}
          {field === '9' && <Flight />}
          {field === '10' && <Airport />}
          {field === '11' && <CheckIn />}
          {field === '12' && <CheckOut />}
          {field === '13' && <CancellationPolicy />}
          {field === '14' && <Observations />}
          {field === '15' && <TypeOfRoom />}
          {field === '16' && <AccommodationDetails />}
          {field === '17' && <AccommodationRegime />}
          {field === '18' && <SelectLocalization />}
          {field === '19' && <Hotel />}
          {field === '20' && <CreateTime />}
        </Box>
      )}
    </Draggable>
  )
}

export default Item

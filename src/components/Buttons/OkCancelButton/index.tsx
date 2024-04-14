import { Button, Stack } from '@mui/material'

interface OkCancelButtonProps {
  okText: string
  cancelText: string
  handleOk: () => void
  handleCancel: () => void
  okTitle?: string
  cancelTitle?: string
}

function OkCancelButton(props: OkCancelButtonProps) {
  return (
    <Stack flexDirection={'row'} justifyContent={'space-between'} width={'100%'}>
      <Button
        title={props.cancelTitle}
        color='inherit'
        variant='contained'
        onClick={props.handleCancel}
        style={{ marginTop: '30px', textTransform: 'none', width: '200px' }}
      >
        {props.cancelText}
      </Button>
      <Button
        title={props.okTitle}
        variant='contained'
        onClick={props.handleOk}
        style={{ marginTop: '30px', textTransform: 'none', width: '200px' }}
      >
        {props.okText}
      </Button>
    </Stack>
  )
}

export default OkCancelButton

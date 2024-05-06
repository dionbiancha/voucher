import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import React, { createContext, ReactElement, useContext, useState } from 'react'
import { useDataUser } from '../../context/userContext'

interface ShowProps {
  title: string
  text: string
  cancelButtonText: string
  confirmButtonText: string
  confirmButtonAction: () => void
}

export interface ModalInfo {
  show({
    cancelButtonText,
    confirmButtonAction,
    confirmButtonText,
    text,
    title
  }: ShowProps): void
  hide(): void
}

const ModalInfoDefault: ModalInfo = {
  show: () => {},
  hide: () => {}
}

interface Props {
  children: React.ReactNode
}

const ModalContext = createContext<ModalInfo>(ModalInfoDefault)

export function useModal() {
  return useContext(ModalContext)
}

export function ModalProvider(props: Props): ReactElement {
  const { clearUserData } = useDataUser()
  const [open, setOpen] = useState(false)
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [cancelButtonText, setCancelButtonText] = useState('')
  const [confirmButtonText, setConfirmButtonText] = useState('')
  const [confirmButtonAction, setConfirmButtonAction] = useState<() => void | null>(
    () => null
  )

  function show(value: ShowProps) {
    setTitle(value.title)
    setText(value.text)
    setConfirmButtonText(value.confirmButtonText)
    setCancelButtonText(value.cancelButtonText)
    setConfirmButtonAction(() => value.confirmButtonAction)
    setOpen(true)
  }

  function hide() {
    clearUserData()
    setTitle('')
    setText('')
    setConfirmButtonText('')
    setCancelButtonText('')
    setConfirmButtonAction(() => {})
    setOpen(false)
  }

  return (
    <ModalContext.Provider value={{ show, hide }}>
      {props.children}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>{cancelButtonText}</Button>
          <Button onClick={() => confirmButtonAction()} autoFocus>
            {confirmButtonText}
          </Button>
        </DialogActions>
      </Dialog>
    </ModalContext.Provider>
  )
}

export default ModalContext

import React, { useEffect, useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import Menu from '@mui/material/Menu'
import Logo from '/assets/icons/logo.png'
import { Box, Tooltip } from '@mui/material'
import { useDataUser } from '../../../context/userContext'
import { useModal } from '../../Modal'
import { auth } from '../../../services/firebase'
import { useCustomNavigate } from '../../../context/navigationContext'

export default function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const { userData } = useDataUser()
  const { goToLogin } = useCustomNavigate()
  const modal = useModal()

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  async function handleLogout() {
    auth
      .signOut()
      .then(() => {
        goToLogin()
        modal.hide()
      })
      .catch((error) => {
        console.error('Erro ao fazer logout:', error)
      })
  }

  return (
    <AppBar position='fixed' sx={{ backgroundColor: '#FFF', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <img src={Logo} alt='logo' width='40px' />
        {userData && (
          <div>
            <Tooltip title='Open settings'>
              {userData.photoURL ? (
                <img
                  onClick={handleMenu}
                  src={userData.photoURL}
                  style={{ ...stylePhoto }}
                />
              ) : (
                <Box onClick={handleMenu}>aa</Box>
              )}
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose()
                  modal.show({
                    title: 'Sair',
                    text: 'Tem certeza que deseja sair?',
                    cancelButtonText: 'Não',
                    confirmButtonAction: handleLogout,
                    confirmButtonText: 'Sim'
                  })
                }}
              >
                Sair
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}

const stylePhoto = {
  width: '40px',
  height: '40px',
  borderRadius: '50px',
  backgroundColor: '#F8F9FB',
  color: '#000',
  cursor: 'pointer'
}

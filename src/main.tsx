import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext'
import { ModalProvider } from './components/Modal'
import { DataProvider } from './context/dataContext'
import { SnackProvider } from './components/Snack'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DataProvider>
          <SnackProvider>
            <ModalProvider>
              <App />
            </ModalProvider>
          </SnackProvider>
        </DataProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

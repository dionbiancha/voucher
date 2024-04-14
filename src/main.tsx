import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './context/userContext'
import { ModalProvider } from './components/Modal'
import { DataProvider } from './context/dataContext'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <DataProvider>
          <ModalProvider>
            <App />
          </ModalProvider>
        </DataProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

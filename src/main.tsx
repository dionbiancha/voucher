import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import '@radix-ui/themes/styles.css'
import { Theme } from '@radix-ui/themes'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <App />
      </Theme>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

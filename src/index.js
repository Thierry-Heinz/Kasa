import React from 'react'
import ReactDOM from 'react-dom/client'

import reportWebVitals from './reportWebVitals'
import './index.css'

//Components
import Routing from './components/Routing/Routing'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Call the Routing Component which use React router */}
    <Routing />
  </React.StrictMode>,
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

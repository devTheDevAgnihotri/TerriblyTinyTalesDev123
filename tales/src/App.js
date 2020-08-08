import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Tales from './tales'

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path='/' component={Tales} />

      </BrowserRouter>

    </div>
  )
}
export default App

//tales folder is react client
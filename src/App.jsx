import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { Entry } from './page/entry/Entry.page'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Entry/>
    </>
  )
}

export default App

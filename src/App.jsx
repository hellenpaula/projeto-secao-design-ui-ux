import { useState/* , useRef */ } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import SectionUI_UX from './components/Section_Servico_UI_UX/Section_Servico_UI_UX.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <SectionUI_UX />
   </div>
  )
}

export default App

import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HeroSection from '../src/components/HeroSection'
import './App.css'

function App() {
 

  return (
    <div style={{display: 'flex'}}>
    <Sidebar />
    <HeroSection />
    </div>
  )
}

export default App

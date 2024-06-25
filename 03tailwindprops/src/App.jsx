import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  return (
    <>
      <h1 className='bg-red-400 text-black p-4 rounded-lg mb-6  '>Tailwind Test</h1>
      <Card username="Maryam" btnText="Visit Maryam"/>
      <Card username="Mary" btnText= "Visit Mary"/>
      {/* no btnText prop passed so Card will show its default value */}
      <Card username="John"/> 
      
    </>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Task: counter shouldn't increment above 20 and shouldn't decrement below 0

function App() {
  const [counter,setCounter]=useState(0)
//FIRST METHOD:
  // const AddValue=() =>{
  //     if(counter<20)
  //       {
  //         setCounter(prevCounter=>prevCounter+1)
  //       }
  // }
  // const RemoveValue=()=>{
  //   if(counter>0)
  //     {
  //       setCounter(prevCounter=>prevCounter-1)
  //     }
  // }

//SECOND METHOD:

  const AddValue=() =>{
    if(counter>=20)
      {
        return
      }
      setCounter(prevCounter=>prevCounter+1)
}
  const RemoveValue=()=>{
    if(counter<=0)
      {
        return
      }
    setCounter(prevCounter=>prevCounter-1)
  }
  return (
    <>
      <h1>Counter Project</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={AddValue}>Add value</button>
      <br />
      <button onClick={RemoveValue}>Remove value</button>
    </>
  )
}

export default App

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
    // if(counter>=20)
    //   {
    //     return
    //   }
    //   setCounter(prevCounter=>prevCounter+1)
    
    //if we do this, what willbe the output? will it add 4 everytime? 
    // setCounter(counter+1)
    //    setCounter(counter+1)
    //    setCounter(counter+1)
    //    setCounter(counter+1)
       //THE ANSWER IS NO, CUZ THE USE STATE SENDS THE CHANGES TO THE UI AND VARIABLES IN BATCHES AND THESE 4 THINGS ABOVE MAKE A BATCH AND THEY'RE UPDATING THE SAME COUNTER VARIABLE EVERYTIME,SO IF WE HAVE TO UPDATE THE STATE LIKE THIS BY REPEATING EVERYTIME THEN WE HAVE TO DO THIS:
       setCounter(prevCounter=>prevCounter+1)
       setCounter(prevCounter=>prevCounter+1)
       setCounter(prevCounter=>prevCounter+1)
       setCounter(prevCounter=>prevCounter+1)
       //NOW THE SETCOUNTER OR ALL SETTERS ACCEPT ONE CALLBACK AND PREVCOUNTER HERE GIVES THE LAST UPDATED STATE

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

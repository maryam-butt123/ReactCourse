import Chai from './Chai'

function App() {
  const username="Maryam Butt"
  return (
    <>
    {/* saywe're returning this component to main.jsx now this willbe converted in that syntax in the main.jsx defined. (reactElement object) */}
    {/* evaluated expression in {} */}
     <h1>Hello {username}</h1>  
    <Chai/>
    </>
  )
}

export default App

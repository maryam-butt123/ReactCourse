import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

//we can execute a method as well just like <MyApp/>
function MyApp(){
  return (
    <h1>This is custom MyApp</h1>
  )
}

const anotherElement=
(
  <a href="https:google.com" target='_blank'>Click me</a>
)


const username=' Mary'
//creating elements through React and then rendering them.
//this kinda object injected directly and syntax is an object which has a type,properties/attributes,children/name/text,evaluated expressions {} of JS 
const reactElement=React.createElement(
  'a',
  {
    href:'https://google.com',
    target:'_blank'
  },
  'Click me to visit Google',
  username
)

ReactDOM.createRoot(document.getElementById('root')).render(
reactElement)
 
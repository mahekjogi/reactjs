import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Crad from './components/card'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "mahek",
    age: 21
  }
  let newArr = [1,11,111]
  return (
    <>
      <h1 className='bg-green-400 !text-black p-4'>Tailwind test</h1>
     <Card username="chai" btnText="click me"/>
     <Card username= "code" btnText="visit"/>
{/* somObj={newArr} */}
    </>
  )
}

export default App

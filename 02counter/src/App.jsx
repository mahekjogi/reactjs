import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
 //let counter = 15

 const removeValue = () => {
  setCounter(counter - 1)
 }
 const addValue = () => {
    //console.log("value added", Math.random()); this is a just check it it's run properly or not 
   
    counter = counter + 1
    // setCounter(counter + 1)//you write like this if you not declare as above line 
    setCounter(counter)//if you get the value above like a 14 line so you just declare here 
     //console.log("clicked", counter);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button 
      onClick={addValue}>Add value{counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value{counter}</button>
      <p>footer: {counter}</p>

    </>
  )
}

export default App

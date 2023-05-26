import './App.css'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import { useState } from "react"

function App() {
  //const [count, setCount] = useState(0)

  const [cart, setCart] = useState([])

  return (
    <>
      <Home cart={cart} setCart={setCart}/>
      <Cart cart={cart}/>
    </>
  )
}

export default App



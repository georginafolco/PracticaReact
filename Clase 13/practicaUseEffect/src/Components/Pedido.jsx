/* eslint-disable react/prop-types */

import { useEffect, useState } from "react"

const Pedido = ({pedido}) => {

  const [showPedido, setShowPedido] = useState(false);

  useEffect(() => {
    setTimeout(() => {setShowPedido(true)}, 2000)
  }, [])

  const cancelPedido = () => {
    setShowPedido(false)
    console.log("Se desmontó el componente")
    alert("El pedido ha sido cancelado")
  }

  return (
    <div>
        <h1>Su Pedido:</h1>
        {showPedido ? <h3>{pedido}</h3> : null}
        {console.log("El componente fue actualizado")}
        <button onClick={cancelPedido}>Cancelar Pedido</button>
    </div>
  )
}

export default Pedido
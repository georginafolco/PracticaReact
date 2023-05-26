import React from 'react'

const Card = ({item}) => {
  return (
    <div>
        <h2>{item.nombre}</h2>
        <img src={item.imagen} alt="" />
        <h3>{item.precio}</h3>
    </div>
  )
}

export default Card


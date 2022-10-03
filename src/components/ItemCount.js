import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const increase = () => count < stock && setCount(count + 1)
  const decrease = () => count > initial && setCount(count - 1)

  function noStock() {
    alert("No hay stock")
  }
  return (
    <>
      <button type="button" disabled={count === initial} onClick={decrease} className="btn btn-secondary mb-3 ">-</button>
      <button type="button" className="btn btn-light mb-3" disabled>{count}</button>
      <button type="button" disabled={count === stock} onClick={increase} className="btn btn-secondary mb-3 ">+</button>
      <div className="card-footer bg-transparent">
        <button type="button" onClick={() => {
          if (stock > 0) {
            onAdd(count)
          } else {
            noStock()
          }
        }} className="btn btn-success">Agregar al carro</button>
      </div>
    </>
  )
}

export default ItemCount

import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import com1 from "../assets/wolverine.jpg"
import { useState } from "react"

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial)
  const increase = () => count < stock && setCount(count + 1)
  const decrease = () => count > initial && setCount(count - 1)

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 m-3 shadow-lg border-light card text-center align-items-center">
            <img src={com1} className="img-fluid mt-2" width="220" height="auto"/>
            <div className="card-body">
              <p className="card-text">Ghost Rider vs Wolverine</p>
              <div className="btn-group m-2">
                <button type="button" disabled={count === initial} onClick={decrease} className="btn btn-secondary mb-3 ">-</button>
                <button type="button" className="btn btn-light mb-3" disabled>{count}</button>
                <button type="button" disabled={count === stock} onClick={increase} className="btn btn-secondary mb-3 ">+</button>
              </div>
            </div>
            <div className="card-footer bg-transparent">
              <button type="button" onClick={onAdd} className="btn btn-success">Agregar al carro</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemCount

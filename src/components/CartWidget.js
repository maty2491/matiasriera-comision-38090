import React from 'react'
import Carrito from '@mui/icons-material/LocalMall'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

const CartWidget = () =>{
    return(
    <>
    
    <Button variant='null'>
        <Carrito sx={{ 

            fontSize: 33,
            color:"#fff",
                              
            }}
        />
    </Button>
    </>
    )
}

export default CartWidget
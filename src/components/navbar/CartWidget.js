import React from 'react'
import CartWidget from '@mui/icons-material/LocalMall'
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'

const Carro = () =>{
    return(
    <>
    
    <Button variant='null'>
        <CartWidget sx={{ 

            fontSize: 30,
            color:"#fff",
                              
            }}
        />
    </Button>
    </>
    )
}

export default Carro
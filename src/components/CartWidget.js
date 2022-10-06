import Carrito from "@mui/icons-material/LocalMall"
import { Link } from "react-router-dom"
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
  const { totalProducts } = useCartContext()
  return (
    <>
      <Carrito sx={{ fontSize: 33, color: "#ffff", }} />
      <Link style={{ textDecoration: 'transparent', color: 'white' }}>{totalProducts() || ''}</Link>
    </>
  )
}

export default CartWidget

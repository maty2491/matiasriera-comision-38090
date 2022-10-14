import Carrito from "@mui/icons-material/LocalMall"
import { useCartContext } from "../context/CartContext"

const CartWidget = () => {
  const { totalProducts } = useCartContext()
  return (
    <>
      <Carrito sx={{ fontSize: 33, color: "#ffff", }} />
      {totalProducts() || ''}
    </>
  )
}

export default CartWidget

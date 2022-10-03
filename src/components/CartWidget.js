import Carrito from "@mui/icons-material/LocalMall"
import Button from "react-bootstrap/Button"

const CartWidget = () => {
  return (
    <>
      <Button variant="null">
        <Carrito
          sx={{
            fontSize: 33,
            color: "#ffff",
          }}
        />
      </Button>
    </>
  )
}

export default CartWidget

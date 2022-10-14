import React, { useState, useContext } from 'react'

const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const addItem = (item, count) => {
        if (isInCart(item.id)) {
            setCart(cart.map(product => {
                return product.id === item.id ? { ...product, count: product.count + count } : product
            }))
        } else {
            setCart([...cart, { ...item, count }])
        }
    }
    
    const totalPrice = () =>{
        return cart.reduce((prev, actu) => prev + actu.count * actu.price, 0)
    }

    const totalProducts = () => cart.reduce((accumulator, productCurrent) => accumulator + productCurrent.count, 0)

    const clear = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
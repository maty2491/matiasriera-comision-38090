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
    console.log('Carrito: ', cart);

    const clear = () => setCart([])
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false
    const removeItem = (id) => setCart(cart.filter(product => product.id !== id))

    return (
        <CartContext.Provider value={{
            clear,
            isInCart,
            removeItem,
            addItem
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider
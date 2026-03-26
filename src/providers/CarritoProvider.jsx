import { CartContext } from "../providers/CartContext";
import { useState } from "react";

export function CartProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    const agregarItem = (producto) => {
        setCarrito((prev) => [...prev, producto]);
    };

    return (
        <CartContext.Provider value={{ carrito, agregarItem }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
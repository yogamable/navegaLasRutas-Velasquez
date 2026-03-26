import CalculoTotal from "./CalculoTotal"
import CartItemDetail from "./CartItemDetail"
import { CartContext } from "../providers/CartContext"
import { useContext } from "react";

function CartItem(){

    const {carrito} = useContext(CartContext);

    return(
        
        <div className="cartItemDiv">
            <h1 className="text-center">Productos en carrito</h1>
            <div className="productosEnCarrito">
                <h2>Resumen</h2>
                {carrito.map((producto) => (
                    <CartItemDetail key={producto.id} producto={producto} />
                ))}
                <CalculoTotal />
            </div>
        </div>
    )
}

export default CartItem
import { useContext } from "react"
import { CartContext } from "../providers/CartContext";

function CalculoTotal(){
    const {carrito} = useContext(CartContext);
    const total = carrito.reduce((acc, prod) => acc + parseInt(prod.precio), 0);
    return(
        <div className="calculoTotal">
            <p>Total a pagar ${total}</p>
        </div>
    )
}

export default CalculoTotal
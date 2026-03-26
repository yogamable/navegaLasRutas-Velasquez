import { useContext } from "react";
import { CartContext } from "../providers/CartContext";

function Item({producto}){

    const {agregarItem} = useContext(CartContext)
    
    return(
        <div className="cardsContainer">
            <div className="card" style={{width: '18rem'}} key={producto.id}>
                <img src={producto.img} className="card-img-top" alt={producto.nombre}></img>
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Precio: {producto.precio}</li>
                </ul>
                <div className="card-body">
                    <button onClick={() => agregarItem(producto)}>Agregar al Carrito</button>
                </div>
            </div>                
        </div>
    )
}

export default Item





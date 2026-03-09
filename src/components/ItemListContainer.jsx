import { useEffect, useState, Link } from "react";
import data from "../../productos.json";

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);

    const getProductos = () => {
        return new Promise((resolve) => {
            resolve(data)
        })
    }

    useEffect(() => {
        getProductos()
            .then((res) => {
                setProductos(res);
            })

    }, [])


    return(
        <div>
            {
            productos.length > 0 && 
            productos.map((producto)=>{
                return(
                    <div className="card" style={{width: '18rem'}}>
                        <img src={producto.img} className="card-img-top" alt={producto.nombre}></img>
                        <div className="card-body">
                            <h5 className="card-title">{producto.nombre}</h5>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Precio</li>
                        </ul>
                        <div className="card-body">
                            <Link to="/" className="card-link">Ver producto</Link>
                        </div>
                    </div>

                )
            })
            }
        </div>
    )
}

export default ItemListContainer
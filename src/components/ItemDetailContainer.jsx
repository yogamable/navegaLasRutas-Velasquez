
const ItemDetailContainer = ({productos}) => {
    return(
        <div>
            <div className="tituloCategoria"><h1>Producto</h1></div>
            {
                productos.lenght > 0 &&
                productos.map((producto)=>{
                    return(
                        <div className="d-flex gap-2 flex-wrap justify-content-center">
                            <div className="card" style={{width: '18rem'}}>
                                    <img src={producto.img} className="card-img-top"></img>
                                    <div className="card-body">
                                        <h5 className="card-title">Nombre: {producto.name}</h5>
                                        <p className="card-text">Precio: ${producto.precio}</p>
                                        <Link to={`/producto/${producto.id}`} className="btn btn-primary">Ver producto</Link>
                                    </div>
                            </div>
                        </div>

                    )
                })
            }
        </div>
    )
}

export default ItemDetailContainer
function CartItemDetail({producto}) {
    return(
        <div className="cardItemDetail">
            <p>Nombre producto: {producto.nombre}</p>
            <p>Precio: {producto.precio}</p>
        </div>
    )
}

export default CartItemDetail

import Item from "./Item";

function ItemList({productos}){

    return(
        <div className="cardsContainer">
            {productos.map(productos => (
                <Item key={productos.id} producto={productos} />

            ))}
        </div>
    )
}

export default ItemList
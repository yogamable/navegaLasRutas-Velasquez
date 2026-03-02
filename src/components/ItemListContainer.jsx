import { useEffect, useState } from "react";
import data from "/productos.json";
import ItemDetailContainer from "./ItemDetailContainer"

function ItemListContainer () {

    let [productos, setProductos] = useState([]);
    
    const getProductos = () => {
        return new Promise ((resolve) =>{
            resolve(data)
        })
    }

    useEffect(()=>{
        getProductos()
            .then((res) => {
                setProductos(res);                
            });
    });

    return(
    
        <ItemDetailContainer productos={productos} />
        
    )
}

export default ItemListContainer
import { useEffect, useState} from "react";
import { useParams } from "react-router";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase-config";


const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const { categoriaId } = useParams();

    const titulos = {
        agendas: 'Agendas',
        lapices: 'Lapices',
        stickers: 'Stickers'
    }

    useEffect(() => {

    const productosRef = collection(db, "productos");

    const traerProductos = async () => {
        try {
            let consulta;

            if (categoriaId) {
                consulta = query(productosRef, where("categoria", "==", categoriaId));
            } else {
                consulta = productosRef;
            }

            const res = await getDocs(consulta);

            const productosDB = res.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setProductos(productosDB);

        } catch (error) {
            console.log(error);
        }
    };

    traerProductos();

}, [categoriaId]);

    return(
        <div>
            <div className="tituloCategoria">
                <h1>{categoriaId ? titulos[categoriaId] : "Todos los Productos"}</h1>
            </div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

















// import ItemListContainer from "./ItemList"

// function Content () {


//     return(
//         <main className="mainContainer">
//             <h1 className="text-center">Productos</h1>
//             <div className="cards-container">
//                 <ItemListContainer />
//             </div>
            
//         </main>
//     )
// }

// export default Content
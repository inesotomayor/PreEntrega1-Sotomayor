import { useEffect, useState } from "react"
import traerProductos from '../utilities/data'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc } from "firebase/firestore"
import db from "../../db/db"
import { ClipLoader } from "react-spinners"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true) // Loading

    // Params son todos los datos que vienen con ":" definidos en <Route>
    // Por ejemplo, :categoria o :id
    const { id } = useParams()

    useEffect(() => {
        // Mostrar loading
        setLoading(true)

        // Referencia al producto que quiero traer dentro de la colección + id del producto (desde useParams)
        const productoRef = doc(db, "productos", id)
        getDoc(productoRef)
            .then((respuesta) => {
                // Busca el id y trae el resto de la data asociada
                const productoDb = { id: respuesta.id, ...respuesta.data() }
                setProducto(productoDb)
            })
            // Si hubo error, mostrarlo
            .catch((error) => console.log("Hubo un error: " + error))
            // Quitar loading
            .finally(() => setLoading(false))
    }, [id])

    // Si fuera DB local
    // useEffect(() => {
    //     traerProductos
    //         .then((respuesta) => {
    //             // find() devuelve un único objeto, a diferencia de filter() que devuelve un array de objetos
    //             const productoEncontrado = respuesta.find((producto) => producto.id === Number(id))
    //             setProducto(productoEncontrado)
    //         })
    //         .catch((error) => console.log(error))
    //         .finally(() => console.log("Promise finalizada - DetailContainer"))
    // }, [id])

    return (
        <div>
            {loading ?
                <div className="loading">
                    <ClipLoader color="#ccc" />
                </div>
                :
                <ItemDetail producto={producto} />
            }
        </div>
    )
}
export default ItemDetailContainer
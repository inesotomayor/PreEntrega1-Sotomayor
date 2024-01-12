import { useEffect, useState } from "react"
import traerProductos from '../utilities/data'
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})

    // Params son todos los datos que vienen con ":" definidos en <Route>
    // Por ejemplo, :categoria o :id
    const { id } = useParams()

    console.log(id)

    // Lógica para treaer un único producto
    // Vista página detalle: <ItemDetail>
    useEffect(() => {
        traerProductos
            .then((respuesta) => {
                // find() devuelve un único objeto, a diferencia de filter() que devuelve un array de objetos
                const productoEncontrado = respuesta.find((producto) => producto.id === Number(id))
                setProducto(productoEncontrado)
            })
            .catch((error) => console.log(error))
            .finally(() => console.log("Promise finalizada - DetailContainer"))

    }, [id])

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    )
}
export default ItemDetailContainer
import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import traerProductos from '../utilities/data'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting, subtitle, className }) => {
    const [productos, setProductos] = useState([])

    // Params son todos los datos que vienen con ":" definidos en <Route>
    // Por ejemplo, :categoria o :id
    const { categoria } = useParams()

    // Lógica para traer todo el listado de productos o filtrado por categoría
    // Vista grilla: <ItemList>
    useEffect(() => {
        traerProductos
            .then((respuesta) => {
                // Si existe la categoría definida se puede filtrar
                if (categoria) {
                    // filter() devuelve un array de objetos, a diferencia de find() que devuelve un único objeto
                    const productosFiltrados = respuesta.filter(
                        (producto) => producto.categoria === categoria
                    )
                    // Guardar todos los productos filtrados
                    setProductos(productosFiltrados)
                } else {
                    // Sin categoría, guardar el listado general
                    setProductos(respuesta)
                }
            })
            // Si hubo error, mostrarlo
            .catch((error) => console.log("Hubo un error: " + error))
            // Acción cuando se termina el proceso
            .finally(() => console.log("Promise finalizada - ListContainer"))
    }, [categoria]) // Que actualice cuando hay cambio en categorias, no por única vez con corchetes vacíos []

    return (
        <div className={`flex flex-col grow py-20 ${className}`}>
            <div className="text-center">
                <h1 className="font-montserrat text-600 text-primary text-14px text-left pl-20">{greeting} <strong>{categoria}</strong></h1>
                <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
            </div>
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer

import React, { useEffect, useState } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../../db/db"
import { ClipLoader } from "react-spinners"
// import traerProductos from '../utilities/data' --> DB local

const ItemListContainer = ({ greeting, breadcrum, subtitle, className }) => {
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true) // Loading

    // Params son todos los datos que vienen con ":" definidos en <Route>
    // Por ejemplo, :categoria o :id
    const { categoria } = useParams()

    // Lógica para traer todo el listado de productos o filtrado por categoría de Firebase
    // Vista grilla: <ItemList>
    useEffect(() => {
        // Mostrar loading
        setLoading(true)

        // Usa el nombre de la colección dentro de la db de Firebase = productos
        let consulta
        const productosRef = collection(db, "productos")

        if (categoria) {
            // Si existe la categoría definida se puede filtrar
            consulta = query(productosRef, where("categoria", "==", categoria))
        } else {
            // Sin categoría, guardar el listado general
            consulta = productosRef
        }

        getDocs(consulta)
            .then((respuesta) => {
                let productosDb = respuesta.docs.map((producto) => {
                    return { id: producto.id, ...producto.data() }
                })
                setProductos(productosDb)
            })
            // Si hubo error, mostrarlo
            .catch((error) => console.log("Hubo un error: " + error))
            // Quitar loading
            .finally(() => setLoading(false))

    }, [categoria]) // Que actualice cuando hay cambio en categorias, no por única vez con corchetes vacíos []

    // -------------- //

    // Si se usa una DB local:
    // useEffect(() => {
    //     traerProductos
    //         .then((respuesta) => {
    //             if (categoria) {
    //                 const productosFiltrados = respuesta.filter(
    //                     (producto) => producto.categoria === categoria
    //                 )
    //                 setProductos(productosFiltrados)
    //             } else {
    //                 setProductos(respuesta)
    //             }
    //         })
    //         .catch((error) => console.log("Hubo un error: " + error))
    //         .finally(() => console.log("Promise finalizada - ListContainer"))
    // }, [categoria])

    // -------------- //

    return (
        <div className={`flex flex-col grow pb-20 ${className}`}>
            {loading ?
                <div className="loading">
                    <ClipLoader color="#ccc" />
                </div>
                :
                <>
                    <div className="text-center pt-10 pb-4">
                        <h1 className="title">{greeting}</h1>
                        <h2 className="subtitle pb-5 mb-5">{subtitle}</h2>
                        {breadcrum &&
                            <p className="font-montserrat text-600 text-primary text-14px text-left pl-20 mb-6">
                                Categoría: <strong>{categoria}</strong>
                            </p>}
                    </div>
                    <ItemList productos={productos} />
                </>
            }

        </div>
    )
}

export default ItemListContainer

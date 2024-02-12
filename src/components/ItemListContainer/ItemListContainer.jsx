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
                if (categoria) {
                    // Mostrar todos los productos dentro de la categoria
                    setProductos(productosDb)
                } else {
                    // Mostrar solo 10 elementos de la DB en la Home
                    setProductos(productosDb.slice(0, 10))
                }

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
        <div className="flex flex-col grow pb-20">
            {loading ?
                <div className="loading">
                    <ClipLoader color="#ccc" />
                </div>
                :
                <>
                    {
                        // Mostrar intro y portada solo en Home, no en filtrado de categoría
                        !categoria &&
                        <>
                            <main className="container-general !px-0 !pb-0">
                                <div className="text-center pb-4">
                                    <h1 className="title">{greeting}</h1>
                                    <h2 className="subtitle py-5">{subtitle}</h2>
                                </div>

                            </main>
                            <img className="w-full my-10" src="/images/portada.jpg" />
                        </>
                    }

                    <main className="container-general">
                        <div className="text-center pb-4">
                            {breadcrum &&
                                <p className="font-montserrat text-600 text-primary text-14px text-left pl-20 mb-6">
                                    Categoría: <strong>{categoria}</strong>
                                </p>}
                            <ItemList productos={productos} />
                        </div>
                    </main>
                </>
            }

        </div >
    )
}

export default ItemListContainer

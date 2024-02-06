import { createContext, useState, useEffect } from 'react'

// Se crea un contexto de React - () es el estado default no obligatorio:
const CartContext = createContext()

// Se crea un Context Provider asociado a él, que luego se usa en App para envolver los elementos relacionados
const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([])

    const estaEnElCarrito = (idProducto) => {
        // Método .some para chequear si el producto ya estaba en el carrito
        const respuesta = carrito.some((producto) => producto.id === idProducto)
        return respuesta
    }

    const cantidadTotal = () => {
        // Método .reduce, necesita el acumulador y el nuevo elemento a sumar, más valor inicial "0" de total
        const cantidad = carrito.reduce((total, producto) => total + producto.cantidad, 0)
        return cantidad
    }

    const precioTotal = () => {
        // Multiplicar el precio de cada producto por la cantidad de productos
        const total = carrito.reduce((total, producto) => total + (producto.cantidad * producto.precio), 0)
        return total
    }

    const anadirProductoCarrito = (productoNuevo) => {
        const condicion = estaEnElCarrito(productoNuevo.id)

        if (condicion) {
            // Incrementar cantidad de producto ya cargado
            const productosModificados = carrito.map((productoCarrito) => {
                if (productoCarrito.id === productoNuevo.id) {
                    // Si ya estaba cargado se suman las cantidades
                    return { ...productoCarrito, cantidad: productoCarrito.cantidad + productoNuevo.cantidad }
                } else {
                    // Si no estaba cargado, no se modifica la cantidad
                    return productoCarrito
                }
            })
            // Guardar el resultado de productosModificados, por sí o por no
            setCarrito(productosModificados)
            // Guardar en localStorage
            localStorage.setItem('carrito', JSON.stringify(productosModificados))
        } else {
            // Guardar el nuevo producto guardado después de la data anterior del carrito
            setCarrito([...carrito, productoNuevo])
            // Guardar wn localStorage
            localStorage.setItem('carrito', JSON.stringify([...carrito, productoNuevo]))
        }
    }

    const eliminarProductoCarrito = (productoEliminado) => {
        const productosFiltrados = carrito.filter((producto) => producto.id !== productoEliminado.id)
        setCarrito(productosFiltrados)
        // Guardar en localStorage
        localStorage.setItem('carrito', JSON.stringify(productosFiltrados))
    }

    const vaciarCarrito = () => {
        setCarrito([])
        // Guardar en localStorage
        localStorage.setItem([])
    }

    const formatoARS = (numero, locale = 'es-AR') => {
        return numero.toLocaleString(locale, {
            style: 'currency',
            currency: 'ARS'
        })
    }

    // const precio = 256333.5;
    // console.log(formatoARS(precio)); // Output: $1,234.56

    // Levantar la info de localStorage al montar el componente
    useEffect(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        if (carritoGuardado) {
            setCarrito(JSON.parse(carritoGuardado));
        }
    }, []);

    return (

        <CartContext.Provider value={{ carrito, anadirProductoCarrito, eliminarProductoCarrito, cantidadTotal, formatoARS, precioTotal, vaciarCarrito }}>
            {children}
        </CartContext.Provider>
    )

}

export { CartContext, CartProvider }
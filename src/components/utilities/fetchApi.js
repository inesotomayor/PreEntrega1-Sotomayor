const getProductos = () => {
    return fetch("http://localhost:8080/api/productos")
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error))
  }
  
  const getProductosPorId = (idProducto) => {
    return fetch(`http://localhost:8080/api/productos/${idProducto}`)
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error))
  }
  
  const postAñadirProducto = (nuevoProducto) => {
    return fetch("http://localhost:8080/api/productos", {
      method: "POST",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(nuevoProducto)
    })
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error))
  }
  
  const putModificarProducto = (idProducto, modificaciones) => {
    return fetch(`http://localhost:8080/api/productos/${idProducto}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(modificaciones)
    })
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error))
  }
  
  const deleteProducto = (idProducto) => {
    return fetch(`http://localhost:8080/api/productos/${idProducto}`, {
      method: "DELETE",
    })
      .then((respuesta) => respuesta.json())
      .catch((error) => console.log(error))
  }
  
  export { getProductos, getProductosPorId, postAñadirProducto, putModificarProducto, deleteProducto }
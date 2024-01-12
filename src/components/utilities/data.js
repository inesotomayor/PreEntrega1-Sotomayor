const productos = [
    {
        id: 1,
        nombre: "Nada es un error (2023)",
        precio: "$85.000,00",
        foto: '/images/nada-es-un-error.jpg',
        descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo',
        autor: 'Corita Kent',
        categoria: 'caligrafia',
        stock: 1
    },
    { 
      id: 2, 
      nombre: "Arcadia (2023)", 
      precio: "$120.000,00", 
      foto: '/images/arcadia.jpg', 
      descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo', 
      autor: 'Arch Hades',
      categoria: 'caligrafia', 
      stock: 2 
    },
    { 
      id: 3, 
      nombre: "Nunca sueño cuando estoy despierto (2023)", 
      precio: "$90.000,00", 
      foto: '/images/nunca-sueno.jpg', 
      descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo', 
      autor: 'Joan Miró',
      categoria: 'caligrafia', 
      stock: 4 
    },
    { id: 4, nombre: "Producto D", precio: "$110.000,00", foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 3 },
    { id: 5, nombre: "Producto E", precio: "$80.000,00", foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 5 },
    { id: 6, nombre: "Producto F", precio: "$100.000,00", foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 1 },
    { id: 7, nombre: "Producto G", precio: "$150.000,00", foto: '', descripcion: '', autor: '', categoria: 'lettering-digital', stock: 1 },
    { id: 8, nombre: "Producto H", precio: "$90.000,00", foto: '', descripcion: '', autor: '', categoria: 'lettering-digital', stock: 4 },
]

const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000) // Delay de 2 seg. para simular carga
  })
  
  export default traerProductos
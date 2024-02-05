const productos = [
    {
        id: 1,
        nombre: 'Nada es un error',
        ano: 2023,
        precio: 85000,
        foto: '/images/nada-es-un-error.jpg',
        descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo',
        autor: 'Corita Kent',
        categoria: 'caligrafia',
        stock: 1
    },
    { 
      id: 2, 
      nombre: 'Arcadia',
      ano: 2023,
      precio: 120000, 
      foto: '/images/arcadia.jpg', 
      descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo', 
      autor: 'Arch Hades',
      categoria: 'caligrafia', 
      stock: 2 
    },
    { 
      id: 3, 
      nombre: 'Nunca sueño cuando duermo',
      ano: 2023,
      precio: 90000, 
      foto: '/images/nunca-sueno.jpg', 
      descripcion: '30 x 40 cms. - Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo', 
      autor: 'Joan Miró',
      categoria: 'caligrafia', 
      stock: 4 
    },
    { id: 4, nombre: 'Producto D',
    ano: 2023, precio: 110000, foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 3 },
    { id: 5, nombre: 'Producto E',
    ano: 2023, precio: 80000, foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 5 },
    { id: 6, nombre: 'Producto F',
    ano: 2023, precio: 100000, foto: '', descripcion: '', autor: '', categoria: 'lettering', stock: 1 },
    { id: 7, nombre: 'Producto G',
    ano: 2023, precio: 150000, foto: '', descripcion: '', autor: '', categoria: 'lettering-digital', stock: 1 },
    { id: 8, nombre: 'Producto H',
    ano: 2023, precio: 90000, foto: '', descripcion: '', autor: '', categoria: 'lettering-digital', stock: 4 },
]

const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 2000) // Delay de 2 seg. para simular carga
  })
  
  export default traerProductos
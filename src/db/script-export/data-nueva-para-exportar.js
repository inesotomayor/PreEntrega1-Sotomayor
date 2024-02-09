// NO USAR CAMPO ID - lo pone Firebase automáticamente


const productos = [
  {
      nombre: 'Nada es un error',
      ano: 2023,
      precio: 85000,
      foto: '/images/nada-es-un-error.jpg',
      descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.',
      formato: '20 x 30 cms.',
      autor: 'Corita Kent',
      categoria: 'caligrafia',
      stock: 3
  },
  { 
    nombre: 'Arcadia',
    ano: 2023,
    precio: 120000, 
    foto: '/images/arcadia.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '17 x 32 cms.',
    autor: 'Arch Hades',
    categoria: 'caligrafia',
    stock: 2 
  },
  { 
    nombre: 'Nunca sueño cuando duermo',
    ano: 2023,
    precio: 90000, 
    foto: '/images/nunca-sueno.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Joan Miró',
    categoria: 'caligrafia',
    stock: 1 
  },
  { 
    nombre: 'A la vida le basta una grieta',
    ano: 2023,
    precio: 80000, 
    foto: '/images/a-la-vida-le-basta.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Ernesto Sábato',
    categoria: 'caligrafia',
    stock: 3 
  },
  { 
    nombre: 'Callan las cuerdas',
    ano: 2023,
    precio: 80000, 
    foto: '/images/callan-las-cuerdas.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Jorge Luis Borges',
    categoria: 'caligrafia',
    stock: 1
  },
  { 
    nombre: 'No corras más',
    ano: 2023,
    precio: 80000, 
    foto: '/images/no-corras-mas.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Luis Alberto Spinetta',
    categoria: 'caligrafia',
    stock: 4
  },
  { 
    nombre: 'Amarte como el mar ése',
    ano: 2023,
    precio: 80000, 
    foto: '/images/poema.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'caligrafia',
    stock: 1
  },
  { 
    nombre: 'Sangre',
    ano: 2023,
    precio: 80000, 
    foto: '/images/sangre.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '20 x 30 cms.',
    autor: 'Los Visitantes',
    categoria: 'caligrafia',
    stock: 5
  },
  { 
    nombre: 'Switch all of those screens',
    ano: 2023,
    precio: 80000, 
    foto: '/images/switch-screens.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '10 x 25 cms.',
    autor: 'Arch Hades',
    categoria: 'caligrafia',
    stock: 1
  },
  { 
    nombre: 'Lena',
    ano: 2023,
    precio: 80000, 
    foto: '/images/lena.jpg', 
    descripcion: 'Arches Cold Press 300grs - Schminke Horadam Aquarell, Faber Castell Polychromos, estilógrafo.', 
    formato: '13 x 18 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 1
  },
  { 
    nombre: 'Serenity',
    ano: 2024,
    precio: 60000, 
    foto: '/images/serenity.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Rejuvenate',
    ano: 2024,
    precio: 60000, 
    foto: '/images/rejuvenate.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Curiosity',
    ano: 2024,
    precio: 60000, 
    foto: '/images/curiosity.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Clarity',
    ano: 2024,
    precio: 60000, 
    foto: '/images/clarity.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Flourish',
    ano: 2024,
    precio: 60000, 
    foto: '/images/flourish.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Harmony',
    ano: 2024,
    precio: 60000, 
    foto: '/images/harmony.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Prosper',
    ano: 2024,
    precio: 60000, 
    foto: '/images/prosper.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Courage',
    ano: 2024,
    precio: 60000, 
    foto: '/images/courage.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Joy',
    ano: 2024,
    precio: 60000, 
    foto: '/images/joy.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Believe',
    ano: 2024,
    precio: 60000, 
    foto: '/images/believe.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Illuminate',
    ano: 2024,
    precio: 60000, 
    foto: '/images/illuminate.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Hope',
    ano: 2024,
    precio: 60000, 
    foto: '/images/hope.jpg', 
    descripcion: 'Pieza de lettering realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'lettering', 
    stock: 10
  },
  { 
    nombre: 'Cuatro plantas',
    ano: 2024,
    precio: 60000, 
    foto: '/images/plantas-4.jpg', 
    descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'ilustracion', 
    stock: 10
  },
  { 
    nombre: 'Ficus',
    ano: 2024,
    precio: 60000, 
    foto: '/images/plantas-3.jpg', 
    descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'ilustracion', 
    stock: 10
  },
  { 
    nombre: 'Suculenta 1',
    ano: 2024,
    precio: 60000, 
    foto: '/images/plantas-2.jpg', 
    descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'ilustracion', 
    stock: 10
  },
  { 
    nombre: 'Suculenta 2',
    ano: 2024,
    precio: 60000, 
    foto: '/images/plantas-1.jpg', 
    descripcion: 'Ilustración realizada en Procreate, impresa en papel fine art o canvas.', 
    formato: '35 x 35 cms.',
    autor: 'Ine Sotomayor',
    categoria: 'ilustracion', 
    stock: 10
  },
]

  export default productos
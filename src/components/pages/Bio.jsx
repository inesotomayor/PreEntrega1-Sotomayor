import React from 'react'

const Bio = () => {
    return (
        <main className="container-general flex items-start gap-10">
            <img src="/images/inesotomayor.jpg" alt="Ine Sotomayor" className="w-1/4" />
            <div>
                <p className="mb-4">
                    <strong>¡Hola! Soy Ine Sotomayor. :)</strong>
                </p>
                <p className="mb-12">
                    Escribo código como quien teje. <br />
                    Escribo letras como quien medita. <br />
                    Escribo, como quien respira.
                </p>

                <p className="mb-4">Soy diseñadora gráfica de la UBA y apasionada por la caligrafía (¡y las letras en general!) desde hace más de 20 años.
                </p>
                <p className="mb-4">Mi primer acercamiento al arte caligráfico fue en el taller de la artista y calígrafa Marina Soria en el año 2003. <br />
                    Desde entonces nunca más dejé de aprender con los mejores maestros, entre ellos Roballos/Naab, Silvia Cordero Vega, Yani Arabena, Giovanni de Faccio, Luca Barcellona, John Stevens, Yukimi Annand, Cláudio Gil, Christopher Haanes, Rachel Yallop y Brody Neuenschwander.
                </p>
                <p className="mb-4">También me apasiona el lettering en su versión analógica y digital, creando piezas únicas en Procreate.
                </p>
                <p className="mb-12">A lo largo de estos años abordé todos los estilos caligráficos, desde los formales e históricos hasta los más expresivos: Fundacional, Itálicas, Unciales, Romanas, Góticas, Inglesas, Neuland, Tiralíneas, Brushpen.</p>
                <p>
                    <strong>La caligrafía me convoca en todas sus formas y creeo que es una herramienta única que une lo bello, lo funcional y lo meditativo.</strong>
                </p>
            </div>
        </main>
    )
}

export default Bio
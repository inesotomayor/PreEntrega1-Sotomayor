import React from 'react'

const FormCheckout = ({ datosForm, guardarDatosInput, enviarForm }) => {
    return (
        <form className="flex flex-col gap-5">
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} className="border" />
            </div>
            <div>
                <label htmlFor="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" value={datosForm.direccion} onChange={guardarDatosInput} className="border" />
            </div>
            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} className="border" />
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} className="border" />
            </div>

            <button type="submit" onClick={enviarForm}>Enviar orden</button>
        </form>
    )
}

export default FormCheckout
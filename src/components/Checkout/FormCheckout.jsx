import React from 'react'

const FormCheckout = ({ datosForm, guardarDatosInput, formErrores, enviarForm }) => {
    return (
        <form className="flex flex-col gap-5">
            <div>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} className="border" />
                {formErrores.nombre && <p className="text-red-500 font-800 text-[12px]">{formErrores.nombre}</p>}
            </div>
            <div>
                <label htmlFor="direccion">Dirección</label>
                <input type="text" id="direccion" name="direccion" value={datosForm.direccion} onChange={guardarDatosInput} className="border" />
                {formErrores.direccion && <p className="text-red-500 font-800 text-[12px]">{formErrores.direccion}</p>}
            </div>
            <div>
                <label htmlFor="telefono">Teléfono</label>
                <input type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} className="border" />
                {formErrores.telefono && <p className="text-red-500 font-800 text-[12px]">{formErrores.telefono}</p>}
            </div>
            <div>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} className="border" />
                {formErrores.email && <p className="text-red-500 font-800 text-[12px]">{formErrores.email}</p>}
            </div>
            <div>
                <label htmlFor="emailRepetido">Repetir e-mail</label>
                <input type="email" id="emailRepetido" name="emailRepetido" value={datosForm.emailRepetido} onChange={guardarDatosInput} className="border" />
                {formErrores.emailRepetido && <p className="text-red-500 font-800 text-[12px]">{formErrores.emailRepetido}</p>}
            </div>

            <button type="submit" onClick={enviarForm}>Enviar orden</button>
        </form>
    )
}

export default FormCheckout
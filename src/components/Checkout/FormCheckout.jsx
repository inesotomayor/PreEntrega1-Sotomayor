import React from 'react'

const FormCheckout = ({ datosForm, guardarDatosInput, formErrores, enviarForm }) => {
    return (
        <form className="flex flex-col gap-5">
            <div>
                <label className="form-label" htmlFor="nombre">Nombre completo</label>
                <input className={`form-input ${formErrores.nombre ? 'form-input-error' : ''}`} type="text" id="nombre" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />
                {formErrores.nombre && <p className="form-error">{formErrores.nombre}</p>}
            </div>
            <div>
                <label className="form-label" htmlFor="direccion">Dirección</label>
                <input className={`form-input ${formErrores.direccion ? 'form-input-error' : ''}`} type="text" id="direccion" name="direccion" value={datosForm.direccion} onChange={guardarDatosInput} />
                {formErrores.direccion && <p className="form-error">{formErrores.direccion}</p>}
            </div>
            <div>
                <label className="form-label" htmlFor="telefono">Teléfono</label>
                <input className={`form-input ${formErrores.telefono ? 'form-input-error' : ''}`} type="number" id="telefono" name="telefono" value={datosForm.telefono} onChange={guardarDatosInput} />
                {formErrores.telefono && <p className="form-error">{formErrores.telefono}</p>}
            </div>
            <div>
                <label className="form-label" htmlFor="email">E-mail</label>
                <input className={`form-input ${formErrores.email ? 'form-input-error' : ''}`} type="email" id="email" name="email" value={datosForm.email} onChange={guardarDatosInput} />
                {formErrores.email && <p className="form-error">{formErrores.email}</p>}
            </div>
            <div>
                <label className="form-label" htmlFor="emailRepetido">Repetir e-mail</label>
                <input className={`form-input ${formErrores.emailRepetido ? 'form-input-error' : ''}`} type="email" id="emailRepetido" name="emailRepetido" value={datosForm.emailRepetido} onChange={guardarDatosInput} />
                {formErrores.emailRepetido && <p className="form-error">{formErrores.emailRepetido}</p>}
            </div>

            <button type="submit" onClick={enviarForm} className="btn btn-primary !font-[800] md:w-[300px] md:h-[60px] md:!rounded-[30px] md:!text-18px float-right mt-6">Enviar pedido</button>
        </form>
    )
}

export default FormCheckout
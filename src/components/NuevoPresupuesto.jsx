import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto }) => {


    const [mensaje, setMensaje] = useState("");

    const handlePresupuesto = (e) => {
        e.preventDefault()
        if (!presupuesto || presupuesto < 0) {
            setMensaje("No es un presupuesto valido")
            return
        }
        setMensaje("")
        setIsValidPresupuesto(true)
    }

    return (
        <div className='contenido-presupuesto contenedor sombra' onSubmit={handlePresupuesto}>
            <form className='formulario'>
                <div className='campo'>
                    <label>
                        Definir presupuesto
                    </label>
                    <input
                        className='nuevo-presupuesto'
                        type="text"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input
                    type="submit"
                    value="añadir"
                />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto
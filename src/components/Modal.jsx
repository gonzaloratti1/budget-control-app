import React from 'react'
import CerrarBtn from "../img/cerrar.svg"
import { useState } from 'react'


const Modal = ({ setModal, animarModal, setAnimarModal }) => {


    const [nombre, setNombre] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [categoria, setCategoria] = useState("");

    const ocultarModal = () => {
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {

        }, 500)
    }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>
            <form className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>
                <legend>
                    Nuevo Gasto
                </legend>

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre Gasto</label>
                    <input
                        type="text"
                        id='nombre'
                        placeholder='Añade el nombre del gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} />
                </div>

                <div className='campo'>
                    <label htmlFor='cantidad'>Cantidad</label>
                    <input
                        type="number"
                        id='cantidad'
                        placeholder='Añade la cantidad del gasto: ej. 300'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))} />
                </div>
                <div className='campo'>
                    <label htmlFor='categoria'>Categoria</label>
                    <select id='categoria'
                    value={categoria}
                    onChange={ e => setCategoria(e.target.value)}>
                        <option value="">-- Seleccione --</option>
                        <option value="ahorro">Ahorro </option>
                        <option value="comida">Comida </option>
                        <option value="casa">Casa </option>
                        <option value="gastos">Gastos Varios </option>
                        <option value="ocio">Ocio </option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input type="submit" value="Añadir Gasto" />
            </form>
        </div>
    )
}

export default Modal
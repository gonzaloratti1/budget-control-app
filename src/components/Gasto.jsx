import React from 'react'
import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from "react-swipeable-list"

import 'react-swipeable-list/dist/styles.css';
import IconoAhorro from "../img/icono_ahorro.svg"
import IconoCasa from "../img/icono_casa.svg"
import IconoComida from "../img/icono_comida.svg"
import IconoGastos from "../img/icono_gastos.svg"
import IconoOcio from "../img/icono_ocio.svg"
import IconoSalud from "../img/icono_salud.svg"
import IconoSubs from "../img/icono_suscripciones.svg"
import { formatearFecha } from '../helpers'

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    subscripiones: IconoSubs,
    casa: IconoCasa
}

const Gasto = ({ gasto }) => {

    const { categoria, nombre, cantidad, id, fecha } = gasto

    const leadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => console.log("Editar")}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )


    const trailingActions = () => (
        <TrailingActions>
            <SwipeAction destructive={true}  onClick={() => console.log("Eliminar")}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return (
        <SwipeableList>
            <SwipeableListItem
                leadingActions={leadingActions()}
                trailingActions={trailingActions()}>
                <div className='gasto sombra'>
                    <div className='contenido-gasto'>
                        <img src={diccionarioIconos[categoria]} />
                        <div className='descripcion-gasto'>
                            <p className='categoria'>
                                {categoria}
                            </p>
                            <p className='nombre-gasto'>
                                {nombre}
                            </p>
                            <p className='fecha-gasto'>
                                Agregado el: {''}
                                <span>{formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className='cantidad-gasto'>
                        $ {cantidad}
                    </p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
    )
}

export default Gasto
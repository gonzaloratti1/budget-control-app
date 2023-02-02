import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValidPresupuesto, setIsValidPresupuesto, gastos }) => {
    return (
        <header>
            <h1>
                Planifificador de gastos
            </h1>
            {isValidPresupuesto ? (
                <ControlPresupuesto presupuesto={presupuesto} gastos={gastos}/>
            ) : (<NuevoPresupuesto
                presupuesto={presupuesto}
                setPresupuesto={setPresupuesto}
                setIsValidPresupuesto={setIsValidPresupuesto}
                isValidPresupuesto={isValidPresupuesto}
            />  )}

        </header>
    )
}

export default Header
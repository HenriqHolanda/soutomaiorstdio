import React from 'react';
import Image from 'next/image';
import styles from '../styles/components/menu.module.css'
import CalendarC from './calendar';
import EstoqueC from './estoque';

const Componentes = [<CalendarC/>, <EstoqueC/>]


const MenuC = () => {

    const Componentes = [<CalendarC/>, <EstoqueC/>]

    return (

        <div className={styles.Container}>
            <h1>HelloWorld</h1>
        </div>

    )
}

export default MenuC
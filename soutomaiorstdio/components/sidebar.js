import styles from '../styles/components/sidebar.module.css'
import Image from 'next/image'
import Logo from '../public/A_R_mono3.png'
import { useState } from 'react';

const SideBarC = () => {

    const [componentIndex, setComponentIndex] = useState(0);

    const handleClick1 = () => {
        setComponentIndex(0);
        console.log(componentIndex)
      };
    
    const handleClick2 = () => {
        setComponentIndex(1);
        console.log(componentIndex)
      };

    const handleClick3 = () => {
        setComponentIndex(2);
        console.log(componentIndex)
      };
    
    const handleClick4 = () => {
        setComponentIndex(3);
        console.log(componentIndex)
      };

    return(
        <div className={styles.Container}>
            <div className={styles.LogoImg}>
                <Image src={Logo} style={{width: '13vw', height: 'auto'}}/>
            </div>
            <div className={styles.Links}>
                <button onClick={handleClick1}>Calendario</button>
                <button onClick={handleClick2}>Estoque</button>
                <button onClick={handleClick3}>Financeiro</button>
                <button onClick={handleClick4}>CRM</button>
            </div>
        </div>
    )

}

export default SideBarC
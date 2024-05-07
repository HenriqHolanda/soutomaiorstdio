import MenuC from "../../components/menu"
import SideBarC from "../../components/sidebar"
import styles from "../../styles/pages/home.module.css"

export default function homepage(){

    return(

        <div className={styles.Container}>
            <div className={styles.box1}>
                <SideBarC/>
            </div>
            <div className={styles.box2}>
                <MenuC/>
            </div>
        </div>

        
    )

}
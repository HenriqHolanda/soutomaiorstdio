import React from 'react';
import Image from 'next/image';
import LoginForm from '../../components/login_form';
import styles from '../../styles/login.module.css';
import MyImage from '../../public/LogoSM2.png';

export default function LoginPage(){
    return(


        <div className={styles.login}>

            <div className = {styles.logo}>
                <div className = {styles.logo_text}>
                    <h1>Your place to work</h1>
                    <h1>Plan. Create. Control</h1>
                </div>
                <Image src = {MyImage} style={{ width: '24rem', height: 'auto' }} />
            </div>

            <LoginForm />

        </div>
    )
}
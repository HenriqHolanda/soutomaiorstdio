import React, { useState } from 'react';
import styles from '../styles/login_form.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Email:', email);
    console.log('Senha:', password);

    router.push('/aspas/menu')


  };

  return (

    <div className={styles.login_form}>
      <h1>Sing in to Woorkroom</h1>
      <form onSubmit={handleSubmit}>

        <div className={styles.input}>
          <label id ='email' htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.input}>
          <label id='password' htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style = {{marginBottom: 1}}
          />
        </div>

        <div className={styles.questions}>
        
          <div className={styles.questions_checkbox}>
            <input type="checkbox" id="meuCheckbox" name="meuCheckbox" />
            <label htmlFor="meuCheckbox">Remember-me</label>
          </div>
          
          <p>Forgot password?</p>

        </div>

        <div className={styles.submit}>
        <button id="submit" type="submit">Sing In</button>
        <p>Don´t have an account</p>
        </div>

      </form>
    </div>
  );

};

export default LoginForm;
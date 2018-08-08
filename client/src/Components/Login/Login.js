import React from 'react'
import './Login.css'
const Login = (props) => (
    <form action="" className='login' onSubmit={props.authHandler}>
        <h2 className='form-title' >
            { props.isSignup ? "Iniciar Sesion" : "Crear cuenta"}
        </h2>
        <div className="field">
            <label>Correo Electronico <span className='required'>*</span></label>
            <input type="email" placeholder='@' onChange={(event) => props.emailHandler(event.target.value)}/>        
        </div>
        <div className="field">
            <label>Contrasena <span className='required'>*</span></label>
            <input type="password" placeholder='******' onChange={(event) => props.passwordHandler(event.target.value)}/>        
        </div>        
        <div className="field">
            {   
                props.isSignup 
                ? <p className="message">Aun no tienes una cuenta ? <span onClick={ props.signUpHandler}>Registrate</span></p>
                : <p className="message">Ya tienes una cuenta ? <span onClick={props.signUpHandler}>Iniciar sesion</span></p> 
            }            
        </div>
        { props.error ? ( <p className='error'> Ha ocurrido un error : {props.error} </p>): null }                        
        <button type="submit">
            { props.isSignup ? "Entrar" : "Registrarse"}
        </button>
    </form>
)

export default Login
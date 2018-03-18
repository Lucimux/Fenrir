import React from 'react'
import './Login.css'
const Login = (props) => (
    <form action="" className='login'>
        <h2 className='form-title' >Iniciar Sesion</h2>
        <div className="field">
            <label>Correo Electronico <span className='required'>*</span></label>
            <input type="email" placeholder='@'/>        
        </div>
        <div className="field">
            <label>Contrasena <span className='required'>*</span></label>
            <input type="password" placeholder='******'/>        
        </div>
        <button type="submit">
            Entrar  &#10145;
        </button>
    </form>
)

export default Login
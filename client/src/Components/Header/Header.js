import React, {Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = (props) => (
    <header>
        <h1 className='title'>Fenrir</h1>                   
        {
            props.auth 
            ? <Fragment>
                <button key="19y2ue" className='navItem'>
                    <NavLink to='/news-feed' activeClassName='active'> Noticias</NavLink>
                </button>,
                <button key="19y2ue1r" className='navItem'>
                    <NavLink to='/logout' activeClassName='active'> Cerrar Sesion</NavLink>
                </button>
              </Fragment>
            : null
            
        }                    
    </header>
)

export default Header
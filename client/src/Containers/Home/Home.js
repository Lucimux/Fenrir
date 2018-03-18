import React, { Component } from 'react'
import Footer from '../../Components/Footer/Footer'
import Login from '../../Components/Login/Login'
import Fenrir from '../../Assets/Fenrir.png'
import './Home.css'

export default class Home extends Component {
    render () {
        return (
            <main className='grid-layout'>
                <header>
                    <h1 className='title'>Fenrir</h1>                
                </header>
                <section className='content'>
                    <div className='first'>
                        <img src={Fenrir} className='logo' alt="Fenrir Logo"/>
                        <p className='quote'>
                            <q>
                            Dime y lo olvido, enséñame y lo recuerdo, involúcrame y lo aprendo                            
                           </q>                           
                           <br/>Benjamín Franklin
                        </p>
                    </div>
                    <div className='seccond'>
                        <div>
                            <Login/>
                        </div>
                    </div>
                </section>
                <Footer/>
            </main>
        )
    }
}
import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Profile.css'

export default class Profile extends Component {

    
    render() {
        return (
            <section className='profile-grid-layout'>
                <Header/>
                <section className='profile-content'>
                    <div className='index'>
                        <h2 className='index-header'>Temario</h2>
                        <ol>
                            <li>Hola </li>
                            <li>
                                Hola                                 
                            </li>
                            <li>Hola </li>
                            <li>Hola </li>
                            <li>Hola </li>
                            <li>Hola </li>
                            <li>Hola Como estas</li>                            
                        </ol>
                    </div>
                    <div className='topic'>

                    </div>
                </section>
                <Footer/>
            </section>
        )
    }
}


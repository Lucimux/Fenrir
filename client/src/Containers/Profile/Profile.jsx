import React, { Component } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Markdown from 'react-markdown'
import axios from 'axios'
import './Profile.css'

export default class Profile extends Component {
    state = {
        index: [
            {
                name: "Introduccion",
                key: "Intro"                
            },
            {
                name: "Metodologia Pentesting",
                key: "Methodology"           
            },
            {
                name:"Inyeccion SQL",
                key: "SQL"                
            },
            {
                name:"XSS Scripting",
                key: "XSS"
            },
            {
                name: "Modificando peticiones HTTP",
                key: "Header"
            }
        ],
        btnIndex: 0,
        tema: null,
        htmlMode: 'raw'
    }

    componentDidMount(){
        axios.get('http://localhost:3000/api/tema/Intro')
            .then(tema => {
                this.setState({
                    tema: tema.data.content
                })            
            })  
            .catch(err => {
                console.log(err)
            })
    }
    
    themeClickHandler(tema){        
        axios.get(`http://localhost:3000/api/tema/${tema}`)
        .then(tema => {
            this.setState({
                tema: tema.data.content
            })            
        })  
        .catch(err => {
            console.log(err)
        })
    }

    backHandler = () => {
        this.setState((prevState) => {
            return {
                btnIndex: prevState.btnIndex > 0 ? prevState.btnIndex -1 : 0
            }
        })
        this.themeClickHandler(this.state.index[this.state.btnIndex].key)
    }

    nextHandler = () => {
        this.setState((prevState) => {
            return {
                btnIndex: prevState.btnIndex < prevState.index.length -1 ? prevState.btnIndex + 1 : prevState.index.length - 1
            }
        })
        this.themeClickHandler(this.state.index[this.state.btnIndex].key)
    }


    render() {
        
        return (
            <section className='profile-grid-layout'>
                <Header auth={true}/>
                <section className='profile-content'>
                    <div className='index'>
                        <h2 className='index-header'>Temario</h2>
                        <ol>
                            { this.state.index.map((tema)=>(
                                <li key={tema.key} onClick={() => this.themeClickHandler(tema.key)}>{tema.name}</li>
                            ))}    
                        </ol>
                    </div>
                    <div className='topic'>
                        <Markdown 
                            source={this.state.tema} 
                            skipHtml={this.state.htmlMode === 'skip'}
                            escapeHtml={this.state.htmlMode === 'escape'}
                            className='markdown'
                        />
                        <div className='btn-controll'>
                            <button className='btn-prev' onClick={this.backHandler}>Anterior</button>
                            <button className='btn-next' onClick={this.nextHandler}>Siguiente</button>
                        </div>
                    </div>
                </section>
                <Footer/>
            </section>
        )
    }
}


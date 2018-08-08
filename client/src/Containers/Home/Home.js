import React, { Component } from 'react'
import {connect} from 'react-redux'
import Footer from '../../Components/Footer/Footer'
import { Redirect } from 'react-router-dom'
import Login from '../../Components/Login/Login'
import Header from '../../Components/Header/Header'
import Fenrir from '../../Assets/Fenrir.png'
import * as actions from '../../store/actions/index'

import './Home.css'

class Home extends Component {

    state = {
        isSignUp: true,
        password: null,
        email: null
    }

    isSignupHandler = () => {
        this.setState(prevState => {
            return { 
                isSignUp: !prevState.isSignUp,                              
            }
        })        
    }

    authHandler = (event) => {
        event.preventDefault()
        this.props.onAuth(this.state.email,this.state.password,this.state.isSignUp)
    }

    emailHandler = (email) => {
        this.setState({
            email: email
        })
    }   

    passwordHandler = (password) => {
        this.setState({
            password: password
        })
    }
    render () {
        let authRedirect = null 
        if(this.props.isAuthenticated) {
            authRedirect = ( <Redirect to='/profile'/>)
        }
        return (
            <main className='grid-layout'>
                {authRedirect}
                <Header/>                    
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
                        <Login 
                            isSignup={this.state.isSignUp} 
                            signUpHandler={this.isSignupHandler} 
                            authHandler={this.authHandler}
                            passwordHandler={this.passwordHandler}
                            emailHandler={this.emailHandler}
                            error={this.props.error}
                        />                                                
                        
                    </div>
                </section>
                <Footer/>
            </main>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.token !== null,
        error: state.error    
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email,password,isSignUp) => dispatch(actions.auth(email,password,isSignUp)),
        onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Home)
import React, { Component } from 'react';
import Home from './Containers/Home/Home'
import Profile from './Containers/Profile/Profile'
import { Route, Switch, withRouter, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {authCheckState} from './store/actions/index'
import Logout from './Containers/Profile/Logout/Logout'
import NewsFeed from './Containers/Profile/News/News'
import './App.css';

class App extends Component {
    componentDidMount(){
      this.props.onCheckAuth()
    }

    render() {
      let routes = (
        <Switch>
          <Route path='/' exact component={Home}/>
          <Redirect to='/'/>
        </Switch>
      )

      if(this.props.isAuth){
        routes = (
          <Switch>
            <Route path='/news-feed' component={NewsFeed}/>
            <Route path='/profile' component={Profile}/>
            <Route path='/logout' component={Logout}/>
            <Redirect to='/profile'/>
          </Switch>                
        )
      }

      return (   
          <div>
            {routes}
          </div>            
      );
    }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.token !== null
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCheckAuth: () => dispatch(authCheckState())
  }
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App))

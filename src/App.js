import React from 'react';
import {Route} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';


class App extends React.Component {

  unsubscribeFromAuth = null;

  constructor(){
    super();

    this.state = {currentUser: null};
  }

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(user);
    });
    
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/shop" component={ShopPage}/>
        <Route exact path="/signIn" component={SignInAndSignUpPage}/>
      </div>
    );
  }
}

export default App;

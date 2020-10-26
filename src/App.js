import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './Components/Navbar';
import {ProductList} from './Components/ProductList';
import {Details} from './Components/Details';
import {Cart} from './Components/Cart';
import {Default} from './Components/Default';
import {Modal} from './Components/Modal';
import Footer from './Components/footer';
import Landing from './Components/LandingPage.js/landing'

class App extends React.Component {

  render () {
  return (
    <React.Fragment>
     <Navbar />
     <Switch>
       <Route exact path='/' component={Landing}></Route>
       <Route exact path="/products" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route component={Default}></Route>
     </Switch>
     <Footer />
     <Modal />
     
    </React.Fragment>
  );

  }
    
}

export default App;

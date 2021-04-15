import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar} from './Components/Navbar';
import {ProductList} from './Components/ProductList';
import {Details} from './Components/Details';
import {Cart} from './Components/Cart';
import {Default} from './Components/Default';
import Footer from './Components/footer';
import Landing from './Components/LandingPage.js/landing'
import SignUp from './Components/auth/SignUp';
import Checkout from './Components/Checkout';
import {WishList} from './Components/WishList/WishList';
import UserModal from './Components/User/UserModal';
import { UserAccount } from './Components/User/Account';
import UserOrders from './Components/User/Orders';
import AdminPage from './Components/Admin/Admin';


function App() {
  const spinner = document.getElementById('spinner');
  
  if (spinner && !spinner.hasAttribute('hidden')) {
    spinner.setAttribute('hidden', 'true');
  }
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });




/*useEffect(() => {
 const checkLoggedIn  = async () => {
   let token = localeStorage.getItem('auth-token');
   if (token === null) {
     //localStorage.setItem('auth-token', '');
     token='';
   }
   const tokenRes = await Axios.post(
     'http://localhost:5000/users/tokenIsValid',
     null,
     {headers: { 'x-auth-token': token } }
     );
    if (tokenRes.data){
      const userRes = await Axios.get('http://localhost:5000/users/', {
        headers: { 'x-auth-token': token },
      });
    
    setUserData({
      token,
      user: userRes.data,
    });
 }
};

checkLoggedIn();
}, []);*/


  return (
    <React.Fragment>
        <Navbar />
       <Switch>
          <Route exact path='/' component={Landing}></Route>
          <Route path="/products" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route path='/signup' component={SignUp}></Route>
          <Route path='/checkout' component={Checkout}></Route>
          <Route path='/wishlist' component={WishList}></Route>
          <Route path='/account' component={UserAccount}></Route>
          <Route path='/orders' component={UserOrders}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Footer />
        <UserModal />
  <UserAccount />
    </React.Fragment>
  );

  
    
}

export default App;

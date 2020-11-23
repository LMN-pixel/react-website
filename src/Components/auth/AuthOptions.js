import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context.js/UserContext';
import LogIn from './SignIn';


export default function AuthOptions() {

    /*const { userData, setUserData } = useContext(UserContext)

    const history = useHistory();


   // const register = () => history.push('/signup');
    const logout = () => {
        setUserData({

            token: undefined,
            user: undefined,
        });
        //localStorage.setItem("auth-token", "");
    };*/

    return (
        //<>
       // {//userData.user ? (
         //   <p>name</p>
           // ) : (
            //<p onClick={register} >Sign In</p>

            <p>Sign In</p>
       // )
   //
    //</>
    );
}
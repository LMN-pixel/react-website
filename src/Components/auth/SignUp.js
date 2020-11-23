import React, { useState, useContext } from "react";
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import UserContext from '../../context.js/UserContext';
import styled from 'styled-components';
import {ButtonContainer} from '../Button';


export default function SignUp(){

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [passwordCheck, setPasswordCheck] = useState();
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    //const [error, setError] = useState();

    const { setUserData } = useContext(UserContext);
    const history = useHistory();

     const submit = async (e) => {
        e.preventDefault();

        try {
            const newUser = { email, password, passwordCheck, firstName, lastName};
            let loginRes = await Axios.post('http://localhost:3000/users/', {
                newUser
            });
           setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            //localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');
        } catch (err) {
            console.log(err)
        }
    };

        return (
            <SignUpWrapper>
            <form onSubmit={submit}>
                <h3 className='text-center mb-3'>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor='first-name'>First name</label>
                    <input id='first-name' type="text" className="form-control" placeholder="First name" 
                    onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor='last-name'>Last name</label>
                    <input id='last-name' type="text"  className="form-control" placeholder="Last name" 
                     onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor='signup-email'>Email address</label>
                    <input id='signup-email' type="email" className="form-control" placeholder="Enter email" 
                     onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor='signin2-password'>Password</label>
                    <input id='signin2-password' type="password" className="form-control" placeholder="Enter password" 
                     onChange={(e) => setPassword(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor='signin-password'>Password</label>
                    <input id='signin-password' type="password" className="form-control" placeholder="Enter password" 
                     onChange={(e) => setPasswordCheck(e.target.value)}/>
                </div> 

                <ButtonContainer type="submit" className="sign_btn text-center btn btn-block">Sign Up</ButtonContainer>
                
            </form>
            </SignUpWrapper>
        );
    
}


const SignUpWrapper = styled.form `
position: relative;
background-color: white;
max-width: 500px;
min-width:200px;
margin: 200px auto;
padding: 40px 10px;
border: 0.05px solid #ccc;
.sign_btn {
    width: 30%;
    margin: 0 auto;
}
.form-group{
    padding: 0 25px;
}
`;


import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import UserContext from '../../context.js/UserContext';
import Axios from 'axios';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "../Button";

export default function Login() {

    /*const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    
    const { setUserData } = useContext(UserContext);
    const history = useHistory();

    const submit = async (e) => {
        e.preventDefault();
        try {
            const loginUser = { email, password };
            const loginRes = await Axios.post(
                'http://localhost:3000/users/',
                loginUser
            );
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            console.log(loginRes.data.token);
            //localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');
        } catch(err) {
            console.log(err);
        }
    };*/
       
        return ( 
           /* <SignInWrapper>
            <form //onSubmit={submit}
            >
               <h3 className='text-center mb-3'>Sign In</h3>

                <div className="form-group">
                    <label htmlFor='signin-email'>Email address</label>
                    <input id='signin-email' type="email" className="form-control" placeholder="Enter email" name='email'
                    //onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='signin-password'>Password</label>
                    <input id='signin-password' type="password" className="form-control" placeholder="Enter password" name='password'
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <p className="forgot-password">
                     <a href="#">Forgot password?</a>
                    </p>
                </div>

                <ButtonContainer type="submit" className="sign_btn btn btn-block">Sign In</ButtonContainer>
                <p className="forgot-password text-center mt-3 ">
                    <Link to='/signup'><ButtonContainer className='sign_btn text-center btn btn-block'>Create Account</ButtonContainer></Link>
                </p>
            </form>
            </SignInWrapper>*/

            <form //onSubmit={submit}
            >
                <h6 className='text-center mb-3'>Sign In</h6>

                <div className="form-group">
                    <input id='signin-email' type="email" className="form-control required" style={{height: '25px', margin:'0'}}placeholder="Enter email" name='email'
                    //onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>

                <div className="form-group">
                    <input id='signin-password' type="password" className="form-control required" style={{height: '25px' }} placeholder="Enter password" name='password'
                    //onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"  className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <p className="forgot-password">
                     <a href="#">Forgot password?</a>
                    </p>
                </div>

                <ButtonContainer type="submit" style={{ fontSize:'.9em', padding:'0'}}className="btn btn-block ">Sign In</ButtonContainer>
                <p className="forgot-password text-center">
                    <Link to='/signup'><ButtonContainer style={{ fontSize:'.9em', padding:'0'}} className='text-center btn btn-block'>Create Account</ButtonContainer></Link>
                </p>
            </form>
        );
   
}


/*const SignInWrapper = styled.form `
position: relative;
background-color: white;
margin: 200px auto 50px auto;
padding: 40px 10px;
border: 0.05px solid #ccc;
.sign_btn {
    width: 30%;
    margin: 0 auto;
}
.form-group{
    padding: 0 25px;
}
custom-control-input {
    color: black !important;

}


`;*/


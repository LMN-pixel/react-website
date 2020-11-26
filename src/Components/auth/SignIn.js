import React, { useState, useContext } from "react";
import { useHistory } from 'react-router-dom';
import {UserConsumer, UserProvider} from '../../context.js/UserContext';
import {Link} from 'react-router-dom';
import { ButtonContainer } from "../Button";
import { ProductConsumer } from "../../context.js/context";


export default function Login() {
    return (

            <ProductConsumer>
                {(value) => (
                    <UserProvider>

                <UserConsumer>
                    {(user) => (
                        
                        
                        <form onSubmit={(e) => {user.submitSignIn(e)}}>
                <h6 className='text-center mb-3'>Sign In</h6>

                <div className="form-group">
                    <input id='signin-email' type="email" className="form-control"required style={{height: '25px', margin:'0'}}placeholder="Enter email" 
                   onChange={(e)=>{user.handleEmail(e)}} 
                   />
                </div>

                <div className="form-group">
                    <input id='signin-password' type="password" className="form-control" required style={{height: '25px' }} placeholder="Enter password" name='password'
                   onChange={(e)=>{user.handlePassword(e)}} 
                   />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox"  className="custom-control-input" id="customCheck1" required/>
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                    <p className="forgot-password">
                     <a href="#">Forgot password?</a>
                    </p>
                </div>
              
                        
                <ButtonContainer type="submit" style={{ fontSize:'.9em', padding:'0'}}className="btn btn-block ">Sign In</ButtonContainer>
                <p className="forgot-password text-center">
                    <Link to='/signup'><ButtonContainer onClick={()=>{value.closeModal()}}style={{ fontSize:'.9em', padding:'0'}} className='text-center btn btn-block'>Create Account</ButtonContainer></Link>
                </p>
               
                 
            </form>
                   )}
               </UserConsumer>
                   </UserProvider>
                   )}
               </ProductConsumer>
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


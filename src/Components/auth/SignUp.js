import React from "react";
import { useHistory } from 'react-router-dom';
import {UserConsumer, UserProvider} from '../../context.js/UserContext';
import styled from 'styled-components';
import {ButtonContainer} from '../Button';


export default function SignUp(){

    //const history = useHistory();

    /* const submit = async (e) => {
        e.preventDefault();
        

        try {
           // const newUser = { email, password, passwordCheck, firstName, lastName};
            //let loginRes = await Axios.post('/users/', {
              //  newUser
            //});
          /* setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            //localStorage.setItem('auth-token', loginRes.data.token);
            history.push('/');
        } catch (err) {
            console.log(err)
        }
    };*/

        return (
            <SignUpWrapper>
                <UserProvider>

                <UserConsumer>
                    {user => (
                        
                        <form onSubmit={(e)=>{user.submitSignUp(e)}} >
                <h3 className='text-center mb-3'>Sign Up</h3>

                <div className="form-group">
                    <label htmlFor='first-name'>First name</label>
                    <input id='first-name' type="text" className="form-control" required placeholder="First name" 
                    onChange={(e)=>{user.handleFirstName(e)}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='last-name'>Last name</label>
                    <input id='last-name' type="text"  className="form-control" required placeholder="Last name" 
                    onChange={(e)=>{user.handleLastName(e)}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='signup-email'>Email address</label>
                    <input id='signup-email' type="email" className="form-control" required placeholder="Enter email" 
                    onChange={(e)=>{user.handleEmail(e)}}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='signin-password'>Password</label>
                    <input id='signin-password' type="password" className="form-control" required placeholder="Enter password"
                    onChange={(e)=>{user.handlePassword(e)}} 
                    />
                </div>

                

                <div className="form-group">
                    <label htmlFor='signin2-password'>Confirm Password</label>
                    <input id='signin2-password' type="password" className="form-control" required placeholder="Confirm password"
                     onChange={(e)=>{user.handleCheckPassword(e)}}  
                     />
                </div> 

                   
                    
                    <ButtonContainer type="submit" className="sign_btn text-center btn btn-block">Sign Up</ButtonContainer>
                
            </form>
                    )}
                </UserConsumer>
                    </UserProvider>
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


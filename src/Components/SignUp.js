import React, { Component } from "react";
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class SignUp extends Component {
    render() {
        return (
            <SignUpWrapper>
            <form>
                <h3 className='text-center mb-3'>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <ButtonContainer type="submit" className="sign_btn text-center btn btn-block">Sign Up</ButtonContainer>
                <p className="forgot-password text-center mt-3 ">
                    Already registered? <br></br>
                    <Link to='/signin'><ButtonContainer className='sign_btn text-center btn btn-block'>Sign in</ButtonContainer></Link>
                </p>
            </form>
            </SignUpWrapper>
        );
    }
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
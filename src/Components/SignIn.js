import React, { Component } from "react";
import styled from 'styled-components';
import { ButtonContainer } from "./Button";
export default class Login extends Component {
    render() {
        return (
            <SignInWrapper>
            <form>
                <h3 className='text-center mb-3'>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
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

                <ButtonContainer type="submit" className="sign_btn btn btn-block">Submit</ButtonContainer>
                
            </form>
            </SignInWrapper>
        );
    }
}

const SignInWrapper = styled.form `
position: relative;
background-color: white;
max-width: 500px;
min-width:200px;
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


`;
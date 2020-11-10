import React, { Component } from "react";
import styled from 'styled-components';
import { ButtonContainer } from "./Button";

import * as authActions from './actions/authActions';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";

class Login extends Component {

    
   /*} state = {
        redirectToReferrer: false,
        email: '',
        password: ''
    }

    textHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    loginHandler = (e) => {
        e.preventDefault();
        this.props.authenticate(this.state.email, this.state.password)
        .then(response => {
            console.log(response);
            if(response.hasOwnProperty('token')){
                window.localStorage.setItem('auth', JSON.stringify(response))
                this.setState({
                    redirectToReferrer: true
                });
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    componentDidMount() {
        if(!this.props.auth.isAuthenticated){
            this.props.getToken()
            .then(result => {
                
                if(result){
                    this.setState({
                        redirectToReferrer: true
                    });
                }

            })
            .catch(er => {
                console.log(er);
            });
        }
    }
*/


    render() {

       /* if (this.state.redirectToReferrer){
            return <Redirect to='/' />
        }*/
        return ( 
            <SignInWrapper>
            <form onSubmit={this.loginHandler} autocomplete='off'>
                <h3 className='text-center mb-3'>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={this.state.email} className="form-control" placeholder="Enter email" name='email' />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={this.state.password} className="form-control" placeholder="Enter password" name='password'/>
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

const mapDispatchToProps = dispatch => {
    return {
        authenticate: (email, password) => dispatch(authActions.authenticate(email, password)),
        getToken: () => dispatch(authActions).getToken()
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
import React, { Component } from "react";
import styled from 'styled-components';
import {Link, Redirect} from 'react-router-dom';
import {ButtonContainer} from './Button';

import * as authActions from './actions/authActions';
import { connect } from 'react-redux';


class SignUp extends Component {

    state = {
        redirectToreferrer: false,
        signupForm: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    }

    textHandler = (e) => {
        const signupForm = this.state.signupForm;
        const updateSignupForm = {
            ...signupForm,
            [e.target.name]: e.target.value
        }
        this.setState({
            signupForm: updateSignupForm
        })
    }

    signupHandler = (e) => {
        e.preventDefault();
        const { signupForm } = this.state;
        if (signupForm.firstName === ''){
            this.setError(true, 'Enter First Name');
            return;
        }
        if (signupForm.lastName === ''){
            this.setError(true, 'Enter Last Name');
            return;
        }
        const emailPattern = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/);
        if(!emailPattern.test(signupForm.email)){
            this.setError(true, 'Invalid Email Address'); 
            return;
        }
        if(signupForm.email === ''){
            this.setError(true, 'Enter Email');
            return;
        }
        if(signupForm.password === ''){
            this.setError(true, 'Enter Password');
            return;
        }
    

        const user = {
            firstName: signupForm.firstName,
            lastName: signupForm.lastName,
            email: signupForm.email,
            password: signupForm.password
        }
    }


        componentDidMount() {
            if(!this.props.auth.isAuthenticated){
                this.props.getToken()
                .then(result => {
                    if(result) {
                        this.setState({
                            redirectToreferrer: true
                        });
                    }
                })
                .catch(er => {
                    console.log(er);
                })
            }
        }
    

    render() {

        const { signupForm, redirectToreferrer } = this.state;

        if(redirectToreferrer){
            return <Redirect to='/' />
        }

        return (
            <SignUpWrapper>
            <form onSubmit={this.signupHandler} autocomplete='off'>
                <h3 className='text-center mb-3'>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" value={signupForm.firstName} textHandler={this.textHandler} className="form-control" placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" value={signupForm.lastName} textHandler={this.textHandler} className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={signupForm.email} textHandler={this.textHandler} className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={signupForm.password} textHandler={this.textHandler} className="form-control" placeholder="Enter password" />
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

const mapDispatchToProps = dispatch => {
    return {
        signup: (user)  => dispatch(authActions.signup(user)),
        getToken: () => dispatch(authActions.getToken())
    }
}

const mapStateToProps = state =>{
    return {
        auth: state.auth
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
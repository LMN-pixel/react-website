import React from 'react';
import axios from 'axios';

const UserContext = React.createContext();

class UserProvider extends React.Component {
    state = {
        loggedIn:false,
        user:undefined,
        token:undefined,
        token:undefined,
        firstName:undefined,
        lastName:undefined,
        email:undefined,
        password:undefined,
        checkPassword:undefined,
        phoneNumber:undefined,
        country:undefined,
        address:undefined,
        addInfo:undefined,
        payment: 'On delivery',
       

    };

    componentDidMount(){
    //if theres a user, set  user params,
    //else set default
    };

    setUser = () => {

        //check if user has signed in
        //if signed in user == user.id
        //set name to user.firstName
        //set wishlist to user.wishlist 
        //set email, phonenumber, address, to that of user
    };

    //for changing any and all user info:

    handleEmail = (e) => {
        let tempEmail = e.target.value;
        this.setState(()=>{
            return {
                email: tempEmail
            }
        })
    };

    handlePassword = (e) => {
        let tempPass = e.target.value;
        this.setState(()=>{
            return{
                password: tempPass
            }
        })
    };
    
    handleCheckPassword = (e) =>{
        let tempcheckPass = e.target.value;
        this.setState(()=>{
            return{
                checkPassword: tempcheckPass
            }
        })
    };

    handleFirstName = (e) => {
        let tempName = e.target.value;
        this.setState(()=>{
            return{
                firstName: tempName
            }
        })
    };

    handleLastName = (e) => {
        let tempName = e.target.value;
        this.setState(()=>{
            return{
                lastName: tempName
            }
        })
    }

    handleCountry = (e) => {
        let tempCountry = e.target.value;
        this.setState(()=>{
            return{
                country: tempCountry
            }
        })
    };

    handleAddress = (e) =>{
        let tempAddress = e.target.value;
        this.setState(()=> {
            return{
                address: tempAddress
            }
        })
    };
    handlePhoneNum = (e) => {
        let tempPhone = e.target.value;
        this.setState(() => {
            return{
                phoneNumber: tempPhone
            }
        })
    };
    handleAddInfo = (e) => {
        let tempInfo = e.target.value;
        this.setState(() => {
            return{
                addInfo: tempInfo
            }
        })
    };
    
    handlePaymentMethod= (e) => {
        let tempPayment = e.target.value;
        this.setState(()=>{
            return{
                payment: tempPayment
            }
        })
    };
    
    submitSignUp = async (e) => {
        e.preventDefault();
    let firstName = this.state.firstName;
    let lastName = this.state.lastName;
    let email = this.state.email;
    let password = this.state.password;

   try { const newUser = {firstName, lastName, email, password};
    const loginRes = await axios.post('/users/', newUser);

    console.log(loginRes.data);

    localStorage.setItem('auth-token', loginRes.data.token);
    this.setState(()=> {
        return {
            token: loginRes.data.token,
            user: loginRes.data.user,
        }
    })
} catch(err) {
    console.log(err);
}

    };

    submitSignIn = async(e) => {
        e.preventDefault();
        let email = this.state.email;
        let password = this.state.password;

            try {
                const loginUser = { email, password };
                const loginRes = await axios.post(
                    '/users/',
                    loginUser
                );
                console.log(loginRes.data);
                localStorage.setItem('auth-token', loginRes.data.token);
                //history.push('/');
                this.setState(() =>{
                    return {
                    token: loginRes.data.token,
                    user: loginRes.data.user,
                    }
                });
            } catch(err) {
                console.log(err);
            }        

    };

    handleLogOut = () => {

        localStorage.setItem("auth-token", "");
        this.setState(()=>{
            return {
            token: undefined,
            user: undefined,
            }
        });
    };
    



    render() {
        return (
            <UserContext.Provider 
            value={{
                ...this.state,
                setUser : this.setUser,
                handleEmail : this.handleEmail,
                handlePassword : this.handlePassword,
                handleFirstName : this.handleFirstName,
                handleLastName : this.handleLastName,
                handlePhoneNum : this.handlePhoneNum,
                handleCountry : this.handleCountry,
                handleCheckPassword : this.handleCheckPassword,
                handleAddress : this.handleAddress,
                handleAddInfo : this.handleAddInfo,
                handlePaymentMethod : this.handlePaymentMethod,
                submitSignUp : this.submitSignUp,
                submitSignIn: this.submitSignIn,
                handleLogOut: this.handleLogOut

            }}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
                


}

const UserConsumer = UserContext.Consumer;

export {UserProvider, UserConsumer}

import React, { useState } from 'react';
import styled from 'styled-components';
import { ButtonContainer } from '../Button';
import SideBar from './Accountsidemenu';
import UserContext, { UserConsumer, UserProvider } from '../../context.js/UserContext';
import Axios from 'axios';


export function UserAccount(){


   /* const submit = async(e) => {
        e.preventDefault();
        
            const user = {firstName, lastName,email,phoneNumber,country,town,address};
           // const userData = await Axios.put(`/user/`, user);
        
    };*/

    return (
        <AccountWrap>

        <div className='container-fluid row'>
        <div className='col-2 d-none d-lg-block'>
            <SideBar />
        </div>
        <div className='col' style={{marginTop:'150px'}}>

            <h5 className='text-center font-weight-bold'>My Profile</h5>
            <div>
                <UserProvider>
                    <UserConsumer>
                        {(user) => (

                <form>
                    <h6 style={{fontSize:'.9em'}} className='text-uppercase font-weight-bold mt-3'> My Details</h6>
                    <div>
                        <div className='row mt-3'>
                            <div className='col-md-6 col-12 mt-0'>
                                <div style={{position:'relative', marginTop:'5px'}} className='form-group c-dynamic_field required '>
                                    <label className='form-control-label c-form_label c-form_label--required' htmlFor='firstname'>
                                      First Name
                                    
                                    </label>
                                    <input type='text' className='form-control' id='firstname' maxLength='40' required
                                       onChange={(e)=>{user.handleFirstName(e)}}>{user.firstName}</input>

                                </div>
                            </div>
                            <div className='col-md-6 col-12 mt-0'>
                                <div style={{position:'relative', marginTop:'5px'}} className='form-group required c-dynamic_field '>
                                    <label className='form-control-label c-form_label c-form_label--required' htmlFor='lastname'>
                                      Last Name
                                    
                                    </label>
                                    <input type='text' className='form-control' id='lastname' maxLength='40' required
                                       onChange={(e)=>{user.handleLastName(e)}}>{user.lastName}</input>

                                </div>
                            </div>
                            
                        </div>

                        <div className='row required mb-15'>
                            <div className='col-md-6 col-12 mt-0'>
                                <div style={{position:'relative', marginTop:'5px'}} className='form-group c-dynamic_field required '>
                                    <label className='form-control-label c-form_label c-form_label--required' htmlFor='phonenumber'>
                                      Phone Number
                                    
                                    </label>
                                    <input type='text' className='form-control' id='phonenumber' required
                                       onChange={(e)=>{user.handlePhoneNum(e)}}>{user.phoneNumber}</input>

                                </div>
                            </div>

                            <div className='col-md-6 col-12 mt-0'>
                                <div style={{position:'relative', marginTop:'5px'}} className='form-group c-dynamic_field required '>
                                    <label className='form-control-label c-form_label c-form_label--required' htmlFor='email'>
                                      Email
                                    
                                    </label>
                                    <input type='email' className='form-control' id='email' required
                                       onChange={(e)=>{user.handleEmail(e)}}>{user.email}</input>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h6 style={{fontSize:'.9em'}} className='text-uppercase font-weight-bold mt-3'>Delivery Address</h6>
                        <div>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-group row mb-0 mt-0'>
                                        <div className='col-3 col-md-2'>
                                            <label className='col-form-label c-form_label'>
                                                Country
                                            </label>
                                        </div>
                                        <div className='form-group col-10'>
                                            <select required onChange={(e)=>{user.handleCountry(e)}} className='form-control custom-select' id='country'>
                                                <option value='KE'>Kenya</option>
                                                <option value='UG'>Uganda</option>
                                                <option value='TZ'>Tazania</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12 col-md-6'>
                                    <div className='form-group row mb-0 mt-0'>
                                        <div className='col-3 col-md-2'>
                                            <label className='col-form-label c-form_label'>
                                                City/Town
                                            </label>
                                        </div>
                                        <div className='form-group col-10'>
                                            <select className='form-control custom-select' id='town' required>
                                                <option value='Nairobi'>Within Nairobi</option>
                                                <option value='Nairobi'>Outside Nairobi</option>
                                                <option value='UG'>Uganda</option>
                                                <option value='TZ'>Tazania</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-12 col-md-6'>
                                    <div className='form-group mt-0 c-dynamic_field'>
                                        <label className='form-control-label c-form_label' htmlFor='address'>
                                            Address (Estate/Area)
                                        </label>
                                        <input type='text' className='form-control' id='address'
                                        onChange={(e)=>{user.handleAddress(e)}}>{user.address}</input>
                                            
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='form-group'>
                                    <ButtonContainer type='submit' className='btn btn-save btn-block btn-primary--hover'>Save Changes</ButtonContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
               
                                       )}
               
                                   </UserConsumer>
                               </UserProvider>

            </div>
        </div>
            
                
        </div>
        
        </AccountWrap>

    );
}
const AccountWrap = styled.form `

.c-form_label, 
.c-form_label--required {
    display: inline-flex;
}
.c-dynamic_field label {
    position: absolute;
    top: 0;
    left: 6px;
    display: inline-flex;
    padding: 0 5px;
    background-color: #fff;
    transform: translateY(-50%);
    transition: font-size .2s ease-in-out;
    will-change: contents;
    line-height: 2.1;
    color: #999;
}
`;
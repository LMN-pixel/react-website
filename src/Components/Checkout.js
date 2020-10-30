import { render } from '@testing-library/react';
import React from 'react';
import {ButtonContainer} from './Button';



export default class Checkout extends React.Component{

    
    render() {


        return (
            

                      
            
            <main class="mt-5 pt-4">
                <div class="container wow fadeIn">
        
              
                    <h2 class="my-5 h2 text-center">Checkout</h2>
        
              
                        <div class="row">
        
                
                             <div class="col-md-8 mb-4">
        
                 
                                <div class="card">
        
                   
                                    <form class="card-body">
                                        <p className='text-uppercase font-weight-bold mb-5'>
                                            Delivery Address
                                        </p>
                            
                                        <div class="row">                                                
                        
                                            <div class="col-md-6 mb-2">                                  
                                                <div class="md-form ">
                                                    <label for="firstName" class="">First name</label>
                                                    <input type="text" id="firstName" class="form-control"/>
                                                    
                                                </div>        
                                            </div>                             
                        
                                            <div class="col-md-6 mb-2">                                  
                                                <div class="md-form">
                                                    <label for="lastName" class="">Last name</label>
                                                    <input type="text" id="lastName" class="form-control"/>
                                                    
                                                </div>        
                                            </div>
                               
                                        </div>                          
                                             
                      
                                        <div class="md-form mb-4">
                                            <label for="email" class="">Email</label>
                                            <input type="text" id="email" class="form-control" placeholder="youremail@example.com"/>
                                            
                                        </div>

                                        <div className='mb-5'>
                                        Phone Number
                                        <br></br>
                                        <div class="col-2 d-inline-block mx-0 mt-2">        
                                                <label for="code"></label>
                                                <select class="custom-select" id="code" required>
                                                    <option value="">Choose...</option>
                                                    <option>254</option>
                                                    <option>255</option>
                                                    <option>256</option>

                                                </select>
                                        </div> 
                                        <div class="md-form d-inline-block mx-0">
                                            <input type="tel" id="tel-no" class="form-control" placeholder="712345678"/>
                                        </div>
                                        </div>
        
                      
                                        <div class="md-form mb-5">
                                            <label for="address" class="">Address</label>
                                            <input type="text" id="address" class="form-control" placeholder="1234 Main St"/>
                                            
                                        </div>
        
                      
                                        <div class="md-form mb-5">
                                            <label for="address-2" class="">Address 2 (optional)</label>
                                            <input type="text" id="address-2" class="form-control" placeholder="Apartment or suite"/>
                                            
                                        </div>
        
                     
                                        <div class="row">
                              
                                            <div class="col-lg-4 col-md-12 mb-4">        
                                                <label for="country">Country</label>
                                                <select class="custom-select d-block w-100" id="country" required>
                                                    <option value="">Choose...</option>
                                                    <option>Kenya</option>
                                                    <option>Uganda</option>
                                                    <option>Tanzania</option>

                                                </select>
                                                <div class="invalid-feedback">
                                                    Please select a valid country.
                                                </div>        
                                            </div>
                        
                                            <div class="col-lg-4 col-md-6 mb-4">
        
                                                <label for="state">County/region</label>
                                                <select class="custom-select d-block w-100" id="state" required>
                                                    <option value="">Nairobi</option>                                                    
                                                    <option>Baringo</option>
                                                    <option>Bomet</option>
                                                    <option>Bungoma</option>
                                                    <option>Busia</option>
                                                    <option>Elgeyo-Marakwet</option>
                                                    <option>Embu</option>
                                                    <option>Garissa</option>
                                                    <option>Homa Bay</option>
                                                    <option>Isiolo</option>
                                                    <option>Kajiado</option>
                                                    <option>Kakamega</option>
                                                    <option>Kericho</option>
                                                    <option>Kiambu</option>
                                                    <option>Kilifi</option>
                                                    <option>Kirinyaga</option>
                                                    <option>Kisii</option>
                                                    <option>Kisumu</option>
                                                    <option>Kitui</option>
                                                    <option>Kwale</option>
                                                    <option>Laikipia</option>
                                                    <option>Lamu</option>
                                                    <option>Machakos</option>
                                                    <option>Makueni</option>
                                                    <option>Mandera</option>
                                                    <option>Marsabit</option>
                                                    <option>Meru</option>
                                                    <option>Migori</option>
                                                    <option>Mombasa</option>
                                                    <option>Murang'a</option>
                                                    <option>Nairobi</option>
                                                    <option>Nakuru</option>
                                                    <option>Nandi</option>
                                                    <option>Narok</option>
                                                    <option>Nyamira</option>
                                                    <option>Nyandarua</option>
                                                    <option>Nyeri</option>
                                                    <option>Samburu</option>
                                                    <option>Siaya</option>
                                                    <option>Taita-Taveta</option>
                                                    <option>Tana River</option>
                                                    <option>Tharaka-Nithi</option>
                                                    <option>Trans-Nzoia</option>
                                                    <option>Turkana</option>
                                                    <option>Uasin Gishu</option>
                                                    <option>Vihiga</option>
                                                    <option>Wajir</option>
                                                    <option>West Pokot</option>

                                                </select>
                                            <div class="invalid-feedback">
                                                Please provide a valid region.
                                            </div>
        
                                            </div>
                        
                                            <div class="col-lg-4 col-md-6 mb-4">
        
                                                <label for="city">City</label>
                                                <select class="custom-select d-block w-100" id="city" required>
                                                    <option value=''>Choose city</option>
                                                    <option>A</option>
                                                    
                                                </select>
                                                <div class="invalid-feedback">
                                                    City required.
                                                </div>
        
                                            </div>
                            
                                        </div>

                                        <div class="md-form mb-5">
                                            <label for="address-2" class="">Additional information</label>
                                            <textarea cols='50' rows='6' id="address-2" class="form-control" placeholder="Additional information"/>
                                        </div>
                     
        
                                        <hr></hr>
        
                                        <div class="custom-control custom-checkbox">
                                            <input type="checkbox" class="custom-control-input" id="save-info"/>
                                            <label class="custom-control-label" for="save-info">Save this information for next time</label>
                                        </div>
        
                                        <hr></hr>
        
                                        <div class="d-block my-3">
                                            <h4 className='text-center font-weight-bold mb-5'>Payment Method</h4>
                                            <div class="custom-control custom-radio">
                                                <input id="mpesa" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                                <label class="custom-control-label" for="mpesa">Mpesa</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input id="credit" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                                <label class="custom-control-label" for="credit">Credit card/Debit card</label>
                                            </div>
                                            <div class="custom-control custom-radio">
                                                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" required/>
                                                <label class="custom-control-label" for="paypal">Paypal</label>
                                            </div>
                                        </div>
                                        
                                        <hr class="mb-4"></hr>
                                        <ButtonContainer type="submit" className='w-100'>
                                                Continue to checkout
                                            
                                        </ButtonContainer>
        
                                    </form>
        
                                </div>
                  
        
                            </div>
                        
                                                                      
                            </div>
              
        
                </div>
            </main>
            
            
            )
        }
         
        
    
}
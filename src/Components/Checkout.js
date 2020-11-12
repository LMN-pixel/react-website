import React from 'react';
import {ButtonContainer} from './Button';




export default class Checkout extends React.Component{
    render() {
        return (
                    
            <main className="mt-5 pt-4">
                <div className="container wow fadeIn">              
                    <h2 className="my-5 mt-5 pt-5 h2 text-center">Checkout</h2>
                        <div className="row">
                            <div className="mx-auto mb-4">
                                <div className="card">

                                    <form className="card-body">
                                        <p classNameName='text-uppercase font-weight-bold mb-5'>
                                            Delivery Address
                                        </p>
                            
                                        <div className="row">                                                
                        
                                            <div className="col-md-6 mb-2">                                  
                                                <div className="md-form ">
                                                    <label for="firstName" className="">First name</label>
                                                    <input type="text" id="firstName" className="form-control"/>
                                                    
                                                </div>        
                                            </div>                             
                        
                                            <div className="col-md-6 mb-2">                                  
                                                <div className="md-form">
                                                    <label for="lastName" className="">Last name</label>
                                                    <input type="text" id="lastName" className="form-control"/>
                                                    
                                                </div>        
                                            </div>
                               
                                        </div>                          
                                             
                      
                                        <div className="md-form mb-4">
                                            <label for="email" className="">Email</label>
                                            <input type="text" id="email" className="form-control" placeholder="youremail@example.com"/>
                                            
                                        </div>

                                        <div classNameName='mb-5'>
                                        Phone Number
                                        <br></br>
                                        <div className="col-2 d-inline-block mx-0 mt-2">        
                                                <label for="code"></label>
                                                <select className="custom-select" id="code" required>
                                                    <option value="">Choose...</option>
                                                    <option>254</option>
                                                    <option>255</option>
                                                    <option>256</option>

                                                </select>
                                        </div> 
                                        <div className="md-form d-inline-block mx-0">
                                            <input type="tel" id="tel-no" className="form-control" placeholder="712345678"/>
                                        </div>
                                        </div>
        
                      
                                        <div className="md-form mb-5">
                                            <label for="address" className="">Address</label>
                                            <input type="text" id="address" className="form-control" placeholder="1234 Main St"/>
                                            
                                        </div>
        
                      
                                        <div className="md-form mb-5">
                                            <label for="address-2" className="">Address 2 (optional)</label>
                                            <input type="text" id="address-2" className="form-control" placeholder="Apartment or suite"/>
                                            
                                        </div>
        
                     
                                        <div className="row">
                              
                                            <div className="col-lg-4 col-md-12 mb-4">        
                                                <label for="country">Country</label>
                                                <select className="custom-select d-block w-100" id="country" required>
                                                    <option value="">Choose...</option>
                                                    <option value='Kenya'>Kenya</option>
                                                    <option value='Uganda'>Uganda</option>
                                                    <option value='Tanzania'>Tanzania</option>

                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid country.
                                                </div>        
                                            </div>
                        
                                            <div className="col-lg-4 col-md-6 mb-4">
        
                                                <label for="state">County/region</label>
                                                <select className="custom-select d-block w-100" id="state" required>
                                                    <option value="Nairobi">Nairobi</option>                                                    
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
                                            <div className="invalid-feedback">
                                                Please provide a valid region.
                                            </div>
        
                                            </div>
                        
                                            <div className="col-lg-4 col-md-6 mb-4">
        
                                                <label for="city">City</label>
                                                <select className="custom-select d-block w-100" id="city" required>
                                                    <option value=''>Choose city</option>
                                                    <option>A</option>
                                                    
                                                </select>
                                                <div className="invalid-feedback">
                                                    City required.
                                                </div>
        
                                            </div>
                            
                                        </div>

                                        <div className="md-form mb-5">
                                            <label for="address-2" className="">Additional information</label>
                                            <textarea cols='50' rows='6' id="address-2" className="form-control" placeholder="Additional information"/>
                                        </div>
                     
        
                                        <hr></hr>
        
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="save-info"/>
                                            <label className="custom-control-label" for="save-info">Save this information for next time</label>
                                        </div>
        
                                        <hr></hr>
        
                                        <div className="d-block my-3">
                                            <h4 classNameName='text-center font-weight-bold mb-5'>Payment Method</h4>
                                            <div className="custom-control custom-radio">
                                                <input id="mpesa" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                                <label className="custom-control-label" for="mpesa">Mpesa</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                                <label className="custom-control-label" for="credit">Credit card/Debit card</label>
                                            </div>
                                            <div className="custom-control custom-radio">
                                                <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                                <label className="custom-control-label" for="paypal">Paypal</label>
                                            </div>
                                        </div>
                                        
                                        <hr className="mb-4"></hr>
                                        <ButtonContainer type="submit" classNameName='w-100'>
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
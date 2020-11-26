import React from 'react';
import { UserConsumer, UserProvider } from '../context.js/UserContext';
import {ButtonContainer} from './Button';

import { ProductConsumer } from '../context.js/context';
import CartTotals from './Cart/CartTotals';




export default class Checkout extends React.Component{

    

    render() {

      //const { country, address } = this.props.user;
    
    const handleClick = () => {
        document.getElementById('useraddress').style.display = 'none';
        document.getElementById('changeaddress').style.display = 'block';
    }


    /*const submit = async (e) => {
        e.preventDefault();
        try {

            const checkoutUser = {name, email, phoneNum, address, addInfo};
            const checkoutUserRes = await API.put('/user/1000', checkoutUser);
          

           
        } catch(err){
            console.log(err);
        }

    };*/
        return (
              <UserProvider>

            <main className="mt-5 pt-4">
                <div className="container">              
                    <h2 className="my-5 mt-5 pt-5 h2 text-center">Checkout</h2>

                        <div className='row'>
                            

                            <div className='col-12 col-md-6 mr-5 mb-4' >
                                <div  id='useraddress' style={{border:'0.05px solid #ccc', borderRadius:'10px',padding:'2px 0 3px 10px'}}>
                                            <h6 className='text-uppercase font-weight-bold my-3 pb-2' style={{borderBottom:'0.05px solid #ccc'}} >Default Address</h6>
                                    <div >
                                        <article >
                                            <p>Country</p>
                                            <p>address</p>
                                        
                                        </article>
                                    </div>
                                    <ButtonContainer onClick={handleClick}>Edit Address</ButtonContainer>
                                </div>

                                <div id='changeaddress' style={{display:'none'}}className="row">
                                    <div className="mx-auto mb-4">
                                
                                <UserConsumer>
                                    {(value) => (
                                        
                                        <form /// onSubmit={submit}
                                        >
                                        <p classNameName='text-uppercase font-weight-bold mb-5'>
                                            Delivery Address
                                        </p>
                                                                           
                                        <div className='row'>

                                            <div className="md-form mb-4">                                  
                                                <label for="firstName" className="">First Name</label>
                                                <input type="text" id="firstName" className="form-control"
                                                    onChange={(e)=>{value.handleFirstName(e)}}
                                                    />                        
                                            </div> 

                                            <div className="md-form mb-4">                                  
                                                <label for="firstName" className="">Last Name</label>
                                                <input type="text" id="firstName" className="form-control"
                                                    onChange={(e)=>{value.handleLastName(e)}}
                                                    />                        
                                            </div>                          
                                        </div>
                                                                                         
                                         
                      
                                        <div className="md-form mb-4">
                                            <label for="email" className="">Email</label>
                                            <input type="text" id="email" className="form-control" placeholder="youremail@example.com"
                                                onChange={(e)=>{value.handleEmail(e)}}
                                                />
                                            
                                        </div>

                                     
                                        <div className="md-form mb-4">
                                            <label for="tel-no" className="">Phone Number</label>
                                            <input type="tel" id="tel-no" className="form-control" 
                                            onChange={(e)=>{value.handlePhoneNum(e)}}
                                            />
                                        </div> 
                             
                     
                                        <div className="row">
                              
                                            <div className="col-lg-4 col-md-12 mb-4">        
                                                <label for="country">Country</label>
                                                <select onChange={(e)=>{value.handleCountry(e)}} className="custom-select d-block w-100" id="country" required>
                                                    <option value='Kenya'>Kenya</option>
                                                    <option value='Uganda'>Uganda</option>
                                                    <option value='Tanzania'>Tanzania</option>
                                                </select>
                                                <div className="invalid-feedback">
                                                    Please select a valid country.
                                                </div>        
                                            </div>
                        
                                            <div className="col-lg-4 col-md-6 mb-4">

                                                        <label for="city">Town</label>
                                                <ProductConsumer>
                                                    {val => (
                                                        <select  className="custom-select d-block w-100" id="city" required  onChange={(e) => {val.shipping(e)}}>
                                                            <option value="200" >Nairobi</option>
                                                            <option value="300">Outside Nairobi</option>
                                                            <option value="500">Uganda</option>
                                                            <option value="500">Tanzania</option>      
                                                        </select>
                                                    )}
                                                </ProductConsumer>
        
                                                <div className="invalid-feedback">
                                                    Town required.
                                                </div>
        
                                            </div>
                            
                                        </div>

                                        <div className="md-form mb-5">
                                            <label for="address" className="">Estate/Area</label>
                                            <input type="text" id="address" className="form-control" placeholder="1234 Main St"
                                                onChange={(e)=>{value.handleAddress(e)}}
                                                />
                                            
                                        </div>  

                                        <div className="md-form mb-5">
                                            <label for="address-2" className="">Additional information</label>
                                            <textarea cols='50' rows='6' id="address-2" className="form-control" placeholder="Additional information"
                                                onChange={(e)=>{value.handleAddInfo(e)}}
                                                />
                                        </div>  
                                        <ButtonContainer>Update Address</ButtonContainer>      
                                    </form>
                                            )}
                                </UserConsumer>

                                </div>                 
                                                                                                                  
                             </div>
                            
                                <UserConsumer>
                                    {(value) => (
                                        
                                        <div id='useraddress' className="d-block mb-3 mt-5" style={{border:'0.05px solid #ccc', borderRadius:'10px',padding:'2px 0 3px 10px'}}>
                                            <h6 className='font-weight-bold text-uppercase my-3 pb-2' style={{borderBottom:'0.05px solid #ccc'}}>Payment Method</h6>
                                            
                                            <div onChange={(e)=>{value.handlePaymentMethod(e)}}>
                                                <div className="custom-control custom-radio">
                                                    <input id="mpesa" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                                    <label className="custom-control-label" htmlFor="mpesa">Mpesa</label>
                                                </div>
                                                <div className="custom-control custom-radio">
                                                    <input id="pay-on-del" name="paymentMethod" type="radio" className="custom-control-input" required/>
                                                    <label className="custom-control-label" htmlFor="pay-on-del">Pay on Delivery</label>
                                                </div>
                                            </div>
                                        
                                        
                                        <hr className="mb-4"></hr>
                                        <ButtonContainer type="submit">
                                                Continue to checkout
                                            
                                        </ButtonContainer>
                                    </div>
                                        )}
                                </UserConsumer>
                                </div>

                               
                                <div className='col-12 col-md-4'>
                                    <ProductConsumer>
                                        {(value) => (
                                            
                                            <CartTotals value={value} />
                                            )}
                                    </ProductConsumer>
                                </div>
                        </div>
                        
              
        
                </div>
            </main>
            
            
        </UserProvider>      
            );  
        
    
}
}
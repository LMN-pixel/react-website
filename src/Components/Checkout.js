import React, { useState, useContext } from 'react';
import UserContext from '../context.js/UserContext';
import {ButtonContainer} from './Button';
import API from '../baseapi';
import { ProductConsumer } from '../context.js/context';
import CartTotals from './Cart/CartTotals';




export default class Checkout extends React.Component{

    render() {
    
    const handleClick = () => {
        document.getElementById('useraddress').style.display = 'none';
        document.getElementById('changeaddress').style.display = 'block';
    }

   // const [phoneNum, setPhoneNum] = useState();
    //const [email, setEmail] = useState();
    //const [address, setAddress] = useState();
    //const [name, setName] = useState();
    //const [addInfo, setAddInfo] = useState();

    //const { setUserData } = useContext(UserContext);

    {/*const submit = async (e) => {
        e.preventDefault();
        try {

            const checkoutUser = {name, email, phoneNum, address, addInfo};
            const checkoutUserRes = await API.post('user/checkout', checkoutUser);
            console.log(checkoutUserRes.data.name);
            console.log(checkoutUserRes.data.phoneNum);

           
        } catch(err){
            console.log(err);
        }

    };*/}
        return (
                    
            <main className="mt-5 pt-4">
                <div className="container">              
                    <h2 className="my-5 mt-5 pt-5 h2 text-center">Checkout</h2>

                        <div className='row'>
                            

                            <div className='col-12 col-md-6 mr-5 mb-4' >
                                <div  id='useraddress' style={{border:'0.05px solid #ccc', borderRadius:'10px',padding:'2px 0 3px 10px'}}>
                                            <h6 className='text-uppercase font-weight-bold my-3 pb-2' style={{borderBottom:'0.05px solid #ccc'}} >Default Address</h6>
                                    <div >
                                        <article >
                                            <p>Country, Town</p>
                                            <p>Estate/Area</p>
                                        
                                        </article>
                                    </div>
                                    <ButtonContainer onClick={handleClick}>Edit Address</ButtonContainer>
                                </div>

                                <div id='changeaddress' style={{display:'none'}}className="row">
                                    <div className="mx-auto mb-4">
                                

                                    <form className="" //onSubmit={submit}
                                    >
                                        <p classNameName='text-uppercase font-weight-bold mb-5'>
                                            Delivery Address
                                        </p>
                                                                           
                        
                                        <div className="md-form mb-4">                                  
                                                <label for="firstName" className="">Full Name</label>
                                                <input type="text" id="firstName" className="form-control"
                                                //onChange={(e) => setName(e.target.value)}
                                                />                        
                                        </div>                           
                                                                                         
                                         
                      
                                        <div className="md-form mb-4">
                                            <label for="email" className="">Email</label>
                                            <input type="text" id="email" className="form-control" placeholder="youremail@example.com"
                                            //onChange={(e) => setEmail(e.target.value)}
                                            />
                                            
                                        </div>

                                     
                                        <div className="md-form mb-4">
                                            <label for="tel-no" className="">Phone Number</label>
                                            <input type="tel" id="tel-no" className="form-control" placeholder="712345678"
                                            //onChange={(e) => setPhoneNum(e.target.value)}
                                            />
                                        </div> 
                             
                     
                                        <div className="row">
                              
                                            <div className="col-lg-4 col-md-12 mb-4">        
                                                <label for="country">Country</label>
                                                <select className="custom-select d-block w-100" id="country" required>
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
                                             //onChange={(e) => setAddress(e.target.value)}
                                             />
                                            
                                        </div>  

                                        <div className="md-form mb-5">
                                            <label for="address-2" className="">Additional information</label>
                                            <textarea cols='50' rows='6' id="address-2" className="form-control" placeholder="Additional information"
                                            //onChange={(e) => setAddInfo(e.target.value)}
                                            />
                                        </div>  
                                        <ButtonContainer>Update Address</ButtonContainer>      
                                    </form>
                                </div>                 
                                                                                                                  
                             </div>
                            
                    
                                <div id='useraddress' className="d-block mb-3 mt-5" style={{border:'0.05px solid #ccc', borderRadius:'10px',padding:'2px 0 3px 10px'}}>
                                            <h6 className='font-weight-bold text-uppercase my-3 pb-2' style={{borderBottom:'0.05px solid #ccc'}}>Payment Method</h6>
                                            <div>
                                                <div  className="custom-control custom-radio">
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
            
            
            )        
        
    
}
}
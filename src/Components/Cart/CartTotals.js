import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default function CartTotals({value}) {

    const {cartSubTotal, cartTax, cartTotal, currency} = value;

   return (
        <React.Fragment>
            
                    <TotalWrapper>
                        <div className='cart_summary'>
                            <div className='sticky_cont'>

                        <div className=' total_box'>
                            
                                <h3 className='summary_title'> Order Summary</h3>
                            
                            <div className='summary_subtotal'>
                                <span className='title_label'>
                                   subtotal : 
                                </span>
                                <span className='title_value'>
                                    {currency} {cartSubTotal} 
                                </span>
                            </div>

                            <div className='summary_subtotal shipping_cost'>
                                <span className='title_label'>
                                   shipping : 
                                 </span>
                                <span className='title_value'>
                                    {currency} {cartTax} 
                                </span>
                            </div>

                            <div>
                                <div className='summary_subtotal grand_total'>
                                    <span className='title_label'>
                                    Total:
                                    </span>
                                    <span className='title_value'>
                                        {currency} {cartTotal} 
                                    </span>
                                </div>
                            </div>
                            <div className='text-center btn btn-dark btn-block checkout_btn'>
                                    <Link to='/checkout'>
                                      <span className='checkout_text'>
                                          Proceed to Checkout
                                         </span>
                                    </Link>
                                
                            </div>
                            </div>
                        </div>
                        </div>
                    </TotalWrapper>
                            
                
        </React.Fragment>
    )
}

const TotalWrapper = styled.div `
.cart_summary{
    
    margin: 13px auto;
    color: #000;
    
    
}
.sticky_cont{
    margin-top: 100px;
   
}
.total_box {
    
    padding: 0 20px 30px;
}
.summary_title {
    text-align: center;
    text-transform: uppercase;
    color: black;
    font-size: 18px;
    padding: 20px 0 14px;
    font-weight: 700;
    border-bottom: 1px solid #ccc;

}
.title_label {
    float: left;
}
.title_value {
    float: right;
}
.summary_subtotal {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-bottom: 12px;
}
.shipping_cost {
    margin-bottom: 9px;
    padding-bottom: 3px;
    border-bottom: 1px solid #ccc;
}
.grand_total {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 0;
    padding-bottom: 10px;
}
.checkout_text {
    font-size: 16px;
    font-weight: 700;
    color: white;
    text-transform: capitalize;
    
}


@media (min-width: 1366px){
    .cart_summary {
        width: 390px;
        margin: -99px 0 0;
       position:sticky;
        float: right;
    }
    .total_box {
        width: inherit;
        border-radius: 5px;
        background-color: #f0f0f0;
    }
    .shipping_cost {
        margin-bottom: 13px;
    }
}
`;



import React from 'react';
import styled from 'styled-components';

export default function CartItem({item,value}) {

    const {id,title,img1,price, total,count,color} = item;
    const {increment, decrement, removeItem, currency} = value;

return  (
    <CartItemWrapper>
    <div className='product_card d-flex flex-row'>
        <div className='product_card-img'>
            <img 
               src={img1} 
               className='product_card-photo'
               alt={title} 
            />
        </div>
        <div className='product_card-attributes'>
            <div className='product_card-content'>
                <div className='product_card-title'>
                    <div className='product_card-name pt-5'>
                        {title}
                    </div>
                    <div className='product_card-remove order_recap-hide'>
                        <div 
                        className='cart-icon btn product_card-remove_btn'
                        onClick={() => {removeItem(id)}}
                        >
                            <i className='fas fa-trash' aria-hidden='true'></i>
                        </div>
                    </div>
                    <div className='product_card-attr_section'>
                        <span className='product_card-attr_item line-item-attributes mt-5'>

                            Color: {color} 
                            
                        </span>
                    </div>
                </div>
            </div>
            <div className='product_card-footer'>
                <div className='product_card-total'>
                   {currency} {price}
                </div>
                <div className='product_card-qty line-item-quantity'>
                    <span className='d-xl-none'>

                    Qty:
                    </span>
                    <div>
                        
                            <span 
                            className='btn btn-light'
                            onClick={() => decrement(id)}
                            > -
                            </span>
                            <span className='btn p-0'>
                            {count}
                            </span>
                            <span 
                            className='btn btn-light'
                            onClick={() => increment(id)}
                            > +
                            </span>
                        
                    </div>
                </div>
                <div className='product_card-total_price line-item-total-price'>
                    <div className='pricing'>
                         {total}
                    </div>
                </div>
            </div>
        </div>
         
        </div>
       
    </CartItemWrapper>
)
}

const CartItemWrapper = styled.div `
.product_card {
padding: 20px 0 27px;
border-top: 1px solid #f0f0f0;
color: #000;
}
.product_card-img {
width: 75px;
margin-right: 10px;
}
.product_card-photo {
display: block;
width: 100%;
margin-bottom: 5px;
}
.product_card-attributes {
position: relative;
width: calc(100% - 85px);
}
.product_card-title {
padding-right: 40px;
padding-bottom: 11px;
line-height: 18px;
}
.product_card-name {
font-size: .875rem;
font-weight: 700;
color: #000;
}
.line-item-attributes, .line-item-option {
font-size: .813rem;
margin: 0;
}

.product_card-total {
margin-bottom: 18px;
}
.product_card-qty {
margin-bottom: 14px;
}
.product_card-total_price {
display: none;
}
.pricing {
font-size: 1em;
font-weight: bolder;
}
.product_card-remove_btn {
    position: absolute;
    top: 0;
    right: 0;
    padding: 0 10px;
    border: none;
    background: none;
}

@media (min-width: 1366px) {

.product_card-img {
width: 108px;
margin-right: 20px;
}
.product_card-attributes {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
width: calc(100% - 128px);
}
.product_card-content {
width: 200px;
}

.product_card-attr_section {
margin-bottom: 4px;
}
.product_card-remove_btn {
    top: 50%;
    margin-top: -7px;
}
.product_card-footer {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
-webkit-box-align: center;
-ms-flex-align: center;
align-items: center;
width: 392px;
text-align: center;
}
.product_card-total {
width: 117px;
margin-bottom: 0;
}
.product_card-total_price {
display: block;
width: 169px;
}

}
`;
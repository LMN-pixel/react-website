import React from 'react';
import styled from 'styled-components';

export default function CartColumns() {

return (
<CartTitleWrapper>
<div className='product_label'>

    <div className='product_label-items column_title'>
        Item(s)
    </div>
    <div className='column_title product_label-product  d-none d-xl-block'>
        Product
    </div>
    <div className='column_title product_label-price d-none d-xl-block'>
        Price
    </div>
    <div className='column_title product_label-qty d-none d-xl-block'>
        Qty
    </div>
    <div className='column_title product_label-total d-none d-xl-block'>
        Sub total
    </div>
    
</div>
</CartTitleWrapper>
)
}


const CartTitleWrapper = styled.div `

.product_label {
margin-bottom: 20px;
padding-bottom: 16px;
border-bottom: 1px solid #ccc;
}
.product_label-items {
text-align: right;
line-height: 24px;
color: #000;
margin-top: -55px;
}

@media (min-width: 1366px){
.product_label{
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-webkit-box-orient: horizontal;
-webkit-box-direction: normal;
-ms-flex-direction: row;
flex-direction: row;
margin-bottom: 0;
padding-bottom: 0;
border-top: 1px solid #ccc;
line-height: 55px;
}
.product_label-items {
width: 135px;
margin-top: 0;
text-align: left;
color: #999;
line-height: 55px;
}
.product_label-price {
width: 117px;
}
.product_label-total {
width: 169px;
}
.column_title {
text-align: center;
color: #999;
font-weight: 700;
text-transform: uppercase;
}
.product_label-product {
text-align: left;
width: 200px;
}
.product_label-qty {
width: 109px;
}
}
`;


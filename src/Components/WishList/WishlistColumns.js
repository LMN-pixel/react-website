import React from 'react';
import styled from 'styled-components';
import Title from '../Title';

export default class WishList extends React.Component {
    render() {

        return(
           
            <WishListWrapper>

                <div className='wishlist'>
    
                    <Title name='Wishlist' title='' />
    
                    <div className='d-none d-lg-block wishlist_heading clearfix'>
                        <span className='wishlist_heading-product'>Product</span>
                        <span className='wishlist_heading-color'>Colour</span>
                        <span className='wishlist_heading-size'>Size</span>
                        <span className='wishlist_heading-price'>Price</span>
                    </div>
                </div>
            </WishListWrapper>
        );
    }
}

const WishListWrapper = styled.div `
.wishlist_heading {
    padding: 8px 0 8px 124px;
    border-top:1px solid #ccc;
    color: #999;
    text-transform: uppercase;
    font-weight: 700;
}
.wishlist_heading-product {
    float: left;
    width: 32%;
}
.wishlist_heading-color {
    float: left;
    width: 13%;
    text-align: center;
}
.wishlist_heading-size {
    float: left;
    width: 11%;
    text-align: center;
}
.wishlist_heading-price {
    float: left;
    width: 10%;
    text-align: center;
}
`;
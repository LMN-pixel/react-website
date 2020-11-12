import React from 'react';
import {ProductConsumer} from '../../context';
import WishList_list from './WishList_list';
import WishlistColumns from './WishlistColumns';
import Title from '../Title';
import EmptyWishlist from './EmptyWishlist';
import styled from 'styled-components';


export class WishList extends React.Component {
    render() {

        return (
            
                <ProductConsumer>
                    {value => {
                        const {wishlist} = value;
                        if (wishlist.length > 0){
                            return (
                                <React.Fragment>
                                    
                                    <div className='d-block mt-3 pt-5'>
                                    <div className='mt-5 pt-5'>
                                        <Title className='text-center' name='Wishlist' title='' />
                                    </div>
                                    <CartWrapper>
                                    <div className='container-fluid container_center_desktop cart cart-page shopping_cart'>
                                        <div className='table_product'>
                                            <WishlistColumns />
                                            <WishList_list value={value}/>
                                        </div>
                                    </div>
                                    </CartWrapper>
                                    
                                    </div>
                                </React.Fragment>  
                            );
                        }
                        else {
                            return (
                                <EmptyWishlist />
                            );
                        }
                    }
                }
                       
                    
                </ProductConsumer>
                
         
        );
    }
}

const CartWrapper = styled.div `
position: relative;
min-height: 100%;
margin-bottom:20px;
overflow: auto;


.shopping_cart {
    padding: 0 20px;
}

@media (min-width: 1366px){
.shopping_cart {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    padding: 0 0 40px;
}
.container_center_desktop {
    max-width: 1220px;
    margin-bottom: 0;
    padding: 0;
}
.table_product{
    
    width: 80%;
    margin-right: auto;
    margin-left: auto;
}
}
`;